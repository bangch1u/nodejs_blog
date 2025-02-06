const path = require('path');
const express = require('express');
const morgan = require('morgan');

const handlebars = require('express-handlebars');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

//Http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({
   extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//Route
app.get('/', (req, res) => {
  return res.render('home');
});

app.get('/news', (req, res) => {
  return res.render('news');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});