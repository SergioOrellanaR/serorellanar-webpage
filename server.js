const express = require('express');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT  || 3000;

app.use(express.static( __dirname + '/view'));

app.set('view engine', 'hbs');

app.get('/', (req, res) =>
{
    
});



app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ',port);
})