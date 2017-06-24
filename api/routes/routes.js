'use strict';

import * as users from '../app/controllers/users';
//import * as categories from '../app/controllers/users';
//import * as posts from '../app/controllers/users';

module.exports = app => {

  app.get("/", (req, res) => res.json({message: "Welcome to our Blog Api!"}));

  app.get('/users', users.getUsers);
  app.post('/users', users.saveUser);
  app.get('/users/:id', users.getUserById);
  app.put('/users/:id', users.updateUser);
  app.delete('/users/:id', users.deleteUser);

  /*app.get('/categories', getCategories);
  app.post('/categories', saveCategory);
  app.get('/categories/:id', getCategoryById);
  app.put('/categories/:id', updateCategory);
  app.delete('/categories/:id', deleteCategory);

  app.get('/posts', getPost);
  app.get('/posts/:id', getPostById);
  app.post('/posts', savePost);
  app.get('/posts/category/:id', getCategoryById);*/

}
