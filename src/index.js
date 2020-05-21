const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//INICIALIZACIONES
const app = express();

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


//MIDDLEWARES
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//VARIABLES GLOBALES



//RUTAS
app.use(require('./routes/index'));


//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));


//INICIALIZAR SERVIDOR
app.listen(app.get('port'), () => {
  console.log('Servidor en el puerto', app.get('port'));
});