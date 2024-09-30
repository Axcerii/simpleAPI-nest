import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Timestamp, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Animal } from '../animal/animal.entity';

@Entity()  // Cela indique à TypeORM que cette classe est une entité
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @UpdateDateColumn({type: 'timestamp'})
  created: Date;

  @CreateDateColumn({type: 'timestamp'})
  modified: Date;
  
  @Column()  
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => Animal, (animal) => animal.owner)
  animals: Animal[];
}