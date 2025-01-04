import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type BrandPrimitives } from '../../domain/Brand'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type BrandId } from '../../domain/BrandId'
import { type BrandName } from '../../domain/BrandName'
import { sequelize } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class BrandModel extends Model<BrandPrimitives> implements BrandPrimitives {
  declare id: Primitives<BrandId>
  declare name: Primitives<BrandName>

  static async associate(models: Sequelize['models']): Promise<void> {
    this.hasMany(sequelize.models.Model, { as: 'model', foreignKey: 'brandId' }) // A brand can have many model series
    this.hasMany(sequelize.models.Device, { as: 'device', foreignKey: 'brandId' }) // A brand can have many device
  }

  static async initialize(sequelize: Sequelize): Promise<void> {
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

