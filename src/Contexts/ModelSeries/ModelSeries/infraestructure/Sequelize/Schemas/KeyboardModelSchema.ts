import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../../ModelSeries/domain/valueObject/ModelSeriesId'
import { type InputTypeId } from '../../../../InputType/domain/valueObject/InputTypeId'
import { type CategoryId } from '../../../../../Category/Category/domain/valueObject/CategoryId'
import { type InputTypeDto } from '../../../../InputType/domain/entity/InputType.dto'
import { type HasFingerPrintReader } from '../../../domain/valueObject/HasFingerPrintReader'
import { type KeyboardModelsDto } from '../../../domain/dto/KeyboardModels.dto'

interface KeyboardModelsCreationAttributes extends Omit<KeyboardModelsDto, 'inputType'> {
	id: Primitives<ModelSeriesId>
	categoryId: Primitives<CategoryId>
	modelSeriesId: Primitives<ModelSeriesId>
}

/**
 * @description Sequelize model for the `KeyboardModels` entity.
 */
export class KeyboardModelsModel extends Model<KeyboardModelsCreationAttributes> implements KeyboardModelsDto {
	declare id: Primitives<ModelSeriesId>
	declare modelSeriesId: Primitives<ModelSeriesId>
	declare categoryId: Primitives<CategoryId>
	declare inputTypeId: Primitives<InputTypeId>
	declare hasFingerPrintReader: Primitives<HasFingerPrintReader>
	declare inputType: InputTypeDto

	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelSeriesId' })
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
		this.belongsTo(models.InputType, { as: 'inputType', foreignKey: 'inputTypeId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				modelSeriesId: { type: DataTypes.UUID, unique: true, allowNull: false },
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: { isIn: [[CategoryValues.KEYBOARD]] }
				},
				inputTypeId: { type: DataTypes.STRING, allowNull: false },
				hasFingerPrintReader: { type: DataTypes.BOOLEAN, defaultValue: false, field: 'has_fingerprint_reader' }
			},
			{ modelName: 'ModelKeyboard', tableName: 'model_keyboards', underscored: true, sequelize }
		)
	}
}
