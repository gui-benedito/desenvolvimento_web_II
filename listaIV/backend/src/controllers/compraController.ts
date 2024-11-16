import { where } from 'sequelize';
import Compra from '../models/Compra';
import { Produto } from '../models/Produto';

export const compraController = {
    save: async (req, res) => {
        try {
            const { Compra_id, Compra_quantidade, Prod_cod } = req.body
            const produto = await Produto.findByPk(Prod_cod);

            const compra = await Compra.create({
                Compra_id,
                Compra_quantidade,
                Prod_cod,
                Compra_valor: Compra_quantidade * produto.Prod_preco
            })

            if (produto) {
                const nova_quantidade = produto.Prod_quantidade - Compra_quantidade;
                await produto.update({ Prod_quantidade: nova_quantidade });
            } else {
                console.log("Produto não encontrado");
            }

            res.status(200).json({success: true, compra})
        } catch (error) {
            console.error('Erro ao cadastrar compra:', error);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
    },
    show: async (req, res) => {
        try {
            const compras = await Compra.findAll({
                include: Produto
            })
            return res.status(200).json(compras)
        } catch (error) {
            
        }
    }
}