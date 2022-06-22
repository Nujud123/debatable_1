/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.raw('CREAT EXTENSION IF NOT EXISTS "UUID-OSSP"')

    return knex.schema
        .createTable('debatable',function(table){
            table.uuid('id').primary().notNullable().defaultTo(knex.raw('uuid_generate_v1()'));

            table.string('title').notNullable().unique();
            table.string('description');
            table.timestamp('created_at').defaultTo(knex.fx.now());
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
