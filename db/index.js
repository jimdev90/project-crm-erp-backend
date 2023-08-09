const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/negocio').then(() => {
    console.log('Db Connect');
}).catch((error) => {
    console.log('Db connection failed ' + error);
})