import { DataTypes, Model } from 'sequelize'
import { type OperatingSystemPrimitives } from '../../domain/OperatingSystem'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemId } from '../../domain/OperatingSystemId'
import { type OperatingSystemVersion } from '../../domain/OperatingSystemVersion'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class OperatingSystemModel extends Model<OperatingSystemPrimitives> implements OperatingSystemPrimitives {
  readonly id!: Primitives<OperatingSystemId>
  readonly name!: Primitives<OperatingSystemVersion>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'operatingSystemId' }) // An operating system can have many computers
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    OperatingSystemModel.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
      },
      {
        modelName: 'OperatingSystemVersion',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

