var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('', { title: 'Express' });
});


module.exports = router;

// import express from 'express';

// const router = express.Router();

// /* GET home page. */
// router.get('/', (req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

// export default router;
