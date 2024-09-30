import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonService } from './person/person.service';
import { AnimalService } from './animal/animal.service';
import { PersonController } from './person/person.controller';
import { AnimalController } from './animal/animal.controller';
import { PersonModule } from './person/person.module';
import { AnimalModule } from './animal/animal.module';


@Module({
  imports: [DatabaseModule, PersonModule, AnimalModule ],
/*   controllers: [AppController, PersonController, AnimalController],
  providers: [AppService, PersonService, AnimalService], */
})
export class AppModule {}
