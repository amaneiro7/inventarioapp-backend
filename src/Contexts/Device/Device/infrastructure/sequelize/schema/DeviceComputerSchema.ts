import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../../domain/valueObject/DeviceId'
import { type ProcessorId } from '../../../../../Features/Processor/domain/valueObject/ProcessorId'
import { type MACAddress } from '../../../domain/valueObject/MACAddress'
import { type ComputerName } from '../../../domain/valueObject/ComputerName'
import { type CategoryId } from '../../../../../Category/Category/domain/valueObject/CategoryId'
import { type MemoryRamValues } from '../../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type DeviceComputerPrimitives } from '../../../domain/dto/Computer.dto'
import { type MemoryRamCapacity } from '../../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamCapacity'
import { type HardDriveCapacityId } from '../../../../../Features/HardDrive/HardDriveCapacity/domain/valueObject/HardDriveCapacityId'
import { type HardDriveTypeId } from '../../../../../Features/HardDrive/HardDriveType/domain/valueObject/HardDriveTypeId'
import { type OperatingSystemId } from '../../../../../Features/OperatingSystem/OperatingSystem/domain/valueObject/OperatingSystemId'
import { type OperatingSystemArqId } from '../../../../../Features/OperatingSystem/OperatingSystemArq/domain/valueObject/OperatingSystemArqID'
import { type DeviceIPAddress } from '../../../domain/valueObject/DeviceIPAddress'

export interface DeviceComputerCreationAttributes extends Pick<
	DeviceComputerPrimitives,
	| 'id'
	| 'categoryId'
	| 'computerName'
	| 'processorId'
	| 'memoryRam'
	| 'memoryRamCapacity'
	| 'hardDriveCapacityId'
	| 'hardDriveTypeId'
	| 'operatingSystemId'
	| 'operatingSystemArqId'
	| 'macAddress'
	| 'ipAddress'
> {
	deviceId: Primitives<DeviceId>
}

/**
 * @description Sequelize model for the `DeviceComputer` entity.
 */
export class DeviceComputerModel
	extends Model<DeviceComputerCreationAttributes>
	implements DeviceComputerCreationAttributes
{
	declare deviceId: Primitives<DeviceId>
	declare id: Primitives<DeviceId>
	declare categoryId: Primitives<CategoryId>
	declare computerName: Primitives<ComputerName>
	declare memoryRam: Primitives<MemoryRamValues>[]
	declare processorId: Primitives<ProcessorId>
	declare memoryRamCapacity: Primitives<MemoryRamCapacity>
	declare hardDriveCapacityId: Primitives<HardDriveCapacityId>
	declare hardDriveTypeId: Primitives<HardDriveTypeId>
	declare operatingSystemId: Primitives<OperatingSystemId>
	declare operatingSystemArqId: Primitives<OperatingSystemArqId>
	declare macAddress: Primitives<MACAddress>
	declare ipAddress: Primitives<DeviceIPAddress>

	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
		this.belongsTo(models.Device, { as: 'device', foreignKey: 'deviceId' })
		this.belongsTo(models.Processor, { as: 'processor', foreignKey: 'processorId' })
		this.belongsTo(models.HardDriveCapacity, { as: 'hardDriveCapacity', foreignKey: 'hardDriveCapacityId' })
		this.belongsTo(models.HardDriveType, { as: 'hardDriveType', foreignKey: 'hardDriveTypeId' })
		this.belongsTo(models.OperatingSystemVersion, { as: 'operatingSystem', foreignKey: 'operatingSystemId' })
		this.belongsTo(models.OperatingSystemArq, { as: 'operatingSystemArq', foreignKey: 'operatingSystemArqId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						isIn: [
							[
								CategoryValues.COMPUTADORAS,
								CategoryValues.ALLINONE,
								CategoryValues.LAPTOPS,
								CategoryValues.SERVIDORES
							]
						]
					}
				},
				deviceId: { type: DataTypes.UUID, allowNull: false },
				computerName: { type: DataTypes.STRING, unique: true, allowNull: true },
				processorId: { type: DataTypes.UUID, allowNull: true },
				memoryRam: { type: DataTypes.ARRAY(DataTypes.DECIMAL), allowNull: true },
				memoryRamCapacity: { type: DataTypes.DECIMAL, allowNull: false },
				hardDriveCapacityId: { type: DataTypes.STRING, allowNull: true },
				hardDriveTypeId: { type: DataTypes.STRING, allowNull: true },
				operatingSystemId: { type: DataTypes.STRING, allowNull: true, field: 'operating_system_version_id' },
				operatingSystemArqId: { type: DataTypes.STRING, allowNull: true },
				macAddress: { type: DataTypes.MACADDR, unique: true, allowNull: true },
				ipAddress: { type: DataTypes.INET, allowNull: true, validate: { isIPv4: true } }
			},
			{ modelName: 'DeviceComputer', timestamps: true, underscored: true, sequelize }
		)
	}
}
