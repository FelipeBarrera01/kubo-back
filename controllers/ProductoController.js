const Producto = require('../models/Productos');
const multer = require('multer');
const shortid = require('shortid');
const  Sequelize  = require('sequelize');
const Op = Sequelize.Op;




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
exports.filtro = async (req, res, next) =>{
    try {
        console.log(req.params);
        res.json( await Producto.findAll(
            {where: 
                {categoria:
                    {[Op.like]:  req.params.term + '%'}
                }
            }));
    } catch (error) {
       next(); 
    }
}