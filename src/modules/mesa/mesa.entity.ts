import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { GruMes } from '../gruMesa/grumes.entity';

@Index("MESA_MESAE_FK", ["mesaeId"], {})
@Entity("mesa", { schema: "portafolio" })
export class Mesa {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "NOMBRE", nullable: true, length: 30 })
  name: string | null;

  @Column("int", { name: "CAPACIDAD", nullable: true })
  capacity: number | null;

  @Column("char", { name: "AGRUPADA", nullable: true, length: 1 })
  grouped: string | null;

  @Column("varchar", { name: "TOKEN", nullable: true, length: 30 })
  token: string | null;

  @Column("int", { name: "MESAE_ID", nullable: true })
  mesaeId: number | null;

 
  @ManyToMany(type => GruMes, grupo => grupo.mesas)
  @JoinColumn()
  groups: GruMes[];


}
