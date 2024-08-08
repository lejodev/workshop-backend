import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { carsInService } from 'src/models/cars.model'; // Use PascalCase for class names
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(carsInService) private carsRepository: Repository<carsInService>
    ) {}

    async create(car: carsInService): Promise<carsInService> {
        console.log("CREATING");
        return await this.carsRepository.save(car);
    }

    async findAllCars(): Promise<carsInService[]> {
        console.log("FINDING ALL CARS!");
        return await this.carsRepository.find();
    }

    async findRestored(): Promise<carsInService[]> {
        console.log("FINDING ALL RESTORED CARS!");
        return await this.carsRepository.find({ where: { restored: true } }); // Correct method to filter
    }
}
