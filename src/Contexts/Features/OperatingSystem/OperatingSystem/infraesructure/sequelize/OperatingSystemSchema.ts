import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type OperatingSystemDto } from '../../domain/OperatingSystem.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemId } from '../../domain/OperatingSystemId'
import { type OperatingSystemVersion } from '../../domain/OperatingSystemVersion'

/**
 * @description Sequelize model for the `OperatingSystem` entity.
 */
export class OperatingSystemModel extends Model<OperatingSystemDto> implements OperatingSystemDto {
	declare id: Primitives<OperatingSystemId>
	declare name: Primitives<OperatingSystemVersion>

	static associate(models: Sequelize['models']): void {
		this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'operatingSystemId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{
				modelName: 'OperatingSystemVersion',
				tableName: 'operating_system_versions',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
