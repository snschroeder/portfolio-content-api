import 'dotenv/config'

export const connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}

export const testConnection = {
  host: process.env.TEST_DB_HOST,
  user: process.env.TEST_DB_USERNAME,
  password: process.env.TEST_DB_PASSWORD,
  database: process.env.TEST_DB_NAME
}

export const NODE_ENV = process.env.NODE_ENV ?? 'development'

export const JWT_SECRET = process.env.JWT_SECRET ?? 'dev-private-key'
