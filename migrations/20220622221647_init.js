/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "UUID-OSSP"')
    
    //define the debate table.
    return knex.schema
        .createTable('debatable',function(table){
            //debate id.
            table.uuid('id')
                .primary()
                .notNullable()
                .defaultTo(knex.raw('uuid_generate_v1()'));
           
            //debate summary.
            table.string('title')
                .notNullable()
                .unique();
            
            //debate description.
            table.string('description');
            
            //debate creation time.
            table.timestamp('created_at')
                .defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
