import { DataTypes, Model } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionPrimitives } from '../../domain/Region'
import { type RegionId } from '../../domain/RegionId'
import { type RegionName } from '../../domain/RegionName'
import { type SequelizeClientFactory } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class RegionModel extends Model<RegionPrimitives> implements RegionPrimitives {
  readonly id!: Primitives<RegionId>
  readonly name!: Primitives<RegionName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.State, { as: 'state', foreignKey: 'regionId' }) // An Region can hava many states
  }
  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    RegionModel.init(
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
        modelName: 'Region',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}
