import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Fornecedor } from './Fornecedor';
import { Fornecedor_Produto } from './Fornecedor_Produto';

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

    @BelongsToMany(() => Fornecedor, () => Fornecedor_Produto)
    Fornecedores!: Fornecedor[];
}