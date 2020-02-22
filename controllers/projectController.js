//TODO: projects = JSON object
const fs = require('fs');


const rawData = fs.readFileSync('./data/projects.json', );
const parsedProjects = JSON.parse(rawData);


const searchProject = (projectName) =>
{
    var result = parsedProjects.filter(x => x.projectName === projectName);
    // && projectName in projects 
    if(projectName != undefined && result.length>0)
    {
        return result[0];
    }
    else
    {
        return null;
    }
}

module.exports =
{
    searchProject
};