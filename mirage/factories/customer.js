import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.findName();
  },
  email() {
    return faker.internet.email();
  },
  afterCreate(customer, server) {
    server.createList('premise', 5, {
      customer
    });
  }
});
