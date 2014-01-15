var SampleCollection = Backbone.Collection.extend({

	url: function() {
		return this.instanceUrl;
  	},

  	initialize: function(props) {
  		this.instanceUrl = props.url;
  	},

	parse: function(response) {
		if(response.status === 'success'){
			return response.data.results;
		}else{	
			alert("Error: Wait, not our fault... we told you not pick on us.");
		}
  	},

  	model: SampleModel
});