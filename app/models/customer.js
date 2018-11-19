import DS from 'ember-data';
const { Model } = DS;
import {attr, hasMany} from '@ember-decorators/data'

export default class CustomerModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @hasMany('premise') premises;
}
