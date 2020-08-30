const express = require('express');
const router = express.Router();
const productoController = require('../controllers/ProductoController');
const carritoController = require('../controllers/CarritoController');
const multer = require('../controllers/multer'); 

module.exports = function(){
    router.post('/productos', multer.single('imagen'), productoController.nuevoProducto);
    router.get('/productos', productoController.obtenerProducto);
    router.post('/carrito', carritoController.nuevoProducto );
    router.get('/carritos', carritoController.obtenerCarrito);
    return router;
}