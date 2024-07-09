const db = require('../data/db-config');

async function getRecipeById(recipe_id) {
    const recipe = await db('recipes')
        .where({ recipe_id })
        .first();

    const steps = await db('steps')
        .where({ recipe_id })

    for (let step of steps) {
        const ingredients = await db('step_ingredients as si')
            .join('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
            .where('si.step_id', step.step_id)
            .select('i.ingredient_name', 'i.ingredient_id', 'si.quantity');

        step.ingredients = ingredients;
    }

    recipe.steps = steps;
    return recipe;
}

module.exports = {
    getRecipeById
};