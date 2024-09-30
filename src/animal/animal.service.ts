import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  findAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  findOne(id: number): Promise<Animal> {
    return this.animalRepository.findOneBy({ id });
  }

  create(animal: Animal): Promise<Animal> {
    return this.animalRepository.save(animal);
  }

  async remove(id: number): Promise<void> {
    await this.animalRepository.delete(id);
  }
}