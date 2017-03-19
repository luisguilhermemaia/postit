const express =  require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//Log das requests no console
app.use(logger('dev'));

//parse to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the Post-it app.',
}));


module.exports = app;

