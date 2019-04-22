const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
	label: [{type: String, required: true}],
	description: {type: String, required:true},
	answers:{type: String, required: true},
	options: [{type: String, required: true}],
	difficulty: {type: Number, required: true}
});

const questions = mongoose.model('QUESTIONS', questionsSchema);
module.export = questions;
