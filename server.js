const express = require('express');
const hbs = require('hbs');
var path = require('path');
require('./hbs/helpers');

const app = express();

const port = process.env.PORT  || 3000;

app.use(express.static( __dirname + '/view'));

//View es un customfolder en hbs (En vez de "views")
app.set('views', path.join(__dirname, '/view'));

hbs.registerPartials( __dirname + '/view/partials');

app.set('view engine', 'hbs');



app.get('/', (req, res) =>
{
    res.render('index', {
        name: 'Sergio'
    });
    
});


app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ',port);
})