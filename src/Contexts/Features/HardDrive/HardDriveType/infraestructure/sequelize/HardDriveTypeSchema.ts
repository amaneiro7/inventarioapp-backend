import { DataTypes, Model } from 'sequelize'
import { type HardDriveTypePrimitives } from '../../domain/HardDriveType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeName } from '../../domain/HardDriveTypeName'
import { type HardDriveTypeId } from '../../domain/HardDriveTypeId'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class HardDriveTypeModel extends Model<HardDriveTypePrimitives> implements HardDriveTypePrimitives {
  readonly id!: Primitives<HardDriveTypeId>
  readonly name!: Primitives<HardDriveTypeName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.DeviceHardDrive, { as: 'hardDrive', foreignKey: 'hardDriveTypeId' }) // A hard drive type can have many hard drive
    this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'hardDriveTypeId' }) // A hard drive type can have many computer
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    HardDriveTypeModel.init(
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
        modelName: 'HardDriveType',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

