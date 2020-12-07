import EmberRouter from '@ember/routing/router';
import config from 'fastboot-repro-802/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('route-a');
  this.route('route-b');
});
