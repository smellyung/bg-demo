import Route from '@ember/routing/route';
import {action} from '@ember-decorators/object';

export default class NewCustomerRoute extends Route {
  model() {
    return {
      name: '',
      email: ''
    }
  }

  @action
  createCustomer() {
    const data = this.modelFor(this.routeName);
    const customer = this.store.createRecord('customer', data);

    customer.save().then(() => {
      this.transitionTo('customers.index');
    }).catch((err) => {
      throw new Error(err)
    });
  }
}
