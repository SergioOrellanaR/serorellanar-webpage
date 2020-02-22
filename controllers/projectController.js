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

const getCredits = (projectName) => {
    return "Créditos: "+ projectName;
}



module.exports =
{
    projects,
    isProjectNameValid,
    mainImageUrl,
    getPlatform,
    getProjectDescription,
    getSecondaryImages,
    getCredits
};