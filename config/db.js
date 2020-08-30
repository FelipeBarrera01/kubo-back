const Sequelize = require('sequelize');

const sequelize = new Sequelize('carrokubo', 'root', 'pasword', {
    host: 'localhost',
    dialect: 'mysql' ,
    port:3306

  });

  module.exports = sequelize;