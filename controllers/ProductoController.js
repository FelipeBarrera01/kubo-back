const Producto = require('../models/Productos');
const multer = require('multer');
const shortid = require('shortid');




exports.nuevoProducto = async (req, res, next) => {
    
     try {
        const producto = req.body;
        if (req.file.filename) {
            producto.imagen = req.file.path;
        }
        const produc = await Producto.create(producto);
        
        res.json("Se registró producto");
    } catch (error) {
        console.log(error);
        next();
    }

}
exports.obtenerProducto = async (req, res, next) => {
    try {
        res.json( await Producto.findAll());
    } catch (error) {
        console.log(error);
        next();  
    }
}