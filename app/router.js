import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('customers', function() {
    this.route('index', {path: '/'}, function() {
      this.route('create');
    });
    this.route('customer', {path: '/:customer_id/premises'}, function() {
      this.route('premises', {path: '/'});
    });
  });
});

export default Router;
