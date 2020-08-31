const express = require('express');
const router = express.Router();
const productoController = require('../controllers/ProductoController');
const carritoController = require('../controllers/CarritoController');
const compraController = require('../controllers/ComprasController');
const multer = require('../controllers/multer'); 

module.exports = function(){
    router.post('/productos', multer.single('imagen'), productoController.nuevoProducto);
    router.get('/productos', productoController.obtenerProducto);
    router.post('/carrito', carritoController.nuevoProducto );
    router.get('/carritos', carritoController.obtenerCarrito);
    router.post('/compras', compraController.guardarCompra);
    router.post('/borrar-carrito', carritoController.borrarCarrito);
    router.get('/productos/:term', productoController.filtro);
    return router;
}