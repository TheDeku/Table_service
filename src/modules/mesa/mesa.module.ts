import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesaController } from './mesa.controller';
import { MesaRepository } from './mesa.repository';
import { MesaService } from './mesa.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MesaRepository])
    
  ],
  providers: [MesaService],
  controllers: [MesaController],
  })
export class MesaModule {}
