import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Mesa } from '../mesa/mesa.entity';

@Entity("gru_mes", { schema: "portafolio" })
export class GruMes {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "NOMBRE", nullable: true, length: 30 })
  nombre: string | null;

  @Column("datetime", { name: "CREACIÓN", nullable: true })
  creaciN: Date | null;

  @Column("char", { name: "ACTIVO", nullable: true, length: 1 })
  activo: string | null;

  @Column("varchar", { name: "TOKEN", nullable: true, length: 30 })
  token: string | null;

  @ManyToMany(type => Mesa, mesa => mesa.groups, { eager: true })
  @JoinTable({ name: 'gmes_mes' ,joinColumn: {
          name: "GRU_MESA_ID",
          referencedColumnName: "id"
      },
      inverseJoinColumn: {
          name: "MESA_ID",
          referencedColumnName: "id"
      }})
  mesas: Mesa[];


}
