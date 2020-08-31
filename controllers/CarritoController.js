const Carrito = require('../models/Carrito');
exports.nuevoProducto = async (req, res, next) => {

    try {
        const carrito = req.body;
        carrito.cantidad = 1;
        const produc = await Carrito.create(carrito);

        res.json("Se registró producto");
    } catch (error) {
        console.log(error);
        next();
    }

}
exports.obtenerCarrito = async (req, res, next) => {
    try {
        res.json(await Carrito.findAll());
    } catch (error) {
        next();
    }
}

exports.borrarCarrito = async (req, res, next) => {
    try {
        console.log(req.body);
        const ids = req.body;
        ids.forEach( async iter => {
            await Carrito.destroy({
                where:{
                    id: iter.id
                }
            });
        });
        res.json("ok");
    } catch (error) {
        next();
    }
}