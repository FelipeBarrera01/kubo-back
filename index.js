const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/');
const path = require('path');

const sequelize = require('./config/db');

require('./models/Carrito');
require('./models/Productos');
require('./models/Compras');
sequelize.sync()
    .then(() => console.log('Conectado a mysql'))
    .catch(err => console.log(err));


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/', routes());
app.use('/uploads',express.static(path.resolve('uploads'))); 
app.listen(5000);