import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type TypeOfSitePrimitives } from '../../domain/TypeOfSite'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteId } from '../../domain/TypeOfSiteId'
import { type TypeOfSiteName } from '../../domain/TypeOfSiteName'


export class TypeOfSiteModel extends Model<TypeOfSitePrimitives> implements TypeOfSitePrimitives {
  readonly id!: Primitives<TypeOfSiteId>
  readonly name!: Primitives<TypeOfSiteName>



  static async associate(models: Sequelize['models']): Promise<void> {
    this.hasMany(models.Location, { as: 'location', foreignKey: 'typeOfSiteId' })
  }

  static async initialize(sequelize: Sequelize): Promise<void> {
    TypeOfSiteModel.init(
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
        modelName: 'TypeOfSite',
        timestamps: false,
        underscored: true,
        sequelize
      }
    )
  }
}

