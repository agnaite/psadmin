"use strict";

//This file is mocking a web API by hitting hard coded data.
var breads = require('./breadData').breads;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(bread) {
	return bread.firstName.toLowerCase() + '-' + bread.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var BreadApi = {
	getAllBreads: function() {
		return _clone(breads);
	},

	getBreadById: function(id) {
		var bread = _.find(breads, {id: id});
		return _clone(bread);
	},

	saveBread: function(bread) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the bread to the DB via AJAX call...');

		if (bread.id) {
			var existingBreadIndex = _.indexOf(breads, _.find(breads, {id: bread.id}));
			breads.splice(existingBreadIndex, 1, bread);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new breads in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			bread.id = _generateId(bread);
			breads.push(bread);
		}

		return _clone(bread);
	},

	deleteBread: function(id) {
		console.log('Pretend this just deleted the bread from the DB via an AJAX call...');
		_.remove(breads, { id: id});
	}
};

module.exports = BreadApi;
