const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let personSchema = new Schema(
    {
        name: 
        {
            type: String,
            required: [true, 'Es necesario ingresar el nombre'],
        },
        email:
        {
            type: String,
            unique: true,
            required: [true, 'Es necesario ingresar email']
        },
        profession: 
        {
            type: String,
            required: [true, 'Es necesario ingresar profesión']
        },
        hobby: 
        {
            type: String,
            required: [true, 'Es necesario ingresar hobby']
        },
        imgName:
        {
            type: String,
            required: [true, 'Es necesario ingresar al menos una imagen']
        },
        faceID:
        {
            type: String,
            required: [true, 'Error de FaceID, contacte al desarrollador']
        }
    }
);

personSchema.methods.toJSON = function()
{
    let userJson = this;
    let userObject = userJson.toObject();
    return userObject;
}

//Validador de unique
personSchema.plugin(uniqueValidator, {message: '{email} debe ser único'});
module.exports = mongoose.model('PERSON', personSchema);
