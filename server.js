const express = require('express');
const hbs = require('hbs');
var path = require('path');
require('./hbs/helpers');
const projects = require('./controllers/projectController');

const app = express();

const port = process.env.PORT  || 3000;

app.use(express.static( __dirname + '/view'));
app.set('env development');
//View es un customfolder en hbs (En vez de "views")
app.set('views', path.join(__dirname, '/view'));

hbs.registerPartials( __dirname + '/view/partials');

app.set('view engine', 'hbs');



app.get('/', (req, res) =>
{
    res.render('index');
    
});

app.get('/project', (req, res) =>
{
    const projectName = req.query.name;

    if(projects.isProjectNameValid(projectName))
    {
        res.render('project', {
            projectName,
            mainImageUrl: projects.mainImageUrl(projectName),
            platform: projects.getPlatform(projectName),
            description: projects.getProjectDescription(projectName),
            secondaryImages: projects.getSecondaryImages(projectName),
            credits: projects.getCredits(projectName)
        });
    }
    else
    {
        res.render('error');
    }
});

app.get('*', function(req, res){
    res.render('error');
});


app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ',port);
})