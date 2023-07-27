import fs from 'fs'
import yaml from 'js-yaml'

export type ConfigType = {
  website: {
    title: string
    description: string
  }
  postgres: {
    database: string
    user: string
    passkey: string
    host: string
    port: number
  }
  admin: {
    username: string
    passkey: string
  }
}

const Config = yaml.load(fs.readFileSync('config.yml', 'utf8')) as ConfigType

export default Config
