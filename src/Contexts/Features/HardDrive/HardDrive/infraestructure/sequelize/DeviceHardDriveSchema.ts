import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../../../../Device/Device/domain/DeviceId'
import { type DeviceHardDrivePrimitives } from '../../domain/HardDrive.dto'
import { type HardDriveHealth } from '../../domain/HardDriveHealth'
import { type HDDCapacity } from '../../domain/HDDCapacity'
import { type HDDType } from '../../domain/HDDType'
import { type CategoryId } from '../../../../../Category/Category/domain/valueObject/CategoryId'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'

interface DeviceHardDriveCreationAttributes extends Pick<
	DeviceHardDrivePrimitives,
	'id' | 'categoryId' | 'health' | 'hardDriveCapacityId' | 'hardDriveTypeId'
> {
	deviceId: Primitives<DeviceId>
}

/**
 * @description Sequelize model for the `DeviceHardDrive` entity.
 */
export class DeviceHardDriveModel
	extends Model<DeviceHardDriveCreationAttributes>
	implements DeviceHardDriveCreationAttributes
{
	declare deviceId: Primitives<DeviceId>
	declare id: Primitives<DeviceId>
	declare categoryId: Primitives<CategoryId>
	declare health: Primitives<HardDriveHealth>
	declare hardDriveCapacityId: Primitives<HDDCapacity>
	declare hardDriveTypeId: Primitives<HDDType>

	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.Device, { as: 'device', foreignKey: 'deviceId' })
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
		this.belongsTo(models.HardDriveCapacity, { as: 'hardDriveCapacity', foreignKey: 'hardDriveCapacityId' })
		this.belongsTo(models.HardDriveType, { as: 'hardDriveType', foreignKey: 'hardDriveTypeId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: { isIn: [[CategoryValues.HARDDRIVE]] }
				},
				deviceId: { type: DataTypes.UUID, allowNull: false },
				health: { type: DataTypes.INTEGER, allowNull: false },
				hardDriveCapacityId: { type: DataTypes.STRING, allowNull: false },
				hardDriveTypeId: { type: DataTypes.STRING, allowNull: false }
			},
			{
				modelName: 'DeviceHardDrive',
				tableName: 'device_hard_drives',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
