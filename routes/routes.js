const express = require('express');
const productController = require('../controllers/productController');
const saleController = require('../controllers/saleControllers');

const routes = express.Router();

routes.get('/products', productController.getAll);
routes.get('/products/:id', productController.getById);
routes.post('/products', productController.createProducts);
routes.get('/sales', saleController.getAll);
routes.get('/sales/:id', saleController.getById);

module.exports = routes;