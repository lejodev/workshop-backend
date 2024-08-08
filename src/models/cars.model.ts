import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('cars_in_service')
export class carsInService {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    make: string

    @Column()
    model: string

    @Column()
    year: number

    @Column({type: "bit"})
    restored: boolean

    @Column()
    image: string
}