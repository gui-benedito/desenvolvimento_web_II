import { Fornecedor } from "../models/Fornecedor";
import { Produto } from "../models/Produto";

export const fornecedorController = {
    // POST /fornecedor
    save: async (req, res) => {
        try {
            const { Forn_nome } = req.body
            const fornecedor = await Fornecedor.create({
                Forn_nome, 
              });
              
              return res.status(201).json(fornecedor);
        }
        catch(error){
            console.error('Erro ao criar produto:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    },

    // GET /fornecedor
    show: async (req, res) => {
        try {
            const fornecedor = await Fornecedor.findAll({
                include: Produto
            })
            return res.status(201).json(fornecedor)
        } catch (error) {
            console.error('Erro ao encontrar produtos:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    },

    // GET /fornecedor/:id
    showSpecifc: async (req, res) => {
        const {id} =  req.params
        try {
            const fornecedor = await Fornecedor.findByPk(id)
            if(!fornecedor){
                return res.status(201).json({message: "Fornecedor não encontrado"})
            }
            return res.status(201).json(fornecedor)
        } catch (error) {
            console.error('Erro ao encontrar fornecedor:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    },

    // PUT /fornecedor/:id
    update: async (req, res) => {
        const { id } =  req.params
        const { Forn_nome } = req.body
        try {
            const fornecedorAtual = await Fornecedor.findByPk(+id)

            const fornecedorAtualizado = {
                Forn_nome: Forn_nome !== undefined ? Forn_nome : fornecedorAtual.Forn_nome,
            }

            const [atualiza] = await Fornecedor.update(fornecedorAtualizado, {
                where: { Forn_id: id }
            })

            if (atualiza) {
                const fornecedorAtualizado = await Fornecedor.findOne({ where: { Forn_id: id } });
                return res.status(200).json(fornecedorAtualizado);
            } else {
                return res.status(400).json({ error: "Nenhuma alteração foi realizada." });
            }

        } catch (error) {
            console.error('Erro ao encontrar produtos:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    },

    // DELETE /fornecedor/:id
    delete: async(req, res) => {
        const {id} =  req.params
        try {
            const deleted = await Fornecedor.destroy({where: {Forn_id: id}})
            if(deleted){
                return res.status(200).json({message: 'Fornecedor excluído com sucesso'})
            }
            return res.status(400).json({message: 'Erro ao deletar'})
        } catch (error) {
            res.status(400).json({error: 'Erro ao deletar'})
        }
  }
}