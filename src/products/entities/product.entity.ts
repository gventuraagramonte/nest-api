// Crea la referencia en la base de datos (TABLA)
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('varchar', {
        unique: true,
    })
    title: string

    @Column('numeric', { default: 0 })
    price: number

    @Column({ type: 'varchar', nullable: true })
    description: string

    @Column('varchar', {
        unique: true
    })
    slug: string

    @Column('int', {
        default: 0
    })
    stock: number

    @Column('simple-array')
    sizes: string[]

    @Column('varchar')
    gender: string
}
