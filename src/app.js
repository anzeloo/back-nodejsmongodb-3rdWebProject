//ESTE ES EL SERVIDOR -> usar express e inicializarlo
var createError = require('http-errors');
const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');

const db = require('../config/mongoose');

const app = express();

//importing routes -> el enrutador
const indexRoutes = require('./routes/index'); 
const usersRoutes = require('./routes/users');

//settings -> toma el puerto del SO
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs')

//middlewares -> función que se ejecuta antes de llegar a las rutas.
//aquí, usamos morgan para mostrarlos por consola
//urlencoded -> entiende datos que inserta un user a través de un form. 
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', indexRoutes);
app.use('/users', usersRoutes);

//starting the server 
app.listen(app.get('port') , () => {
    console.log(`Server is listening in ${app.get('port')}`);
}) 