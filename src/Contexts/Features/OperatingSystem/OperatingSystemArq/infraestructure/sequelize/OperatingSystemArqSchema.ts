import { DataTypes, Model } from 'sequelize'
import { type OperatingSystemArqPrimitives } from '../../domain/OperatingSystemArq'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqId } from '../../domain/OperatingSystemArqID'
import { type OperatingSystemArqName } from '../../domain/OperatingSystemArqName'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class OperatingSystemArqModel extends Model<OperatingSystemArqPrimitives> implements OperatingSystemArqPrimitives {
  readonly id!: Primitives<OperatingSystemArqId>
  readonly name!: Primitives<OperatingSystemArqName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'operatingSystemArqId' }) // An operating system arq can have many computer
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    OperatingSystemArqModel.init(
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
        modelName: 'OperatingSystemArq',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

