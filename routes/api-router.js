const router = require('express').Router();
const {resolve} = require('path');
const {createUser, login} = require('../controller');

router.post('/users', (req,res)=>{
    createUser(req);
});

router.post('/users/login', (req,res)=>{
    login(req);
});

module.exports = router;