const { Sequelize, Model, DataTypes } = require("sequelize");


const db = require('../config/db');

const Compras = db.define('compras', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orden: DataTypes.STRING,
    imagen:  DataTypes.STRING,
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    total: DataTypes.INTEGER

});
module.exports = Compras;