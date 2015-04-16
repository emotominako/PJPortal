var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	_id : Number,
	name : String,
	employeeNumber : Number,
	birthday : Date,
	skills : Array,
	hasWorkExperience : Boolean
});

module.exports = mongoose.model('personnels', userSchema);  