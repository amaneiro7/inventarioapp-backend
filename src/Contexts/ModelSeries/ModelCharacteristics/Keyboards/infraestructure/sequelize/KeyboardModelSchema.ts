import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../Category/Category/domain/Category'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../../ModelSeries/domain/ModelSeriesId'
import { type KeyboardModelsPrimitives } from '../../domain/KeyboadModels'
import { type InputTypeId } from '../../../../InputType/domain/InputTypeId'
import { type HasFingerPrintReader } from '../../domain/HasFingerPrintReader'
import { type CategoryId } from '../../../../../Category/Category/domain/CategoryId'


interface KeyboardModelsCreationAttributes extends Omit<KeyboardModelsPrimitives, 'name' | 'brandId' | 'generic'> {
  modelSeriesId: Primitives<ModelSeriesId>
}

export class KeyboardModelsModel extends Model<KeyboardModelsCreationAttributes> implements KeyboardModelsCreationAttributes {
  public id!: Primitives<ModelSeriesId>
  public modelSeriesId!: Primitives<ModelSeriesId>
  public categoryId!: Primitives<CategoryId>
  public inputTypeId!: Primitives<InputTypeId>
  public hasFingerPrintReader!: Primitives<HasFingerPrintReader>

  static async associate(models: Sequelize['models']): Promise<void> {
    this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelSeriesId' }) // A keyboard model belongs to a model
    this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' }) // A keyboard model belongs to a category
    this.belongsTo(models.InputType, { as: 'inputType', foreignKey: 'inputTypeId' }) // A keyboard model belongs to a InputTypes
  }
  static async initialize(sequelize: Sequelize): Promise<void> {
    KeyboardModelsModel.init(
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
              args: [[CategoryValues.KEYBOARD]],
              msg: 'Solo puede pertenecer a la categoria de Teclados'
            }
          }
        },
        inputTypeId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        hasFingerPrintReader: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          field: 'has_fingerprint_reader'
        }
      },
      {
        modelName: 'ModelKeyboard',
        underscored: true,
        sequelize
      }
    )
  }
}

