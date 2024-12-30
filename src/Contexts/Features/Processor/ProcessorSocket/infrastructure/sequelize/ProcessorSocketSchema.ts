import { DataTypes, Model } from 'sequelize'
import { type ProcessorSocketPrimitives } from '../../domain/ProcessorSocket'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketId } from '../../domain/ProcessorSocketId'
import { type ProcessorSocketName } from '../../domain/ProcessorSocketName'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class ProcessorSocketModel extends Model<ProcessorSocketPrimitives> implements ProcessorSocketPrimitives {
  readonly id!: Primitives<ProcessorSocketId>
  readonly name!: Primitives<ProcessorSocketName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    // this.hasMany(models.ModelLaptop, { as: 'modelLaptop' }) // An processor socket can have many laptops
    // this.hasMany(models.ModelComputer, { as: 'modelComputer' }) // An processor socket can have many computers
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
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
}

