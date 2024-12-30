import { DataTypes, Model } from 'sequelize'
import { CategoryValues } from '../../../../../Category/SubCategory/domain/Category'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../../ModelSeries/domain/ModelSeriesId'
import { type MonitorModelsPrimitives } from '../../domain/MonitorModels'
import { type MonitorScreenSize } from '../../domain/MonitorScreenSize'
import { type MonitorHasDVI } from '../../domain/MonitorHasDVI'
import { type MonitorHasHDMI } from '../../domain/MonitorHasHDMI'
import { type MonitorHasVGA } from '../../domain/MonitorHasVGA'
import { type CategoryId } from '../../../../../Category/SubCategory/domain/CategoryId'
import { type SequelizeClientFactory } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'


interface MonitorModelsCreationAttributes extends Omit<MonitorModelsPrimitives, 'name' | 'brandId' | 'generic'> {
  modelSeriesId: Primitives<ModelSeriesId>
}

export class MonitorModelsModel extends Model<MonitorModelsCreationAttributes> implements MonitorModelsCreationAttributes {
  public id!: Primitives<ModelSeriesId>
  public modelSeriesId!: Primitives<ModelSeriesId>
  public categoryId!: Primitives<CategoryId>
  public screenSize!: Primitives<MonitorScreenSize>
  public hasDVI!: Primitives<MonitorHasDVI>
  public hasHDMI!: Primitives<MonitorHasHDMI>
  public hasVGA!: Primitives<MonitorHasVGA>

  static async createModel(sequelize: SequelizeClientFactory): Promise<void> {
    await this.initialize(sequelize)
    await this.associate(sequelize.models)
  }

  private static async associate(models: SequelizeClientFactory['models']): Promise<void> {
    this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelSeriesId' }) // A monitor model belongs to a model
    this.belongsTo(models.Category, { as: 'category' }) // A monitor model belongs to a category
  }

  private static async initialize(sequelize: SequelizeClientFactory): Promise<void> {
    MonitorModelsModel.init(
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
              args: [[CategoryValues.MONITORES]],
              msg: 'Solo puede pertenecer a la categoria de Monitores'
            }
          }
        },
        screenSize: {
          type: DataTypes.STRING,
          allowNull: false
        },
        hasDVI: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'has_dvi'
        },
        hasHDMI: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'has_hdmi'
        },
        hasVGA: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'has_vga'
        }
      },
      {
        modelName: 'ModelMonitor',
        underscored: true,
        sequelize
      }
    )
  }
}

