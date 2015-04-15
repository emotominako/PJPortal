var express = require('express');
var Router  = require('router');
var router  = Router();
var mongoose = require('mongoose');
//var dbURI = 'mongodb://localhost/test';
var dbURI = 'mongodb://heroku_app35059938:e0pqhkror89isstfld2btjaa28@ds053688.mongolab.com:53688/heroku_app35059938';

var userSchema = new mongoose.Schema({
	_id : Number,
	name : String,
	employeeNumber : Number,
	birthday : Date,
	skills : Array,
	hasWorkExperience : Boolean
});

mongoose.connect(dbURI);

var personnel = mongoose.model('personnels', userSchema);

/* GET home page. */
router.post('/', function(request, response, next) {
	
	var fieldToUpdate = request.query.f;
		
	switch(fieldToUpdate){
	case 'name' : 
		personnel.findOneAndUpdate({ _id : 3}, {name : request.query.v}, {upsert : true}, function(err){
			if (err) { throw err; }
		  	response.render('common/index');
		});
		break;
	case 'employeeNumber' :
		personnel.findOneAndUpdate({ _id : 3}, {employeeNumber : request.query.v}, {upsert : true}, function(err){
			if (err) { throw err; }
		  	response.render('common/index');
		});
		break;
	case 'birthday' : 
		personnel.findOneAndUpdate({ _id : 3}, {birthday : request.query.v}, {upsert : true}, function(err){
			if (err) { throw err; }
		  	response.render('common/index');
		});
		break;
	/*case 'skills' : 
		personnel.findOneAndUpdate({ _id : 3}, {skills  : request.query.v}, {upsert : true}, function(err){
			if (err) { throw err; }
		  	response.render('common/index');
		});
		break;*/
	case 'hasWorkExperience' :
		personnel.findOneAndUpdate({ _id : 3}, {hasWorkExperience : request.query.v}, {upsert : true}, function(err){
			if (err) { throw err; }
		  	response.render('common/index');
		});
		break;
}
	
	
});

module.exports = router;
