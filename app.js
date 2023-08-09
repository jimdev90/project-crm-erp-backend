const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 4201;
require('./db');

const app = express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(cors());

app.listen(PORT, () => {
    console.log('En el puerto: ' + PORT);
})

module.exports = app;

