const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const ejs = require('ejs')
const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'))


app.use('/', indexRouter)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})


module.exports = app;
