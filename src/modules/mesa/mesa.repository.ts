import { EntityRepository, Repository } from "typeorm";
import { Mesa } from "./mesa.entity";

@EntityRepository(Mesa)
export class MesaRepository extends Repository<Mesa> {}