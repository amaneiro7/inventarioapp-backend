import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type ProcessorSocketPrimitives } from '../../domain/ProcessorSocket'
import { type Models } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketId } from '../../domain/ProcessorSocketId'
import { type ProcessorSocketName } from '../../domain/ProcessorSocketName'

export class ProcessorSocketModel extends Model<ProcessorSocketPrimitives> implements ProcessorSocketPrimitives {
  readonly id!: Primitives<ProcessorSocketId>
  readonly name!: Primitives<ProcessorSocketName>

  public static async associate(models: Models): Promise<void> {
    // this.hasMany(models.ModelLaptop, { as: 'modelLaptop' }) // An processor socket can have many laptops
    // this.hasMany(models.ModelComputer, { as: 'modelComputer' }) // An processor socket can have many computers
  }
}

export async function initProcessorSocketModel(sequelize: Sequelize): Promise<void> {
  ProcessorSocketModel.init(
    {
      id: {
        type: DataTypes.UUID,
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
      modelName: 'ProcessorSocket',
      timestamps: false,
      underscored: true,
      sequelize
    }
  )
}
