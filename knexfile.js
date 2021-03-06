// // Update with your config settings.
require("dotenv").config();

const { CLIENT, DATABASE, DB_USER, DB_PASSWORD, HOST, PG_PORT } = process.env;

module.exports = {
  development: {
    client: CLIENT,
    connection: {
      database: DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
      host: HOST,
      port: PG_PORT,
    },
    migrations: {
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
