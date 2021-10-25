const router = require('express').Router();
const {resolve} = require('path');
const {createUser, login} = require('../../api-controller');

router.post('/', async (req,res)=>{
    console.log("1");
    await createUser(req.body);
    res.status(201);
    console.log('auccess');
});

router.post('/users/login', (req,res)=>{
    login(req);
});

module.exports = router;