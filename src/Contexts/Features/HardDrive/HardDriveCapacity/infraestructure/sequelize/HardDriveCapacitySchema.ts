import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type HardDriveCapacityId } from '../../domain/valueObject/HardDriveCapacityId'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityDto } from '../../domain/entity/HardDriveCapacity.dto'
import { type HardDriveCapacityValue } from '../../domain/valueObject/HardDriveCapacityValue'

/**
 * @description Sequelize model for the `HardDriveCapacity` entity.
 */
export class HardDriveCapacityModel extends Model<HardDriveCapacityDto> implements HardDriveCapacityDto {
	declare id: Primitives<HardDriveCapacityId>
	declare name: Primitives<HardDriveCapacityValue>

	static associate(models: Sequelize['models']): void {
		this.hasMany(models.DeviceHardDrive, { as: 'hardDrive', foreignKey: 'hardDriveCapacityId' })
		this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'hardDriveCapacityId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
				name: { type: DataTypes.INTEGER, allowNull: false, unique: true }
			},
			{
				modelName: 'HardDriveCapacity',
				tableName: 'hard_drive_capacities',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
