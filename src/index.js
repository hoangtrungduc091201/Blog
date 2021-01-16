const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const methodOverride = require('method-override');

const route= require('./routes/index.js')
const db= require('./config/db');

//Connect to Db
db.connect();

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//HTTP logger
// app.use(morgan('combined'))

//Template engines
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers:{
    sum: (a,b) => a+b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//Router init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
