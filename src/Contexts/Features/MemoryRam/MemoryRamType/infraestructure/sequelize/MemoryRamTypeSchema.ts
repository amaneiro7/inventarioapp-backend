import { DataTypes, Model } from 'sequelize'
import { type MemoryRamTypePrimitives } from '../../domain/MemoryRamType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../domain/MemoryRamTypeId'
import { type MemoryRamTypeName } from '../../domain/MemoryRamTypeName'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class MemoryRamTypeModel extends Model<MemoryRamTypePrimitives> implements MemoryRamTypePrimitives {
  readonly id!: Primitives<MemoryRamTypeId>
  readonly name!: Primitives<MemoryRamTypeName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.ModelComputer, { as: 'modelComputer', foreignKey: 'memoryRamTypeId' }) // A memory ram type can have many model
    this.hasMany(models.ModelLaptop, { as: 'modelLaptop', foreignKey: 'memoryRamTypeId' }) // A memory ram type can have many laptop
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    MemoryRamTypeModel.init(
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
        modelName: 'MemoryRamType',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

