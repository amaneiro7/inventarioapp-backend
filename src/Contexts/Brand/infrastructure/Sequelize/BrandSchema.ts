import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type BrandPrimitives } from '../../domain/Brand'
import { type Models } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type BrandId } from '../../domain/BrandId'
import { type BrandName } from '../../domain/BrandName'

export class BrandModel extends Model<BrandPrimitives> implements BrandPrimitives {
  public id!: Primitives<BrandId>
  public name!: Primitives<BrandName>

  public static associate (models: Models): void {
    this.hasMany(models.Model, { as: 'model', foreignKey: 'brandId' }) // A brand can have many model series
    this.hasMany(models.Device, { as: 'device', foreignKey: 'brandId' }) // A brand can have many device
  }
}

export function initBrandModel (sequelize: Sequelize): void {
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
