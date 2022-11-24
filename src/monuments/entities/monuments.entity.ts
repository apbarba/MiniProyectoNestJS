import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('MONUMENTS')
export class Monumentos {
   
    @PrimaryGeneratedColumn()
    id: string;

    @Column('varchar', {
        nullable: false,
        length: 150,
        name: 'monument_name'
    })
    name: string;

    @Column('varchar', {
        nullable: false,
        length: 150,
        name: 'country_name'
    })
    country: string;

    @Column('varchar', {
        nullable: false,
        length: 150,
        name: 'city_name'
    })
    city: string;

    @Column('varchar', {
        nullable: false,
        length: 150,
        name: 'url_foto'
    })
    url: string;
}
