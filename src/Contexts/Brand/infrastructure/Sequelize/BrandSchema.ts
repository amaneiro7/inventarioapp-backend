import { DataTypes, Model } from 'sequelize'
import { type BrandPrimitives } from '../../domain/Brand'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type BrandId } from '../../domain/BrandId'
import { type BrandName } from '../../domain/BrandName'
import { type SequelizeClientFactory } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class BrandModel extends Model<BrandPrimitives> implements BrandPrimitives {
  public id!: Primitives<BrandId>
  public name!: Primitives<BrandName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.Model, { as: 'model', foreignKey: 'brandId' }) // A brand can have many model series
    this.hasMany(models.Device, { as: 'device', foreignKey: 'brandId' }) // A brand can have many device
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    BrandModel.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true
        }
      },
      {
        modelName: 'Brand',
        timestamps: true,
        underscored: true,
        sequelize
      }
    )
  }
}

