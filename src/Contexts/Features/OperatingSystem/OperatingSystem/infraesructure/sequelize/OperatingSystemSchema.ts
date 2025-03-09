import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type OperatingSystemDto } from '../../domain/OperatingSystem.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemId } from '../../domain/OperatingSystemId'
import { type OperatingSystemVersion } from '../../domain/OperatingSystemVersion'

export class OperatingSystemModel extends Model<OperatingSystemDto> implements OperatingSystemDto {
	declare id: Primitives<OperatingSystemId>
	declare name: Primitives<OperatingSystemVersion>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.DeviceComputer, {
			as: 'computer',
			foreignKey: 'operatingSystemId'
		}) // An operating system can have many computers
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		OperatingSystemModel.init(
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
				modelName: 'OperatingSystemVersion',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
