/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
        .alterTable('debatable',function(table){
            //add new column for deletion debates
            table.boolean('isDeleted')
                .notNullable()
                .defaultTo(false);
         }); 
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
