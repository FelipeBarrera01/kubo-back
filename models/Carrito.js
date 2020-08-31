const { Sequelize, Model, DataTypes } = require("sequelize");

const db = require('../config/db');

const Carrito = db.define('carrito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    imagen: DataTypes.STRING,
    descripcion:  DataTypes.STRING,
    cantidad:  DataTypes.INTEGER,
    precio:  DataTypes.INTEGER
    
});

module.exports = Carrito;