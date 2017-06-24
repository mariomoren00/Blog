'use strict';

// Declare dependencies
import express from 'express';
import consign from 'consign';

// Initialize express
const app = express();

// Declare consign with path
consign({cwd: 'api'})
  .include('libs/middlewares.js')
  .then('routes')
  .then('libs/boots.js')
  .into(app);
