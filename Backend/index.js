const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT;

const dbURI = process.env.MONGO_URI_DEV;

mongoose.connect(dbURI)
    .then(() => {
        console.log("Let's go")
        app.listen(PORT);
    })
    .catch(err => {
        console.log("ERROR!!")
        console.log(err)
    })

app.use(routes);