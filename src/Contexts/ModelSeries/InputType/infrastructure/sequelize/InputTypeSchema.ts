import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeId } from '../../domain/InputTypeId'
import { type InputTypeName } from '../../domain/InputTypeName'
import { type InputTypeDto } from '../../domain/InputType.dto'

export class InputTypeModel extends Model<InputTypeDto> implements InputTypeDto {
	declare id: Primitives<InputTypeId>
	declare name: Primitives<InputTypeName>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasOne(models.ModelKeyboard, {
			as: 'modelKeyboard',
			foreignKey: 'inputTypeId'
		}) // An inputType has one keyboard model (if it is a keyboard)
		this.hasOne(models.ModelMouse, {
			as: 'modelMouse',
			foreignKey: 'inputTypeId'
		}) // An inputType has one mouse model (if it is a mouse)
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		InputTypeModel.init(
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
				modelName: 'InputType',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
