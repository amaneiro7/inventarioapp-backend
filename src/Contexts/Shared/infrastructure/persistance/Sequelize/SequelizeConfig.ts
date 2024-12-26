import { Sequelize } from 'sequelize'
import { config } from '../../../../../../config/env.file'
import { setupModels } from './SequelizeSetupModels'
import { InitSequelizeAssociation } from './SequelizeAssociations'

const { postgres: { user, password, dbName, host, port, ssl }, isProd } = config
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
  }

})
export async function initializeDatabase(): Promise<void> {
  try {
    await setupModels(sequelize)
    await InitSequelizeAssociation()
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  // !isProd && sequelize.sync({ alter: true }).then(() => {
  //   console.log('Database and tables synced')
  // }).catch((error) => {
  //   console.error('Error syncing database:', error)
  // })
}
