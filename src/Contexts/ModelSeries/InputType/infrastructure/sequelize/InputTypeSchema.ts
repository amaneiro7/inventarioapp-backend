import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeId } from '../../domain/valueObject/InputTypeId'
import { type InputTypeName } from '../../domain/valueObject/InputTypeName'
import { type InputTypeDto } from '../../domain/entity/InputType.dto'

/**
 * @description Sequelize model for the `InputType` entity.
 */
export class InputTypeModel extends Model<InputTypeDto> implements InputTypeDto {
	declare id: Primitives<InputTypeId>
	declare name: Primitives<InputTypeName>

	static associate(models: Sequelize['models']): void {
		this.hasOne(models.ModelKeyboard, { as: 'modelKeyboard', foreignKey: 'inputTypeId' })
		this.hasOne(models.ModelMouse, { as: 'modelMouse', foreignKey: 'inputTypeId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{ modelName: 'InputType', tableName: 'input_types', timestamps: false, underscored: true, sequelize }
		)
	}
}
