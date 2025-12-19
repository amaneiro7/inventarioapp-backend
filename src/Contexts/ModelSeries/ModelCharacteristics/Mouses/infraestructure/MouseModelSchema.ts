import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../ModelSeries/domain/ModelSeriesId'
import { type InputTypeId } from '../../../InputType/domain/valueObject/InputTypeId'
import { type CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type MouseModelsDto } from '../domain/MouseModels.dto'
import { type InputTypeDto } from '../../../InputType/domain/entity/InputType.dto'

interface MouseModelsCreationAttributes extends Omit<MouseModelsDto, 'inputType'> {
	id: Primitives<ModelSeriesId>
	categoryId: Primitives<CategoryId>
	modelSeriesId: Primitives<ModelSeriesId>
}

/**
 * @description Sequelize model for the `MouseModels` entity.
 */
export class MouseModelsModel extends Model<MouseModelsCreationAttributes> implements MouseModelsDto {
	declare inputType: InputTypeDto
	declare id: Primitives<ModelSeriesId>
	declare modelSeriesId: Primitives<ModelSeriesId>
	declare categoryId: Primitives<CategoryId>
	declare inputTypeId: Primitives<InputTypeId>

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
				categoryId: { type: DataTypes.STRING, allowNull: false, validate: { isIn: [[CategoryValues.MOUSE]] } },
				inputTypeId: { type: DataTypes.STRING, allowNull: false }
			},
			{ modelName: 'ModelMouse', tableName: 'model_mouses', underscored: true, sequelize }
		)
	}
}
