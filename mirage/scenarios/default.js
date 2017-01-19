export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  var GROUPS = 1;
  var SUBGROUPS_PER_GROUP = 2;
  var ITEMS_PER_SUBGROUP = 200;

  // create 10 groups
  var groups = server.createList('group', GROUPS);
  // create 4 subgroups for each group
  var subgroups = [];
  groups.forEach(function(group){
    var subs = server.createList('subgroup', SUBGROUPS_PER_GROUP, {group});
    subgroups = subgroups.concat(subs);
  });
  // create the items and pricedata for each subgroup
  subgroups.forEach(function(subgroup){
    for(var i=0; i < ITEMS_PER_SUBGROUP; i++){
      var pds = server.createList('pricedata', 8);
      var item = server.create('item', {
        subgroup: subgroup,
        one: pds[0],
        two: pds[1],
        three: pds[2],
        four: pds[3],
        five: pds[4],
        six: pds[5],
        seven: pds[6],
        eight: pds[7],
      });
    }
  });
}
