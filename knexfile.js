const sharedConfig = {
    client: 'sqlite3',
    migrations: { directory: './api/migrations' },
    useNullAsDefault: true,
    pool : { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}


module.exports = {
    development : {
        ...sharedConfig,
        connection: { filename: './api/data/dev.db3' },
        seeds: { directory: './api/seeds' }
    },
    testing : {
        ...sharedConfig,
         connection: { filename: './api/data/test.db3' },
    },
    production: {}
};