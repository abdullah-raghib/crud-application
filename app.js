require('./models/db');

const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.use('/employee', employeeController);

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});