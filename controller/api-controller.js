const mongoose = require('mongoose');
const bcrypt = ('bcrypt');
const user = require('../models/user-model');
const flight = require('../models/flight-model');
const reserve = require('../models/reserve-model');

const createUser = async (req) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const name = req.body.name;
        const User = new user({name,hashedPass});//might need to change hashedPass to pass
        await User.save();
        mongoose.connection.close();
        res.status(201).send();
    }catch{
        res.status(500).send();
    }
}

const login = async (req) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const user = users.find(user => user.name === req.body.name);
        if(user === null){
            return res.status(400).send("cannot find user");
        }
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success');
        }else{
            res.send('not allowed');
        }
    }catch{
        res.status(500).send();
    }
}



module.exports = {
    //controllers go out here
    createUser,
    login
}