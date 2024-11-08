import { Router } from 'express';
import {produtoController} from '../controllers/produtoController'

const router = Router();

router.post('/', produtoController.save)
router.get('/', produtoController.show)
router.get('/:id', produtoController.showSpecifc)
router.put('/:id', produtoController.update)
router.delete('/:id', produtoController.delete)

export default router