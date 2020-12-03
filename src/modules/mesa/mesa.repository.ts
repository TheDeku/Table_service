import { EntityRepository, Repository } from "typeorm";
import { Mesae } from "./entities/Mesae.entity";
import { Mesa } from './entities/Mesa.entity';



@EntityRepository(Mesa)
export class MesaRepository extends Repository<Mesa> {}

@EntityRepository(Mesae)
export class MesaStateRepository extends Repository<Mesae> {}