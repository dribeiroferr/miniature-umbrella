const dotenvt = require('dotenv');

dotenvt.config({
    path: process.env.NODE_ENV = 'dev' ? '.env.dev' : '.env.production'
});

module.exports = {
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_USERPASSWORD,
    "database": process.env.DB_NAME, 
    "synchronize": true,
    "logging": false,
    "entities": [
        process.env.TYPEORM_ENTITIES
    ],
    "migrations": [
        process.env.TYPEORM_MIGRATIONS
    ],
    "cli": {
        "entitiesDir": process.env.TYPEORM_ENTITIES_DIR,
        "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR
    }
}