import DS from 'ember-data';

export default DS.Model.extend({
  alpha:  DS.attr("number"),
  beta:  DS.attr("number"),
  gamma:  DS.attr("number"),
  delta:  DS.attr("number"),
  epsilon:  DS.attr("number"),

  item:  DS.belongsTo("item", {async: false, inverse: null}),
});
