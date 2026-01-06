import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../../../Device/Device/domain/DeviceId'
import { type ProcessorId } from '../../../Processor/domain/valueObject/ProcessorId'
import { type MACAddress } from '../../domain/MACAddress'
import { type IPAddress } from '../../domain/IPAddress'
import { type ComputerName } from '../../domain/ComputerName'
import { type CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { type ComputerMemoryRamCapacity } from '../../domain/ComputerMemoryRamCapacity'
import { type ComputerHardDriveCapacity } from '../../domain/ComputerHardDriveCapacity'
import { type ComputerHardDriveType } from '../../domain/ComputerHardDriveType'
import { type ComputerOperatingSystem } from '../../domain/ComputerOperatingSystem'
import { type ComputerOperatingSystemArq } from '../../domain/ComputerOperatingSystemArq'
import { type MemoryRamValues } from '../../../MemoryRam/MemoryRamCapacity/MemoryRamValues'
import { type DeviceComputerPrimitives } from '../../domain/Computer.dto'

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
	declare memoryRamCapacity: Primitives<ComputerMemoryRamCapacity>
	declare hardDriveCapacityId: Primitives<ComputerHardDriveCapacity>
	declare hardDriveTypeId: Primitives<ComputerHardDriveType>
	declare operatingSystemId: Primitives<ComputerOperatingSystem>
	declare operatingSystemArqId: Primitives<ComputerOperatingSystemArq>
	declare macAddress: Primitives<MACAddress>
	declare ipAddress: Primitives<IPAddress>

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
