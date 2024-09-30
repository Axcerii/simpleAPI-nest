import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  findAll(): Promise<Animal[]> {
    return this.animalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Animal> {
    return this.animalService.findOne(+id);
  }

  @Post()
  create(@Body() animal: Animal): Promise<Animal> {
    return this.animalService.create(animal);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.animalService.remove(+id);
  }
}