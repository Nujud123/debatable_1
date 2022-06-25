/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    //define the two tables.
    return knex.schema
        .createTable('users',function(table){
            //user id.
            table.uuid('id')
                .primary()
                .notNullable()
                .defaultTo(knex.raw('uuid_generate_v1()'));

            //user name.
            table.string('name')
                .notNullable();

            //user email.
            table.string('email')
                .notNullable()
                .unique();

            //user role.
            table.enu('role',['admin','user'],{userNative: true, enumName: 'user_role'})
                .notNullable()
                .defaultTo('user');

            //user gendet.
            table.enu('gender',['male','female'],{userNative: true, enumName: 'user_gender'});

            //user creation time.
            table.timestamp('created_at')
                .defaultTo(knex.fn.now());
    })
        .createTable('endorsements',function(table){
            //endorsement id.
            table.uuid('id')
                .primary()
                .notNullable()
                .defaultTo(knex.raw('uuid_generate_v1()'));
            
            //the id for the user who created the endorsement.
            table.uuid('user_id')
                .notNullable();
            table.foreign('user_id')
                .references('id')
                .inTable('users');

            //the id for the debate which created the endorsement for it.
            table.uuid('debate_id')
                .notNullable();
            table.foreign('debate_id')
                .references('id')
                .inTable('debatable');

            //endorsement opinion.
            table.enu('opinion',['for','against','neutral'],{userNative: true, enumName: 'endorsement_opinion'});

            //endorsement creation time.
            table.timestamp('created_at')
                .defaultTo(knex.fn.now());

            //each user must has one endorsement at most for each debate.
            table.unique(['user_id','debate_id']);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
