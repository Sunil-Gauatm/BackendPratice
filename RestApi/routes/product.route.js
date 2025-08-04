import express from 'express';
import { ProductContoller } from '../Controllers/product.controller.js';
import { verifyToken } from '../Middleware/jwtTokenVerify.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Product Home Page');
})

router.get('/all', ProductContoller.getAllProduct);
router.get('/:id', ProductContoller.getProductByid);
router.post('/create', ProductContoller.createProduct);
router.patch('/edit/:id', ProductContoller.editProductByID )



export default router;



