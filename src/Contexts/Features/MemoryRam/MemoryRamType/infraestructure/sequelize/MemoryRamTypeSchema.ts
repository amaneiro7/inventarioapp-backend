import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type MemoryRamTypePrimitives } from '../../domain/MemoryRamType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../domain/MemoryRamTypeId'
import { type MemoryRamTypeName } from '../../domain/MemoryRamTypeName'


export class MemoryRamTypeModel extends Model<MemoryRamTypePrimitives> implements MemoryRamTypePrimitives {
  declare id: Primitives<MemoryRamTypeId>
  declare name: Primitives<MemoryRamTypeName>



  static async associate(models: Sequelize['models']): Promise<void> {
    this.hasMany(models.ModelComputer, { as: 'modelComputer', foreignKey: 'memoryRamTypeId' }) // A memory ram type can have many model
    this.hasMany(models.ModelLaptop, { as: 'modelLaptop', foreignKey: 'memoryRamTypeId' }) // A memory ram type can have many laptop
  }

  static async initialize(sequelize: Sequelize): Promise<void> {
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

