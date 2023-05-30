const { Router } = require('express');
const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = Router();


router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategories);
router.patch('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);


module.exports = router;