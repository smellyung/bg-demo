import Route from '@ember/routing/route';
import {action} from '@ember-decorators/object';

export default class NewCustomerRoute extends Route {
  model() {
    return this.store.createRecord('customer');
  }

  @action
  createCustomer() {
    const customer = this.modelFor(this.routeName);

    customer.save().then(() => {
      this.transitionTo('customers.index');
    }).catch((err) => {
      throw new Error(err)
    });
  }
}
