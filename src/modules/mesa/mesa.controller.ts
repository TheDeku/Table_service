import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Roles } from '../auth/decorators/role.decorators';
import { RoleGuard } from '../auth/role.guard';
import { MesaDto } from './dto/mesaDto';
import { MesaService } from './mesa.service';

@Controller()
export class MesaController {
  constructor(private readonly _mesaService: MesaService) {}

  @Post()
  //   @Roles('EXAMPLE')
  //   @UseGuards(new AuthGuard(), RoleGuard)
  async createdTransaction(@Body() mesaDto: MesaDto, @Res() res: any) {
    return await this._mesaService
      .create(mesaDto)
      .then(() => {
        res
          .status(HttpStatus.CREATED)
          .json({ statusCode: '201', message: 'Created' });
      })
      .catch(() => {
        res
          .status(HttpStatus.FORBIDDEN)
          .json({ statusCode: '403', message: 'Error created' });
      });
  }

  @Get()
  //   @Roles('EXAMPLE')
  //   @UseGuards(new AuthGuard(), RoleGuard)
  async getTables(): Promise<MesaDto[]> {
    const tables = await this._mesaService.getAll();
    return tables;
  }

  @Get(':id')
  //   @Roles('EXAMPLE')
  //   @UseGuards(new AuthGuard(), RoleGuard)
  async getTable(@Param('id', ParseIntPipe) id: number): Promise<MesaDto> {
    const table = await this._mesaService.get(id);
    return table;
  }
}
