import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/typeorm/typeorm.service';
import { CarService } from './services/car/car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { carsInService } from './models/cars.model';
import { CarController } from './controller/car/car.controller';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeormService }),
  TypeOrmModule.forFeature([carsInService]) // Do this for each table
  ],
  controllers: [AppController, CarController],
  providers: [AppService, TypeormService, CarService],
})
export class AppModule { }
