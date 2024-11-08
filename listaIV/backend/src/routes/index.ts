import { Router } from 'express';
import produtoRoutes from './produtoRoute'
import fornecedorRoutes from './fornecedorRouter'

const router = Router()

router.use('/produto', produtoRoutes)

router.use('/fornecedor', fornecedorRoutes)

export default router