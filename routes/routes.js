const express = require('express');
const productController = require('../controllers/productController');
const saleController = require('../controllers/saleControllers');
const productMiddlewares = require('../middlewares/productMiddlewares');
const saleMiddlewares = require('../middlewares/saleMiddlewares');

const routes = express.Router();

routes.get('/products', productController.getAll);
routes.get('/products/:id', productController.getById);
routes.post('/products', productMiddlewares.createValidation, productController.createProducts);
routes.put('/products/:id', productMiddlewares.updateValidation, productController.updateProducts);
routes.delete('/products/:id', productController.deleteProducts);
routes.get('/sales', saleController.getAll);
routes.get('/sales/:id', saleController.getById);
routes.post('/sales', saleMiddlewares, saleController.createSales);
routes.put('/sales/:id', saleMiddlewares, saleController.updateSales);

module.exports = routes;