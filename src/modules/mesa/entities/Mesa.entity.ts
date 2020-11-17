
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("MESA_MESAE_FK", ["mesaeId"], {})
@Entity("mesa", { schema: "portafolio" })
export class Mesa {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "NOMBRE", nullable: true, length: 30 })
  nombre: string | null;

  @Column("int", { name: "CAPACIDAD", nullable: true })
  capacidad: number | null;

  @Column("char", { name: "AGRUPADA", nullable: true, length: 1 })
  agrupada: string | null;

  @Column("varchar", { name: "TOKEN", nullable: true, length: 30 })
  token: string | null;

  @Column("int", { name: "MESAE_ID", nullable: true })
  mesaeId: number | null;



}
