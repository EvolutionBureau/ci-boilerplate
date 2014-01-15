// Get the truth out of the dom!!
var App = new(Backbone.Router.extend({
    
    routes: {
        ''                         : "index",
        '/'                        : "index",
    },

    initialize: function () {

        // init
        console.log('Backbone is up and running');
  
    },

    index: function () {

        // Show the index page
        
    },

    start: function () {
        Backbone.history.start({
            pushState: true
        });
    }

}));


