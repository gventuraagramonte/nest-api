import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from './'

@Entity()
export class ProductImage {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    url: string

    // Muchas imagenes pueden tener un solo producto asociado
    @ManyToOne(
        () => Product,
        (product) => product.images,
        { onDelete: 'CASCADE' }
    )
    product: Product
}