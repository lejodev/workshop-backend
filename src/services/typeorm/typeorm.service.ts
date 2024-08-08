import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { carsInService } from 'src/models/cars.model';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: 'mssql',
            host: 'DESKTOP-PH6LRUF',
            port: 1433,
            username: 'alejo',
            password: 'pass',
            database: 'workshop_cars',
            entities: [carsInService],
            synchronize: true,
            logging: true,
            extra: {
                encrypt: true, // Use encryption
                trustServerCertificate: true // Trust the self-signed certificate
            }
        }
    }
}
