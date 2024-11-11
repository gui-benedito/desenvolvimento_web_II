import { Fornecedor } from '../models/Fornecedor';
import { Produto } from '../models/Produto';

export const produtoController = {
    // POST /produto
    save: async (req, res) => {
        try {
            const { Prod_nome, Prod_preco, Forn_id } = req.body;
            const produto = await Produto.create({
                Prod_nome, 
                Prod_preco,
                Forn_id
            });

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
        const { id } = req.params;
        const { Forn_nome } = req.body;
        try {
            const fornecedorAtual = await Fornecedor.findByPk(+id);
    
            const fornecedorAtualizado = {
                Forn_nome: Forn_nome !== undefined ? Forn_nome : fornecedorAtual.Forn_nome,
            };
    
            const [atualiza] = await Fornecedor.update(fornecedorAtualizado, {
                where: { Forn_id: id }
            });
    
            if (atualiza) {
                const fornecedorAtualizado = await Fornecedor.findOne({ where: { Forn_id: id } });
                return res.status(200).json({ success: true, fornecedorAtualizado: fornecedorAtualizado });
            } else {
                return res.status(400).json({ error: "Nenhuma alteração foi realizada." });
            }
    
        } catch (error) {
            console.error('Erro ao atualizar fornecedor:', error);
            return res.status(500).json({ error: 'Erro interno no servidor' });
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