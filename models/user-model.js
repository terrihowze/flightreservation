const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {type:String, required:true, unique:true},
    password: String,
    reservation: [/**mongoID reference */],
    payment: {
        ccNum: Number,
        ccExp: Date
    },
    homeAddress: {
        city: String,
        State: String
    }
});

const user = mongoose.model('user', User);
module.exports = user;