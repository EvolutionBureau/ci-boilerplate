// Start the project with backbone
define(['backbone'], function (Backbone) {
	
	// Define our main App class
	var App = Backbone.View.extend({
		initialize: function() {
			console.log('JS is up and running!');
		}
	});

	return App;
});