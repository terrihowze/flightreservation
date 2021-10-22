const express = require('express');
const {resolve} = require('path');
const routes = require("./routes");
require('dotenv').config;

const app = express();
//const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(routes);

app.get('/', (req,res) => {
    //display page
    res.sendFile(resolve("./public/views/index.html"));
    //res.sendFile(resolve("C:/Users/Kaushik/Skillstorm/MERN Training/Project_1/public/views/index.html"));
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});