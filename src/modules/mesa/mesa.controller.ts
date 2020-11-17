import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Roles } from '../auth/decorators/role.decorators';
import { RoleGuard } from '../auth/role.guard';
import { MesaDto } from './dto/mesaDto';
import { MesaService } from './mesa.service';
import { Delete } from '@nestjs/common';

@Controller()
export class MesaController {
  constructor(private readonly _mesaService: MesaService) {}

  @Post()
  @Roles('ADMIN')
  @UseGuards(new AuthGuard(), RoleGuard)
  async createTable(@Body() mesaDto: MesaDto, @Res() res: any) {
    return await this._mesaService
      .create(mesaDto)
      .then(resp => {
        console.log(resp);
        res
          .status(HttpStatus.CREATED)
          .json({ statusCode: '201', message: 'Created' ,value: resp});
      })
      .catch(err => {
        res
          .status(HttpStatus.FORBIDDEN)
          .json({ statusCode: '403', message: 'Error created',value:err });
      });
  }

  @Delete(":id")
  @Roles('ADMIN')
  @UseGuards(new AuthGuard(), RoleGuard)
  async deleteTable(@Param('id') id,@Res() res: any) {
    return await this._mesaService.deleteTable(id).then(resp=>{
      res
      .status(HttpStatus.OK)
      .json({ statusCode: '200',value: resp});
    });
  }

  @Get()
  @Roles('ADMIN')
  @UseGuards(new AuthGuard(), RoleGuard)
  async getTables(): Promise<MesaDto[]> {
    const tables = await this._mesaService.getAll();
    return tables;
  }

  @Get(':id')
  @Roles('ADMIN')
  @UseGuards(new AuthGuard(), RoleGuard)
  async getTable(@Param('id', ParseIntPipe) id: number): Promise<MesaDto> {
    const table = await this._mesaService.get(id);
    return table;
  }

  @Put()
  @Roles('ADMIN','GARZON')
  @UseGuards(new AuthGuard(), RoleGuard)
  async udpTable(@Body() mesaDto: MesaDto){
    return this._mesaService.udpTable(mesaDto)
  }
}
