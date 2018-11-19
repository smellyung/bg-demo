import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('customer', {path: '/:customer_id/premises'}, function() {
    this.route('premises');
  });
  this.route('new-customer');
});

export default Router;
