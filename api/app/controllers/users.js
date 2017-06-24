'use strict';

import { User, Users } from '../models/user';

export let getUsers = (req, res, next) => {
  Users.forge()
  .query('where', 'deleted', '=', '0')
  .fetch({columns: ['id', 'email', 'name']})
  .then(function(collection){
    res.json({
      error : false,
      data : collection.toJSON()
    });
  })
  .catch(function (err) {
      res.status(500)
    .json({
      error: true,
      data: {message: err.message}
    });
  });
};

export let getUserById = (req, res, next) => {
  User.forge({
    id : req.params.id
  })
  .query('where', 'deleted', '=', '0')
  .fetch({columns: ['id', 'email', 'name']})
  .then(function(user){
    if(!user){
      res.status(404)
      .json({
        error : true,
        data : {}
      })
    }else{
      res.json({
        error : false,
        data : user.toJSON()
      })
    }
  })
  .catch(function(err){
    res.status(500)
    .json({
      error : false,
      data : {message : err.message}
    })
  })
};

export let saveUser = (req, res, next) => {
  User.forge({
    name: req.body.name,
    email: req.body.email
  })
  .save()
  .then(function(user){
    res.json({
      error: false,
      data: {
        id : user.get('id'),
        name : user.get('name')
      }
    });
  })
  .catch(function (err) {
    res.status(500)
    .json({
      error: true,
      data: {message: err.message}
    });
  });
};

export let updateUser = (req, res, next) => {
  User.forge({ id : req.params.id })
  .fetch({ require : true })
  .then(function(user){
    user.save({
      name : req.body.name || user.get('name'),
      email : req.body.name || user.get('name')
    })
    .then(function(){
      res.json({
        error : false,
        data : { message : 'User deatils update'}
      });
    })
    .catch(function(err){
      res.json({
        error : true,
        data : { message : err.message }
      })
    })
  })
  .catch(function(err){
    res.status(500)
    .json({
      error : true,
      data : {message : err.message}
    })
  })
};

export let deleteUser = (req, res, next) => {
  User.forge({id : req.params.id})
  .fetch({require : true})
  .then(function(user){
    user.destroy()
    .then(function(){
      res.json({
        error : false,
        data : {message : 'User successfully deleted'}
      })
    })
    .catch(function(err){
      res.status(500)
      .json({error : true, data : {message : err.message}})
    })
  })
  .catch(function(err){
    res.status(500)
    .json({error : true, data : {message : err.message}})
  })
};
