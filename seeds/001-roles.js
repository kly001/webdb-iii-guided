
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').truncate()// to reset primary keys back to 1 in addition to deleting the data
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        { name: 'Student'},
        { name: 'TA'},
        { name: 'PM'}
      ]);
    });
};

//npx knex seed:make 001-roles
//npx knex seed:run
