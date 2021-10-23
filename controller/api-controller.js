const mongoose = require('mongoose');
const bcrypt = ('bcrypt');
const user = require('../models/user-model');
const flight = require('../models/flight-model');
const reserve = require('../models/reserve-model');
require('dotenv').config();

const createUser = async (req,res) => {
        try{
            await mongoose.connect(process.env.ATLAS_URI);
        // const salt = await bcrypt.genSalt();
        const hashedPass = bcrypt.hashSync(req.body.password, 10);
        const name = req.body.name;
        const User = new user({name,hashedPass});//might need to change hashedPass to pass
        await User.save();

        // await bcrypt.genSalt(10, (err,salt) =>{
        //     bcrypt.hash(req.body.password, salt, (err,hash)=>{
        //         const User = new user({name,hash});
        //         User.save();
        //     });
        // });
        mongoose.connection.close();
        }catch(err){
            console.log(err);
        }
}

const login = async (req,res) => {
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