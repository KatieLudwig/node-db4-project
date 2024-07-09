const express = require('express');
const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipes.getRecipeById(req.params.id);
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get recipe' });
    }
});

module.exports = router;