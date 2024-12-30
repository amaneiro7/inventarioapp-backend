import { DataTypes, Model } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CityPrimitives } from '../../domain/City'
import { type CityId } from '../../domain/CityId'
import { type StateId } from '../../../State/domain/StateId'
import { type CityName } from '../../domain/CityName'
import { type SequelizeClientFactory } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class CityModel extends Model<CityPrimitives> implements CityPrimitives {
  readonly id!: Primitives<CityId>
  readonly stateId!: Primitives<StateId>
  readonly name!: Primitives<CityName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }
  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.belongsTo(models.State, { as: 'state', foreignKey: 'stateId' }) // A City can belong to a state
    this.hasMany(models.Site, { as: 'sites', foreignKey: 'cityId' }) //  A city has many Sites
  }
  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    CityModel.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false
        },
        stateId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false
        }
      },
      {
        modelName: 'City',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

