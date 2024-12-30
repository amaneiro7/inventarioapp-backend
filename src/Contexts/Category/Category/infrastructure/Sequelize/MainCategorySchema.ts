import { DataTypes, Model } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MainCategoryPrimitives } from '../../domain/MainCategory'
import { type MainCategoryId } from '../../domain/MainCategoryId'
import { type MainCategoryName } from '../../domain/MainCategoryName'
import { type SequelizeClientFactory } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class MainCategoryModel extends Model<MainCategoryPrimitives> implements MainCategoryPrimitives {
  readonly id!: Primitives<MainCategoryId>
  readonly name!: Primitives<MainCategoryName>

  public static async createModel(sequelize: SequelizeClientFactory) {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.hasMany(models.Category, { as: 'category', foreignKey: 'mainCategoryId' }) // A main category can have many categories
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    MainCategoryModel.init(
      {
        id: {
          type: DataTypes.STRING,
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
        modelName: 'MainCategory',
        underscored: true,
        timestamps: false,
        sequelize
      }
    )
  }
}

