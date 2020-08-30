const Carrito = require('../models/Carrito');
exports.nuevoProducto = async (req, res, next) => {
    
    try {
       const carrito = req.body;
       const produc = await Carrito.create(carrito);
       
       res.json("Se registró producto");
   } catch (error) {
       console.log(error);
       next();
   }

}
exports.obtenerCarrito = async (req, res, next) =>{
try {
    res.json( await Carrito.findAll());   
} catch (error) {
    next();
}
}