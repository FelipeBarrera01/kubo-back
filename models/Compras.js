const { Sequelize, Model, DataTypes } = require("sequelize");

const Producto = require('../models/Productos');
const db = require('../config/db');

const Compras = db.define('compras', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    totalcompra: DataTypes.INTEGER,
    numorden: DataTypes.STRING
});
Producto.hasMany(Compras);
module.exports = Compras;