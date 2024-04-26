const express = require('express');
const CategoryController = require('../controller/CategoriesController');
const router = express.Router();


router.post("/categories", CategoryController.insert);
router.put("/categories/id/:id", CategoryController.update);
router.get("/categories", CategoryController.getAll);
router.put("/categories/id/:id", CategoryController.getById);



module.exports = router;