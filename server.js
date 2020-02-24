const express = require('express');
const hbs = require('hbs');
var path = require('path');
var fs = require('fs');
var https = require('https');
var http = require('http');
require('./hbs/helpers');
const projects = require('./controllers/projectController');

const app = express();

//dev vs production
const httpsPort = 443;
const httpPort = getHttpPort();

function getHttpPort()
{
    //Si es producción vs dev
    if (process.env.PWD === '/home/workspace/serorellanar-webpage')
    {
        return 80;
    }
    else
    {
        return 3000;
    }
}

app.use(express.static(__dirname + '/view'));
app.set('env development');
//View es un customfolder en hbs (En vez de "views")
app.set('views', path.join(__dirname, '/view'));

hbs.registerPartials(__dirname + '/view/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) =>
{
    res.render('index');
});

app.get('/project', (req, res) =>
{
    const requestedName = req.query.name;
    const projectObject = projects.searchProject(requestedName);

    if (projectObject != null)
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

app.get('*', function (req, res)
{
    res.render('error');
});

const options = {
    key: fs.readFileSync('cert/private.key'),
    cert: fs.readFileSync('cert/certificate.crt')
};

const server = https.createServer(options, app);

server.listen(httpsPort, () =>
{
    console.log("https listening on port:", httpsPort);
});

//redirect to https
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);
