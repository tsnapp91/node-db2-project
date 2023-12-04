exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments();
    table.string("vin", 17).notNullable().unique();
    table.string("make", 128).notNullable();
    table.string("model", 128).notNullable();
    table.integer("mileage").unsigned().notNullable();
    table.string("title", 128);
    table.string("transmission", 128);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
