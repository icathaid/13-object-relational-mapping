'use strict';

// 3rd Party Libraries
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Custom Libraries
import router from './api/api.js';

// Custom Middleware
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

let app = express();
let bodyParser = require('body-parser')

// App level middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser);
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json;
// Our API Routes
app.use(router);

app.post(/api/v1/model, jsonParser, function(req, res) {
  if(!req.body){
    return res.sendStatus(400);
  }
});
// Errors and 404's
app.use(notFound);
app.use(errorHandler);

let server = false;

module.exports = {
  start: (port) => {
    if(! server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log(`Server up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close( () => {
      console.log('Server has been stopped');
    });
  },
};