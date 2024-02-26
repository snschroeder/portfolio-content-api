import Knex from 'knex'
import { NODE_ENV } from './connection'
import knexConfig from './knexfile'

const knex = Knex(knexConfig[NODE_ENV])

export default knex
