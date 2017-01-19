import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  alpha:  faker.random.number,
  beta:  faker.random.number,
  gamma:  faker.random.number,
  delta:  faker.random.number,
  epsilon:  faker.random.number,
});
