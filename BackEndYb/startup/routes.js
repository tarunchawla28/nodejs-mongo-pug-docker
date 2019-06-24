const express = require('express');
const users = require('../routes/users')
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


module.exports = function (app) {
  app.use(express.json())
  //app.use(bodyParser.json());
  //app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(cors());
  // app.options('*', cors());
  /**  app.use(function (req, res, next) {
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // next();
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
      
      //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      
        // Pass to next layer of middleware
        next();
    });*/

   app.all("/*", function (req, res, next) {
     res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
   next();
   });
   app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/users', users);
}