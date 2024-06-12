const express = require('express');
const app = express()
const port = 3000
const path = require('path')
const ejs = require('ejs')
const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use('/', indexRouter)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})


module.exports = app;
