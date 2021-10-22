const router = require('express').Router();
const {resolve} = require('path');
const {createUser, login} = require('../../controller/api-controller');

router.post('/', (req,res)=>{
    createUser(req);
});

router.post('/login', (req,res)=>{
    login(req);
});

module.exports = router;