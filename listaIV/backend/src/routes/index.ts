import { Router } from 'express';
import produtoRoutes from './produtoRoute'
import fornecedorRoutes from './fornecedorRouter'
import compraRoutes from './compraRouter'

const router = Router()

router.use('/produto', produtoRoutes)

router.use('/fornecedor', fornecedorRoutes)

router.use('/compra', compraRoutes)

export default router