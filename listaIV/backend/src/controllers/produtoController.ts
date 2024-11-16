import { Fornecedor } from '../models/Fornecedor';
import { Fornecedor_Produto } from '../models/Fornecedor_Produto';
import { Produto } from '../models/Produto';

export const produtoController = {
    // POST /produto
    save: async (req, res) => {
        try {
            const { Prod_nome, Prod_preco, Prod_quantidade, Forn_id } = req.body;
            const produto = await Produto.create({
                Prod_nome, 
                Prod_preco,
                Prod_quantidade,
                Forn_id
            });

            const relacionar = await Fornecedor_Produto.create({
                Forn_id: produto.Forn_id,
                Prod_cod: produto.Prod_cod
            })

            return res.status(201).json({ success: true, produto });
        }
        catch(error) {
            console.error('Erro ao criar produto:', error);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
    },

    // GET /produto
    show: async (req, res) => {
        try {
            const produtos = await Produto.findAll({
                include: Fornecedor
            })
            return res.status(201).json(produtos)
        } catch (error) {
            console.error('Erro ao encontrar produtos:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    },

    // GET /produto/:id
    showSpecifc: async (req, res) => {
        const {id} =  req.params
        try {
            const produto = await Produto.findByPk(id)
            if(!produto){
                return res.status(201).json({message: "Produto não encontrado"})
            }
            return res.status(201).json(produto)
        } catch (error) {
            console.error('Erro ao encontrar produto:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    },

    // PUT /produto/:id
    update: async (req, res) => {
        const { id } =  req.params
        const { Prod_nome, Prod_preco, Prod_quantidade, Forn_id } = req.body
        try {
            const produtoAtual = await Produto.findByPk(+id)
            const produtoAtualizado = {
                Prod_nome: Prod_nome !== undefined ? Prod_nome : produtoAtual.Prod_nome,
                Prod_preco: Prod_preco !== undefined ? Prod_preco : produtoAtual.Prod_preco,
                Prod_quantidade: Prod_quantidade !== undefined ? Prod_quantidade : produtoAtual.Prod_quantidade,
                Forn_id: Forn_id !== undefined ? Forn_id : produtoAtual.Forn_id
            }
            const [atualiza] = await Produto.update(produtoAtualizado, {
                where: { Prod_cod: id }
            })
            if (atualiza) {
                const produtoAtualizado = await Produto.findOne({ where: { Prod_cod: id } });
                return res.status(200).json({success: true, produtoAtualizado});
            } else {
                return res.status(400).json({ error: "Nenhuma alteração foi realizada." });
            }
        } catch (error) {
            console.error('Erro ao encontrar produtos:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    },

    // DELETE /produto/:id
    delete: async(req, res) => {
        const {id} =  req.params
        try {
            const deleted = await Produto.destroy({where: {Prod_cod: id}})
            if(deleted){
                return res.status(200).json({message: 'Produto excluído com sucesso'})
            }
            return res.status(400).json({message: 'Erro ao deletar'})
        } catch (error) {
            res.status(400).json({error: 'Erro ao deletar'})
        }
  }
}