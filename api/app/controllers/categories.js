'use strict';

import { Category, Categories } from '../models/category';


function getCategories(req, res){
	Categories.forge()
	.fetch()
	.then(function(collection){
		res.json({
			error : false,
			data : collection.toJSON()
		})
	})
	.catch(function(err){
		res.status(500)
		.json({
			error : true,
			data : { message : err.message }
		})
	})
}

function getCategoryById(req, res){
	Category.forge({
		id : req.params.id
	})
	.fetch()
	.then(function(category){
		if(!category){
			res.status(404)
			.json({
				error : true,
				data : {}
			})
		}else{
			res.json({
				error : false,
				data : category.toJSON()
			})
		}
	})
	.catch(function(err){
		res.status(500)
		.json({
			error : false,
			data : { message : err.message }
		})
	})
}

function saveCategory(req, res){
	Category.forge({
		name : req.body.name
	})
	.save()
	.then(function(category){
		res.json({
			error : false,
			data : { id : category.get('id') }
		})
	})
	.catch(function(err){
		res.status(500)
		.json({
			error : true,
			data : {message : err.message}
		})
	})
}

function updateCategory(req, res){
	Category.forge({
		id : req.params.id
	})
	.fetch({
		require : true
	})
	.then(function(category){
		category.save({
			name : req.body.name || category.get('name')
		})
		.then(function(){
			res.json({
				error : false,
				data : {message : "category update"}
			})
		})
		.catch(function(err){
			res.json({
				error : true,
				data : {message : err.message}
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
}

function deleteCategory(req, res){
	Category.forge({ id : req.params.id })
	.fetch({ require : true })
	.then(function(category){
		category.destroy()
		.then(function(){
			res.json({
				error : false,
				data : { message : 'Category deleted'}
			})
		})
		.catch(function(err){
			res.status(500)
			.json({
				error : true,
				data : { message : err.message}
			})
		})
	})
	.catch(function(err){
		res.status(500)
		.json({
			error : true,
			data : { message : err.message }
		})
	})
}

export = { getCategories, getCategoryById, saveCategory, updateCategory, deleteCategory }
