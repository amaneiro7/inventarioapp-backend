import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type SettingsPrimitives } from '../../../domain/entity/Settings.dto'
import { type Primitives } from '../../../../domain/value-object/Primitives'
import { type SettingsKey } from '../../../domain/valueObject/SettingsKey'
import { type SettingsValue } from '../../../domain/valueObject/SettingsValue'
import { SettingsTypeEnum, type SettingsType } from '../../../domain/valueObject/SettingsType'
import { type SettingsDescription } from '../../../domain/valueObject/SettingsDescription'
import { type SettingsIsEditable } from '../../../domain/valueObject/SettingsIsEditable'
import { type SettingsGroup } from '../../../domain/valueObject/SettingsGroup'

export class SequelizeSettingsModel extends Model<SettingsPrimitives> implements SettingsPrimitives {
	declare key: Primitives<SettingsKey>
	declare value: Primitives<SettingsValue>
	declare type: Primitives<SettingsType>
	declare group: Primitives<SettingsGroup>
	declare description: Primitives<SettingsDescription>
	declare isEditable: Primitives<SettingsIsEditable>

	static initialize(sequelize: Sequelize): void {
		SequelizeSettingsModel.init(
			{
				key: {
					type: DataTypes.STRING,
					primaryKey: true
				},
				value: {
					type: DataTypes.STRING,
					allowNull: false
				},
				type: {
					type: DataTypes.ENUM(...Object.values(SettingsTypeEnum)), // Define enum values
					allowNull: false,
					defaultValue: SettingsTypeEnum.STRING
				},
				description: {
					type: DataTypes.STRING,
					allowNull: false
				},
				group: {
					type: DataTypes.STRING,
					allowNull: false
				},
				isEditable: {
					type: DataTypes.BOOLEAN,
					allowNull: false,
					defaultValue: false
				}
			},
			{
				sequelize,
				modelName: 'setting',
				tableName: 'settings',
				underscored: true,
				timestamps: false
			}
		)
	}
}
