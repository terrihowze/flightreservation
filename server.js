const express = require('express');
const {resolve} = require('path');
const cors = require('cors');
require('dotenv').config;

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use('/user' , require("./routes/api/user"));

app.get('/', (req,res) => {
    //display page
    res.send('Hello World!');
    //res.sendFile(resolve("C:/Users/Kaushik/Skillstorm/MERN Training/Project_1/public/views/index.html"));
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});