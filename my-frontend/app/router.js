import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyFrontendENV.locationType
});

Router.map(function() {
  this.route('application');
  this.route('protected');
  this.route('login');
});

export default Router;
