// Paths to requirejs js files
require.config({
	paths : {
		"jquery" : "vendor/jquery/jquery",
		"bootstrap" : "vendor/bootstrap/docs/js/bootstrap",
		"modernizr" : "vendor/modernizr/modernizr",
		"underscore" : "vendor/underscore-amd/underscore",
		"backbone" : "vendor/backbone-amd/backbone"
	}
});

// Require the main app view to start the project
require(['views/app'], function(AppView){
	new AppView;
});