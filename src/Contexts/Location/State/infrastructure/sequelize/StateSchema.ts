import { DataTypes, Model } from 'sequelize'
import { type StatePrimitives } from '../../domain/State'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StateId } from '../../domain/StateId'
import { type StateName } from '../../domain/StateName'
import { type RegionId } from '../../../Region/domain/RegionId'
import { type SequelizeClientFactory } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class StateModel extends Model<StatePrimitives> implements StatePrimitives {
  readonly id!: Primitives<StateId>
  readonly regionId!: Primitives<RegionId>
  readonly name!: Primitives<StateName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.belongsTo(models.Region, { as: 'region', foreignKey: 'regionId' }) // A state belongs to region
    this.hasMany(models.City, { as: 'city', foreignKey: 'stateId' }) // A state has many cities
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    StateModel.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false
        },
        regionId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
      },
      {
        modelName: 'State',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

