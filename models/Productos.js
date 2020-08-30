const { Sequelize, Model, DataTypes } = require("sequelize");

const db = require('../config/db');

const Productos = db.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    imagen: DataTypes.STRING,
    descripcion:  DataTypes.STRING,
    precio:  DataTypes.INTEGER
    
});

module.exports = Productos;