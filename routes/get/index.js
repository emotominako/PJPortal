var express = require('express');
var Router  = require('router');
var router  = Router();
var mongoose = require('mongoose');

var personnel = require('../../views/common/user_model.js');

/* GET home page. */
router.get('/', function(request, response, next) {
	personnel.findOne({ _id : 3}, 'name employeeNumber birthday hasWorkExperience', function(err, person){
		if (err) { throw err; }
		var user = {name: person.name,
				    employeeNumber: person.employeeNumber,
				    birthday: person.birthday,
				    hasWorkExperience: person.hasWorkExperience};
		
		response.render('common/index', {
	  		user : user
	  	});
	});
});

module.exports = router;
