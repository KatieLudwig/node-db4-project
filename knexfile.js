const path = require('path');

module.exports = {
    development : {
        client : 'sqlite3',
        connection : {
            filename: path.resolve(__dirname, 'api/data/recipes.db3')
        },
        useNullAsDefault : true,
        migrations : {
            directory : path.resolve(__dirname, 'api/data/migrations')
        },
        seeds: {
            directory: path.resolve(__dirname, 'api/data/seeds')
        }
    }
};