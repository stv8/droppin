define([
  'jquery',     
  'underscore', 
  'backbone',
  'text!templates/searchUsers_tpl.html',
  'text!templates/userList_tpl.html',
  'models/person_model',    
], function($, _, Backbone, SearchUsersTpl, UserListTpl, Person){

	var SearchUsersView = Backbone.View.extend({

		el: '#content',

		events: {
			'click #submit-search': 'search'
		},

		initialize: function(){
			console.log('search users');
			this.render();
		},

		render: function(){
			this.$el.html(SearchUsersTpl);
		},

		search: function(){
			var input = $('#search-users-input').val();
			console.log('search input: ' + input);			
		}
	});	
  
  return SearchUsersView;
  
});