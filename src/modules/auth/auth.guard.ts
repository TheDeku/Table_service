import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { env } from 'process';
import { Configuration } from '../../config/config.keys';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      return false;
    }

    request.user = await this.validateToken(request.headers.authorization);
    return true;
  }

  async validateToken(auth: string) {
    const config = new ConfigService();
    console.log(auth);
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const token = auth.split(' ')[1];
    console.log(token);
    try {
      console.log(env.JWT_SECRET);
      const decoded: any = await jwt.verify(token, config.get(Configuration.JWT_SECRET));
      console.log(decoded);
      return decoded;
    } catch (err) {
      console.log(err);
      const message = 'Token error: ' + (err.message || err.name);
      throw new HttpException(message, HttpStatus.UNAUTHORIZED);
    }
  }
}