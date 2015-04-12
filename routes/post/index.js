var express = require('express');
var Router  = require('router');
var router  = Router();
var mongoose = require('mongoose');
//var dbURI = 'mongodb://localhost/test';
var dbURI = 'mongodb://trainpjportaldb:Develop123@ds053688.mongolab.com:53688/heroku_app35059938';

var userSchema = new mongoose.Schema({
	_id : Number,
	name : String,
	email : String,
	birthday : String,
	image : String//{ data: Buffer, contentType: String }
});

mongoose.connect(dbURI);

var personnel = mongoose.model('personnels', userSchema);

/* GET home page. */
router.post('/', function(request, response, next) {

  personnel.findOneAndUpdate({ _id : 3}, {name : request.query.name}, {upsert : true}, function(err){
	  if (err) { throw err; }
	  	console.log('New text has been saved!');
	  	response.render('common/index');
  });
});

module.exports = router;
