const express = require('express');
const hbs = require('hbs');
var path = require('path');
require('./hbs/helpers');
const projects = require('./controllers/projectController');

const app = express();

//dev vs production
const port = process.env.COMPUTERNAME === 'DESKTOP-C0V2FF2' ? 3000 : 80;

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
    const requestedName = req.query.name;
    const projectObject = projects.searchProject(requestedName);

    if(projectObject != null)
    {
        const projectName = projectObject.projectName;
        const projectInformation = projectObject.projectInformation;
        res.render('project', {
            projectName,
            projectCompleteName: projectInformation.completeName,
            mainImageUrl: projectInformation.mainImageUrl,
            platforms: projectInformation.platforms,
            downloadServices: projectInformation.downloadServices,
            isMobileImage: projectInformation.isMobileImage,
            projectDescription: projectInformation.projectDescription,
            secondaryImagesUrl: projectInformation.secondaryImagesUrl,
            usedTechnologies: projectInformation.usedTechnologies,
            credits: projectInformation.credits,
            gitHubLink: projectInformation.gitHubLink
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
    console.log('Escuchando peticiones en el puerto',port);
})