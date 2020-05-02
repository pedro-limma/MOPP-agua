exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('numberAdress').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2 ).notNullable();
    table.string('cep').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
