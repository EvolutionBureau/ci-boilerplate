require.config({
	paths : {
		"jquery" : "vendor/jquery/jquery",
		"bootstrap" : "vendor/bootstrap/docs/js/bootstrap",
		"modernizr" : "vendor/modernizr/modernizr",
		"underscore" : "vendor/underscore-amd/underscore",
		"backbone" : "vendor/backbone-amd/backbone"
	}
});

require(['views/app'], function(AppView){
	new AppView;
});