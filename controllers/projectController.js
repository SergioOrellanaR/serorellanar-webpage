const projects = {
    thisWebPage: 'thisWebPage',
    chilemergencias: 'chilemergencias',
    humankindVirtue: 'humankindVirtue',
    oss: 'oss',
    lindaSonrisa: 'lindaSonrisa',
    process: 'process'
}

const isProjectNameValid = (projectName) =>
{
    console.log(projectName);
    if(projectName != undefined && projectName in projects )
    {
        console.log(true);
        return true;
    }
    else
    {
        console.log(false);
        return false;
    }
}

const mainImageUrl = (projectName) =>
{
    return "Imagen: " + projectName;
}

const getPlatform = (projectName) =>
{
    return "Plataforma: " + projectName;
}

const getProjectDescription = (projectName) =>
{
    return "Descripción:  " + projectName;
}

const getSecondaryImages = (projectName) =>
{
    return "Imágenes secundarias: " + projectName;
}


module.exports =
{
    projects,
    isProjectNameValid,
    mainImageUrl,
    getPlatform,
    getProjectDescription,
    getSecondaryImages
};