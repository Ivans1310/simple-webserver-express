const express = require('express');


// trae funcion de express para utilizar express
const app = express();

const hbs = require('hbs');

// esto es para desplegar el proyecto en el puerto que le asigne Heroku
// cuando se despliega en modo local no tiene en cuenta la primera parte del objeto
const port = process.env.PORT || 3000;

//middleware : es una instruccion o callback siempre sin importar ela url que la persona pida
// ene esta caso vamos a servir contenido estatico de la carpeta public 
// Por defecto toma el index.html, si quieres quese cargue un archivo llamado home, debe 
// especificar en la url asi /home.html
// __dirname : no importa cual sea la URL(depende del server) y concatenale la siguiente ruta
app.use(express.static(__dirname + '/public'));

// Express HBS engine
// directorio que contiene todos mis parciales
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

// para manejar una solicitud get cuando el PATH sea un /
app.get('/', function(req, res) {
    // res.send('Hello World')
    // let salida = {
    //     nombre: 'Ivan',
    //     edad: 29,
    //     url: req.url
    // };
    //res.send(salida);
    res.render('home', {
        nombre: 'Ivan Sanchez',
        anio: new Date().getFullYear()
    });

})
app.get('/about', function(req, res) {

    res.render('about', {

        anio: new Date().getFullYear()
    });

})

app.listen(port, () => {
    console.log(`escuchando peticiones por el puerto ${port}`);
})