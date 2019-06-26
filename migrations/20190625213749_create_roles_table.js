//new changes to the database schema
exports.up = function(knex, Promise) {
    return knex.schema.createTable("roles", function(tbl) {
        //primary key called id, auto-increment, integer
        tbl.increments();
        //a varchar called name', 128 characters, unique, not null
        tbl
            .string("name", 128)
            .notNullable()
            .unique();
    })
};

//how to undo the changes to the schema
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles")
};

//npx knex migrate:make create_roles_table
//npx knex migrate:latest (to run the migration)
//npx knex migrate:rollback (to undo the migration)