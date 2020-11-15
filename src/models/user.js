const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        firstname: String , 
        lastname: String
        },
    username: {
        type: String,
        validate: {
            validator: function(text) {
                return text.size() < 8;
            },
            message: 'Username must contain minimun 8 characters'
            }
        },
    identification: { 
        type: String , 
        number: Number
        },
    password: String,
    photo: Buffer,
    active: Boolean
});


//coge el schema y lo usa para guardar datos dentro de una colección mongodb
//users -> nombre de la colección en la db
module.exports = mongoose.model('users', UserSchema)