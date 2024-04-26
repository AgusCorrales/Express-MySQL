const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductsController.js');

router.post('/products',ProductController.insert);
router.put('/products/id/:id',ProductController.update);
router.get('/products',ProductController.getAll);
router.get('/products/id/:id',ProductController.getById);
router.get('/products/order',ProductController.orderDesc);
router.get('/products/name_product/:name_product',ProductController.getByName);
router.delete('/products/id/:id',ProductController.deleteById);



module.exports = router;