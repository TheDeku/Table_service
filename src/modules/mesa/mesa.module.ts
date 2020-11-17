import { Module } from '@nestjs/common';

import { MesaController } from './mesa.controller';
import { MesaRepository } from './mesa.repository';
import { MesaService } from './mesa.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([MesaRepository])
    
  ],
  providers: [MesaService],
  controllers: [MesaController],
  })
export class MesaModule {}
