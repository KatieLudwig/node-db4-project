exports.up = function(knex) {
    return knex.schema.createTable('step_ingredients', table => {
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('quantity').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('step_ingredients');
};