import { Sequelize } from 'sequelize'
import { config } from '../../config'

const { postgres: { user, password, dbName, host, port, ssl } } = config
const url = `postgres://${user}:${password}@${host}:${port}/${dbName}`

export const sequelize = new Sequelize(url, {
  dialect: 'postgres',
  logging: false,
  ...(ssl && {
    dialectOptions: {
      ssl: {
        require: 'require'
      }
    }
  }),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})