'use strict';

import * as users from '../app/controllers/users';
import * as categories from '../app/controllers/categories';
import * as posts from '../app/controllers/posts';

import express from 'express';

module.exports = app => {
  
  var api = express.Router();              

  // Declare access route 
  api.get("/", (req, res) => res.json({message: "Welcome to our Blog Api!"}));

  api.get('/users', users.getUsers);
  api.post('/users', users.saveUser);
  api.get('/users/:id', users.getUserById);
  api.put('/users/:id', users.updateUser);
  api.delete('/users/:id', users.deleteUser);

  api.get('/categories', categories.getCategories);
  api.post('/categories', categories.saveCategory);
  api.get('/categories/:id', categories.getCategoryById);
  api.put('/categories/:id', categories.updateCategory);
  api.delete('/categories/:id', categories.deleteCategory);

  api.get('/posts', posts.getPost);
  api.get('/posts/:id', posts.getPostById);
  api.post('/posts', posts.savePost);
  api.get('/posts/category/:id', posts.getCategoryById);
  api.get('/posts/tag/:slug', posts.getTagSlug);

  app.use('/api/v1', api);
}
