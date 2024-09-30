import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Person } from '../person/person.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @UpdateDateColumn({type: 'timestamp'})
  created: Date;

  @CreateDateColumn({type: 'timestamp'})
  modified: Date;
  
  @Column()
  name: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  color: string;

  @Column('float')
  weight: number;

  @ManyToOne(() => Person, (person) => person.animals)
  owner: Person;
}