import pg from 'pg'
import Config from './config'

const Client = new pg.Client({
  database: Config.postgres.database,
  user: Config.postgres.user,
  password: Config.postgres.password,
  host: Config.postgres.host,
  port: Config.postgres.port,
})

export default Client
