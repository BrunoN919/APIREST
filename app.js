//Imports
const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Config BodyParser
app.use(bodyParser.json());

//Config MongoDB
mongoose.connect('mongodb://localhost/apirest', { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
} , () => {}); 

mongoose.Promise = global.Promise;
module.exports = mongoose;

//Carrengando controllers
require('./controllers/CarroController')(app);
require('./controllers/UserController')(app);

//Configs servidor
app.listen(3000, () => {});