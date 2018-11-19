import DS from 'ember-data';
const { Model } = DS;
import {attr, belongsTo} from '@ember-decorators/data'

export default class PremiseModel extends Model {
  @attr('string') street;
  @attr('string') city;
  @attr('string') county;
  @attr('string') country;
  @belongsTo('customer') customer;
}
