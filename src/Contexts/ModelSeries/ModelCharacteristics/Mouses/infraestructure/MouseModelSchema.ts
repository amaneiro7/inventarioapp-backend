import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../Category/SubCategory/domain/Category'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../ModelSeries/domain/ModelSeriesId'
import { type MouseModelsPrimitives } from '../domain/MouseModels'
import { type InputTypeId } from '../../../InputType/domain/InputTypeId'
import { type CategoryId } from '../../../../Category/SubCategory/domain/CategoryId'



interface MouseModelsCreationAttributes extends Omit<MouseModelsPrimitives, 'name' | 'brandId' | 'generic'> {
  modelSeriesId: Primitives<ModelSeriesId>
}

export class MouseModelsModel extends Model<MouseModelsCreationAttributes> implements MouseModelsCreationAttributes {
  public id!: Primitives<ModelSeriesId>
  public modelSeriesId!: Primitives<ModelSeriesId>
  public categoryId!: Primitives<CategoryId>
  public inputTypeId!: Primitives<InputTypeId>



  static async associate(models: Sequelize['models']): Promise<void> {
    this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelSeriesId' }) // A Mouse model belongs to a model
    this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' }) // A Mouse model belongs to a category
    this.belongsTo(models.InputType, { as: 'inputType', foreignKey: 'inputTypeId' }) // A Mouse model belongs to a InputTypes
  }
  static async initialize(sequelize: Sequelize): Promise<void> {
    MouseModelsModel.init(
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
              args: [[CategoryValues.MOUSE]],
              msg: 'Solo puede pertenecer a la categoria de Mouses'
            }
          }
        },
        inputTypeId: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        modelName: 'ModelMouse',
        tableName: 'model_mouses',
        underscored: true,
        sequelize
      }
    )
  }
}

