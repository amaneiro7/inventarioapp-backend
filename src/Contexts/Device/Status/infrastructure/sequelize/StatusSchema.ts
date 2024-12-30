import { DataTypes, Model } from 'sequelize'
import { type StatusPrimitives } from '../../domain/Status'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusId } from '../../domain/StatusId'
import { type StatusName } from '../../domain/StatusName'
import { type SequelizeClientFactory } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class StatusModel extends Model<StatusPrimitives> implements StatusPrimitives {
  readonly id!: Primitives<StatusId>
  readonly name!: Primitives<StatusName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.Device, { as: 'devices', foreignKey: 'statusId' })
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    StatusModel.init(
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
        modelName: 'Status',
        tableName: 'status',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

