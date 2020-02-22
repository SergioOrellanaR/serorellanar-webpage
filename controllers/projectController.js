//TODO: projects = JSON object

const projects = {
    thisWebPage: 'thisWebPage',
    chilemergencias: 'chilemergencias',
    humankindVirtue: 'humankindVirtue',
    oss: 'oss',
    lindaSonrisa: 'lindaSonrisa',
    walmart: 'walmart'
}

const isProjectNameValid = (projectName) =>
{
    if(projectName != undefined && projectName in projects )
    {
        return true;
    }
    else
    {
        return false;
    }
}

const projectObject = (projectName) =>
{
    return "Imagen: " + projectName;
}


module.exports =
{
    projects,
    isProjectNameValid,
    projectObject
};