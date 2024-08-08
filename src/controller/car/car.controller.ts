import { Body, Controller, Get, Post } from '@nestjs/common';
import { carsInService } from 'src/models/cars.model';
import { CarService } from 'src/services/car/car.service';

@Controller('car')
export class CarController {
    constructor(private carsService: CarService) { }
    @Get()
    get() {
        return this.carsService.findAllCars().then(res => {
            console.log("RES", res)
            return res
        }).catch(error => {
            console.log('ERROR', error)
        })
    }

    @Post()
    createCar(@Body() body: carsInService) {
        return this.carsService.create(body)
    }

}
