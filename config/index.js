import 'dotenv/config';

const env = process.env.NODE_ENV || 'development';

const config = {
    common: {
        port: parseInt(process.env.APP_PORT) || 3002
    },
    development: {
        db: {
            connection: null,
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            db_name: process.env.DB_DATABASE,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        }
    },
    production: {
        db: {
            connection: '',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            db_name: process.env.DB_DATABASE,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        }
    }
}

module.exports = {
    ...config.common,
    ...config[env]
}

