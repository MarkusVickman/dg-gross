import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

//Ett schema för en MySql tabell. Inte så mycket att säga mer än att den skapas enligt dessa specs i MySql-databasen.
//TYPEORM ger säkerhet mot SQL-injektioner.
//@exclude används för att inte lösenord ska skickas med.

@Entity()
export class User {

  @PrimaryColumn({ length: 200 })
  email: string;

  @Column({ length: 200 })
  name: string;

  @Column('text')
  @Exclude()
  password: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: false })
  isAdmin: boolean;
}