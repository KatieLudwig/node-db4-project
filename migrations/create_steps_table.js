exports.up = function (knex) {
    return knex.schema.createTable('steps', table => {
        table.increments('step_id');
        table.integer('step_number').notNullable();
        table.string('step_instructions').notNullable();
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('steps');
};
