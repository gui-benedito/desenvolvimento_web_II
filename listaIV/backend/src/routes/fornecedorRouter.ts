import { Router } from 'express';
import  { fornecedorController } from '../controllers/fornecedorController'

const router = Router();

router.post('/', fornecedorController.save)
router.get('/', fornecedorController.show)
router.get('/:id', fornecedorController.showSpecifc)
router.put('/:id', fornecedorController.update)
router.delete('/:id', fornecedorController.delete)

export default router