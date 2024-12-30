import { Sequelize } from 'sequelize'
import { config } from '../../config'
// import { setupModels } from './SequelizeSetupModels'
// import { InitSequelizeAssociation } from './SequelizeAssociations'
import { Nullable } from '../../../domain/Nullable'

const { postgres: { user, password, dbName, host, port, ssl } } = config
const url = `postgres://${user}:${password}@${host}:${port}/${dbName}`

export class SequelizeClientFactory extends Sequelize {
  private static sequelize: SequelizeClientFactory
  static async createClient(): Promise<Nullable<Sequelize>> {
    try {
      if (!this.sequelize) {
        this.sequelize = new Sequelize(url, {
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
      }
      await this.sequelize.authenticate()
      console.log('Connection has been established successfully.')
      return this.sequelize
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }
}

// export interface SequelizeModels {
//   Category: ModelStatic<Model<any>>
//   MainCategory: ModelStatic<Model<any>>
//   Brand: ModelStatic<Model<any>>
//   Model: ModelStatic<Model<any>>
//   ModelComputer: ModelStatic<Model<any>>
//   ModelLaptop: ModelStatic<Model<any>>
//   ModelMonitor: ModelStatic<Model<any>>
//   ModelPrinter: ModelStatic<Model<any>>
//   ModelKeyboard: ModelStatic<Model<any>>
//   ModelMouse: ModelStatic<Model<any>>
//   Status: ModelStatic<Model<any>>
//   Device: ModelStatic<Model<any>>
//   DeviceComputer: ModelStatic<Model<any>>
//   DeviceHardDrive: ModelStatic<Model<any>>
//   DeviceMFP: ModelStatic<Model<any>>
//   Processor: ModelStatic<Model<any>>
//   ProcessorSocket: ModelStatic<Model<any>>
//   MemoryRamType: ModelStatic<Model<any>>
//   HardDriveCapacity: ModelStatic<Model<any>>
//   HardDriveType: ModelStatic<Model<any>>
//   OperatingSystemVersion: ModelStatic<Model<any>>
//   OperatingSystemArq: ModelStatic<Model<any>>
//   User: ModelStatic<Model<any>>
//   Role: ModelStatic<Model<any>>
//   History: ModelStatic<Model<any>>
//   State: ModelStatic<Model<any>>
//   City: ModelStatic<Model<any>>
//   TypeOfSite: ModelStatic<Model<any>>
//   Region: ModelStatic<Model<any>>
//   Site: ModelStatic<Model<any>>
//   Location: ModelStatic<Model<any>>
//   VicepresidenciaEjecutiva: ModelStatic<Model<any>>
//   Vicepresidencia: ModelStatic<Model<any>>
//   Gerencia: ModelStatic<Model<any>>
//   Coordinacion: ModelStatic<Model<any>>
//   Cargo: ModelStatic<Model<any>>
//   Employee: ModelStatic<Model<any>>
//   InputType: ModelStatic<Model<any>>
// }

// export const sequelize = new Sequelize(url, {
//   dialect: 'postgres',
//   logging: false,
//   ...(ssl && {
//     dialectOptions: {
//       ssl: {
//         require: 'require'
//       }
//     }
//   }),
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },

// })
// export async function initializeDatabase(): Promise<void> {
//   try {
//     await setupModels(sequelize)
//     await InitSequelizeAssociation()
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }

// !isProd && sequelize.sync({ alter: true }).then(() => {
//   console.log('Database and tables synced')
// }).catch((error) => {
//   console.error('Error syncing database:', error)
// })
//}
