import Route from '@ember/routing/route';

export default class CustomerPremisesRoute extends Route {
  model() {
    const customer = this.modelFor('customer');
    return customer
  }
}
