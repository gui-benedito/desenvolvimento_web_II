import { Table, Column, Model, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Fornecedor_Produto } from './Fornecedor_Produto';
import { Produto } from './Produto';

@Table({
    tableName: 'Fornecedor',
    timestamps: false
})

export class Fornecedor extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    Forn_id!: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: true
    })
    Forn_nome!: string;

    @HasMany(() => Produto, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    Produtos!: Produto[];
}

