import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity("mesae", { schema: "portafolio" })
export class Mesae {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCRIPCION", length: 30 })
  descripcion: string;

  @Column("varchar", { name: "CODIGO", nullable: true, length: 30 })
  codigo: string | null;



}
