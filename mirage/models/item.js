import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  subgroup: belongsTo(),

  one: belongsTo('pricedata'),
  two: belongsTo('pricedata'),
  three: belongsTo('pricedata'),
  four: belongsTo('pricedata'),
  five: belongsTo('pricedata'),
  six: belongsTo('pricedata'),
  seven: belongsTo('pricedata'),
  eight: belongsTo('pricedata'),
});
