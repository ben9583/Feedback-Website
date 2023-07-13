import pg from 'pg'
import Config from './config'

class Client extends pg.Client {
  constructor() {
    super({
      database: Config.postgres.database,
      user: Config.postgres.user,
      password: Config.postgres.password,
      host: Config.postgres.host,
      port: Config.postgres.port,
    })
  }
}

export default Client
