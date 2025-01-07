import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//Ett schema för en MySql tabell. Inte så mycket att säga mer än att den skapas enligt dessa specs i MySql-databasen.
//TYPEORM ger säkerhet mot SQL-injektioner.
@Entity()
export class Disc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  brand: string;

  @Column({ length: 100 })
  model: string;

  @Column({ length: 100 })
  version: string;

  @Column({ length: 100 })
  plastic: string;

  @Column('text')
  type: string;

  @Column('int')
  amount: number;

  @Column({ length: 20 })
  fly_stats: string;

  @Column({ length: 10000, nullable: true  })
  about: string;

  @Column('int')
  price: number;
}