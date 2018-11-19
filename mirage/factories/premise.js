import { Factory , faker} from 'ember-cli-mirage';

export default Factory.extend({
  street() {
    return faker.address.streetAddress();
  },
  city() {
    return faker.address.city();
  },
  county() {
    return faker.address.county();
  },
  country() {
    return faker.address.country();
  }
});
