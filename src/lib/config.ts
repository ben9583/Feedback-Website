import fs from 'fs'
import yaml from 'js-yaml'

/*
website:
  title: Feedback Website
  description: Use this website to provide feedback.

postgres:
  database: feedback-db
  user: feedback-user
  password: feedback-password
  host: localhost
  port: 5432

admin:
  name: admin
  password: CHANGE_ME_OR_ELSE
*/

export type ConfigType = {
  website: {
    title: string
    description: string
  }
  postgres: {
    database: string
    user: string
    password: string
    host: string
    port: number
  }
  admin: {
    name: string
    password: string
  }
}

const Config = yaml.load(fs.readFileSync('config.yml', 'utf8')) as ConfigType

export default Config
