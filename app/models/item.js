import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  parentitem: DS.belongsTo("item", {async: true, inverse: null}),

  subgroup: DS.belongsTo('subgroup', {async: true}),

  one:   DS.belongsTo("pricedatum", {async: true, inverse: null}),
  two:   DS.belongsTo("pricedatum", {async: true, inverse: null}),
  three: DS.belongsTo("pricedatum", {async: true, inverse: null}),
  four:  DS.belongsTo("pricedatum", {async: true, inverse: null}),
  five:  DS.belongsTo("pricedatum", {async: true, inverse: null}),
  six:   DS.belongsTo("pricedatum", {async: true, inverse: null}),
  seven: DS.belongsTo("pricedatum", {async: true, inverse: null}),
  eight: DS.belongsTo("pricedatum", {async: true, inverse: null}),
});
