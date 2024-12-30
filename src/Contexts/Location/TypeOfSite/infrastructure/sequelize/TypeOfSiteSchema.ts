import { DataTypes, Model } from 'sequelize'
import { type TypeOfSitePrimitives } from '../../domain/TypeOfSite'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteId } from '../../domain/TypeOfSiteId'
import { type TypeOfSiteName } from '../../domain/TypeOfSiteName'
import { type SequelizeClientFactory } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class TypeOfSiteModel extends Model<TypeOfSitePrimitives> implements TypeOfSitePrimitives {
  readonly id!: Primitives<TypeOfSiteId>
  readonly name!: Primitives<TypeOfSiteName>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.Location, { as: 'location', foreignKey: 'typeOfSiteId' })
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
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

