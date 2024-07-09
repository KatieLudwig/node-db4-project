exports.seed = function(knex) {
  return knex('step_ingredients').insert([
    { step_id: 2, ingredient_id: 1, quantity: 0.014 },
  ]);
};
