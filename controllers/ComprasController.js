const Compra = require('../models/Compras');


exports.guardarCompra = async (req, res, next) => {
    try {
        const compras = req.body;
        compras.forEach( async iter => {
            await Compra.create(iter);
        });
        res.json("Se registró orden");
    } catch (error) {
        console.log(error);
        next();  
    }
}