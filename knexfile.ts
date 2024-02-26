import type { Knex } from 'knex'
import { connection, testConnection } from './connection'

const knexConfig: Record<string, Knex.Config> = {
  development: {
    client: 'pg',
    connection,
    pool: { min: 0, max: 10 },
    migrations: {
      directory: './db_management/migrations'
    },
    seeds: {
      directory: './db_management/seeds'
    }
  },

  test: {
    client: 'pg',
    connection: testConnection,
    pool: { min: 0, max: 10 },
    migrations: {
      directory: './db_management/migrations'
    },
    seeds: {
      directory: './db_management/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection,
    pool: { min: 0, max: 10 },
    migrations: {
      directory: './db_management/migrations'
    },
    seeds: {
      directory: './db_management/seeds'
    }
  },

  production: {
    client: 'pg',
    connection,
    pool: { min: 0, max: 10 },
    migrations: {
      directory: './db_management/migrations'
    },
    seeds: {
      directory: './db_management/seeds'
    }
  }
}

export default knexConfig
