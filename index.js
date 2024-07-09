const express = require('express');
const recipeRouter = require('./routes/recipe-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});