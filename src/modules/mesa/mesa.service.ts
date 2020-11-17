import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { plainToClass } from 'class-transformer';

import { MesaDto } from './dto/mesaDto';
import { Mesa } from './mesa.entity';
import { MesaRepository } from './mesa.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MesaService {
  constructor(
    @InjectRepository(MesaRepository)
    private readonly _mesaRepository: MesaRepository,
  ) {}

  async create(mesaDto: MesaDto) {
    let mesa = new Mesa();
    mesa.name = mesaDto.name;
    mesa.capacity = mesaDto.capacity;
    return await this._mesaRepository.save(mesa);
  }

  async get(id: number): Promise<MesaDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const table: Mesa = await this._mesaRepository.findOne(id);

    if (!table) {
      throw new NotFoundException();
    }
      return plainToClass(MesaDto, table);
  }


  async getAll(): Promise<MesaDto[]> {
    const tables: Mesa[] = await this._mesaRepository.find({});
    return tables.map(table => plainToClass(MesaDto, table));
  }

  async deleteTable(id:number):Promise<any>{
    let message;
    await this._mesaRepository.delete(id).then(resp=>{
      if (resp.raw.protocol41) {
        message = {message:"Eliminado correctamente"}
      }
    }).catch(err=>{

        message = {message:"no pudo ser eliminado correctamente",value:err};

    });

    return message;
  }

  async udpTable(table:MesaDto){
    let mesa = new Mesa();
    mesa.id = table.id;
    mesa.name = table.name;
    mesa.capacity = table.capacity;
    mesa.mesaeId = table.mesaE;
    return this._mesaRepository.save(mesa);
  }
}
