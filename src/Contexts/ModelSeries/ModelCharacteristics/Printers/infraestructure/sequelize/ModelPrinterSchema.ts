import { DataTypes, Model } from 'sequelize'
import { CategoryValues } from '../../../../../Category/SubCategory/domain/Category'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../../ModelSeries/domain/ModelSeriesId'
import { type ModelPrintersPrimitives } from '../../domain/ModelPrinters'
import { type CartridgeModel } from '../../domain/CartridgeModel'
import { type CategoryId } from '../../../../../Category/SubCategory/domain/CategoryId'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

interface ModelPrinterCreationAttributes extends Omit<ModelPrintersPrimitives, 'name' | 'brandId' | 'generic'> {
  modelSeriesId: Primitives<ModelSeriesId>
}

export class ModelPrinterModel extends Model<ModelPrinterCreationAttributes> implements ModelPrinterCreationAttributes {
  public id!: Primitives<ModelSeriesId>
  public cartridgeModel!: Primitives<CartridgeModel>
  public modelSeriesId!: Primitives<ModelSeriesId>
  public categoryId!: Primitives<CategoryId>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelSeriesId' }) // A Laptop model belongs to a model
    this.belongsTo(models.Category, { as: 'category' }) // A computer model belongs to a category
  }
  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    ModelPrinterModel.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false
        },
        modelSeriesId: {
          type: DataTypes.UUID,
          unique: true,
          allowNull: false
        },
        categoryId: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isIn: {
              args: [[CategoryValues.LASERPRINTER, CategoryValues.INKPRINTER]],
              msg: 'Solo puede pertenecer a la categoria de Impresoras Laser e Impresoras Tinta'
            }
          }
        },
        cartridgeModel: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        modelName: 'ModelPrinter',
        underscored: true,
        sequelize
      }
    )
  }
}

