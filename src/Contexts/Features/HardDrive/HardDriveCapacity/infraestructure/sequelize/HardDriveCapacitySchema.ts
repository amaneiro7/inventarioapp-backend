import { DataTypes, Model } from 'sequelize'
import { type HardDriveCapacityPrimitives } from '../../domain/HardDriveCapacity'
import { type HardDriveCapacityId } from '../../domain/HardDriveCapacityId'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class HardDriveCapacityModel extends Model<HardDriveCapacityPrimitives> implements HardDriveCapacityPrimitives {
  readonly id!: Primitives<HardDriveCapacityId>
  readonly name!: number

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.DeviceHardDrive, { as: 'hardDrive', foreignKey: 'hardDriveCapacityId' }) // A hard drive capacity can have many hard drive
    this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'hardDriveCapacityId' }) // A hard drive capacity can have many computer
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    HardDriveCapacityModel.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true
        }
      },
      {
        modelName: 'HardDriveCapacity',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

