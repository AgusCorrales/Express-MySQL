const express = require('express');
const ProductosCategoriasController = require('../controller/ProductsCategoriesControler');
const router = express.Router();

router.post("/productoscategorias", ProductosCategoriasController.insert);
router.post("/productoscategorys", ProductosCategoriasController.getAll);










module.exports = router;