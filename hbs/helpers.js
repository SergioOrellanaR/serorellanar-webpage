const hbs = require('hbs');


//helpers

hbs.registerHelper('getAge', () => {
    var today = new Date();
    var birthDate = new Date(1994, 4, 16);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age = age - 1;
    }

    return age;
})