import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('browse');
  this.route('favorites');
  this.route('settings');
  this.route('user');
});

export default Router;
