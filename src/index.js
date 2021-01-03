const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))
//HTTP logger
app.use(morgan('combined'))

//Template engines
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/news', function (req, res) {
  res.render('news');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
