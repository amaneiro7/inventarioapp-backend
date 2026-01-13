import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type OperatingSystemDto } from '../../domain/entity/OperatingSystem.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemId } from '../../domain/valueObject/OperatingSystemId'
import { type OperatingSystemVersion } from '../../domain/valueObject/OperatingSystemVersion'
import { type OperatingSystemName } from '../../domain/valueObject/OperatingSystemName'
import { type OperatingSystemBuildNumber } from '../../domain/valueObject/OperatingSystemBuildNumber'

/**
 * @description Sequelize model for the `OperatingSystem` entity.
 */
export class OperatingSystemModel extends Model<OperatingSystemDto> implements OperatingSystemDto {
	declare id: Primitives<OperatingSystemId>
	declare name: Primitives<OperatingSystemName>
	declare buildNumber: Primitives<OperatingSystemBuildNumber>
	declare version: Primitives<OperatingSystemVersion>

	static associate(models: Sequelize['models']): void {
		this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'operatingSystemId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false, autoIncrement: true },
				name: { type: DataTypes.STRING, allowNull: false, unique: false },
				buildNumber: { type: DataTypes.STRING, allowNull: true, unique: true },
				version: { type: DataTypes.STRING, allowNull: true, unique: true }
			},
			{
				modelName: 'OperatingSystemVersion',
				tableName: 'operating_system_versions',
				timestamps: false,
				underscored: true,
				sequelize,
				indexes: [{ fields: ['name'] }]
			}
		)
	}
}
