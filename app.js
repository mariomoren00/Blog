'use strict';

require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import { api } from './api/config/routes';

const app = express();

// Declare cors access control
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));

// Parse application/json
app.use(bodyParser.json());

// Declare routes to API
app.use('/api/v1', api);

// Start server 
app.listen(process.env.PORT, () => {
  console.log(" ✔ Express server listening on port %d in %s mode", process.env.PORT, process.env.NODE_ENV);
});
