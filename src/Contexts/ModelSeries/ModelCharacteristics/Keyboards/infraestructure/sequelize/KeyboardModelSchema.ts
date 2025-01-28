import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../Category/Category/domain/Category'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../../ModelSeries/domain/ModelSeriesId'
import { type InputTypeId } from '../../../../InputType/domain/InputTypeId'
import { type HasFingerPrintReader } from '../../domain/HasFingerPrintReader'
import { type CategoryId } from '../../../../../Category/Category/domain/CategoryId'
import { KeyboardModelsDto } from '../../domain/KeyboardModels.dto'
import { InputType } from '../../../../InputType/domain/InputType.dto'

interface KeyboardModelsCreationAttributes
	extends Omit<KeyboardModelsDto, 'inputType'> {
	id: Primitives<ModelSeriesId>
	categoryId: Primitives<CategoryId>
	modelSeriesId: Primitives<ModelSeriesId>
}

export class KeyboardModelsModel
	extends Model<KeyboardModelsCreationAttributes>
	implements KeyboardModelsDto
{
	declare id: Primitives<ModelSeriesId>
	declare modelSeriesId: Primitives<ModelSeriesId>
	declare categoryId: Primitives<CategoryId>
	declare inputTypeId: Primitives<InputTypeId>
	declare hasFingerPrintReader: Primitives<HasFingerPrintReader>
	declare inputType: InputType

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Model, {
			as: 'model',
			foreignKey: 'modelSeriesId'
		}) // A keyboard model belongs to a model
		this.belongsTo(models.Category, {
			as: 'category',
			foreignKey: 'categoryId'
		}) // A keyboard model belongs to a category
		this.belongsTo(models.InputType, {
			as: 'inputType',
			foreignKey: 'inputTypeId'
		}) // A keyboard model belongs to a InputTypes
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
