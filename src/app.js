//ESTE ES EL SERVIDOR -> usar express e inicializarlo
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//connecting the db -> crud-mongo lo creamos desde aquí.
//promesas -> para saber si se conectó (.then) o falló (.catch)
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('db connected'))
.catch(err => console.log(err));


//importing routes -> el enrutador
const indexRoutes = require('./routes/index');

//settings -> toma el puerto del SO
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs')

//middlewares -> función que se ejecuta antes de llegar a las rutas.
//aquí, usamos morgan para mostrarlos por consola
//urlencoded -> entiende datos que inserta un user a través de un form. 
app.use(morgan('dev')); 
app.use(express.urlencoded({extended:false}));

//routes
app.use('/', indexRoutes);

//starting the server 
app.listen(app.get('port') , () => {
    console.log(`Server is listening in ${app.get('port')}`);
}) 