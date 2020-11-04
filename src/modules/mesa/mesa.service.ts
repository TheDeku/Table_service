import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

import { MesaDto } from './dto/mesaDto';
import { Mesa } from './mesa.entity';
import { MesaRepository } from './mesa.repository';

@Injectable()
export class MesaService {
  constructor(
    @InjectRepository(MesaRepository)
    private readonly _mesaRepository: MesaRepository,
  ) {}

  async create(mesaDto: MesaDto) {
    const mesa: Mesa[] = [];

    await Promise.all(
      mesaDto.mesa.map(async table => {
        let tableTemp: Mesa = new Mesa;
        tableTemp.name = table.name;
        tableTemp.capacity = table.capacity;
        mesa.push(tableTemp);
      }),
    );

    await this._mesaRepository.save(mesa);
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
}
