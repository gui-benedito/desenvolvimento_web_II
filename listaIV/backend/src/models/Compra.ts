import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Produto } from './Produto';

@Table({
    tableName: 'Compra',
    timestamps: false
})
export default class Compra extends Model{

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    Compra_id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    Compra_quantidade!: number

    @ForeignKey(() => Produto)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    Prod_cod!: number;

    @BelongsTo(() => Produto)
    Produto!: Produto;
}