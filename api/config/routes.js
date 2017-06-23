'use strict';

import express from 'express';

import { getUsers, saveUser, getUserById, updateUser, deleteUser } from '../app/controllers/users';
import { saveCategory, getCategories, getCategoryById, updateCategory, deleteCategory } from '../app/controllers/categories';
import { getPost, getPostById, savePost, getCategoryById } from '../app/controllers/posts';

// Declare router API
const api = express.Router();

api.get('/users', getUsers);
api.post('/users', saveUser);
api.get('/users/:id', getUserById);
api.put('/users/:id', updateUser);
api.delete('/users/:id', deleteUser);

api.post('/categories', saveCategory);
api.get('/categories', getCategories);
api.get('/categories/:id', getCategoryById);
api.put('/categories/:id', updateCategory);
api.delete('/categories/:id', deleteCategory);

api.get('/posts', getPost);
api.get('/posts/:id', getPostById);
api.post('/posts', savePost);
api.get('/posts/category/:id', getCategoryById);

export { api };
