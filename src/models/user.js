const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        firstname: {type: String, required: true}, 
        lastname: {type: String, required: true}
        },
    username: {
        type: {type: String, required: true, min: 8},
        },
    identification: { 
        type: {type: String, required: true} , 
        number: {type: Number, required: true}
        },
    password: {type: String, required: true},
    photo: {type: String, required: true},
    active: {type: Boolean, required: true}
    });


//coge el schema y lo usa para guardar datos dentro de una colección mongodb
//users -> nombre de la colección en la db
module.exports = mongoose.model('User', UserSchema)