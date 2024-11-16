import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Fornecedor } from './Fornecedor';

@Table({
    tableName: 'Produto',
    timestamps: false
})
export class Produto extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    Prod_cod!: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    Prod_nome!: string;

    @Column({
        type: DataType.DECIMAL(8,2),
        allowNull: false
    })
    Prod_preco!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    Prod_quantidade!: number

    @ForeignKey(() => Fornecedor)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    Forn_id: number

    @BelongsTo(() => Fornecedor, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    Fornecedor!: Fornecedor;
}