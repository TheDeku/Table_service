import { GrumesModule } from './modules/gruMesa/grumes.module';
import { Global, Module } from '@nestjs/common';
import { Configuration } from './config/config.keys';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { MesaModule } from './modules/mesa/mesa.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Global()
@Module({
  imports: [GrumesModule, ConfigModule.forRoot(), DatabaseModule, MesaModule],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
