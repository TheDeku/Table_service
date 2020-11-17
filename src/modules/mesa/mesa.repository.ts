import { EntityRepository, Repository } from "typeorm";
import { Mesa } from "./entities/mesa.entity";
import { Mesae } from "./entities/Mesae.entity";



@EntityRepository(Mesa)
export class MesaRepository extends Repository<Mesa> {}

@EntityRepository(Mesae)
export class MesaStateRepository extends Repository<Mesae> {}