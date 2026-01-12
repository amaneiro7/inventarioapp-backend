import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'
import { type DeviceIPAddress } from '../../../domain/valueObject/DeviceIPAddress'
import { type CategoryId } from '../../../../../Category/Category/domain/valueObject/CategoryId'
import { type DeviceId } from '../../../domain/valueObject/DeviceId'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type DevicePrinterPrimitives } from '../../../domain/dto/Printer.dto'
import { type SequelizeModels } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

interface DevicePrinterCreationAttributes extends Pick<DevicePrinterPrimitives, 'id' | 'categoryId' | 'ipAddress'> {
	deviceId: Primitives<DeviceId>
}

/**
 * @description Sequelize model for the `DevicePrinter` entity.
 */
export class DevicePrinterModel
	extends Model<DevicePrinterCreationAttributes>
	implements DevicePrinterCreationAttributes
{
	declare deviceId: Primitives<DeviceId>
	declare id: Primitives<DeviceId>
	declare categoryId: Primitives<CategoryId>
	declare ipAddress: Primitives<DeviceIPAddress>

	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Device, { as: 'device', foreignKey: 'deviceId' })
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: { isIn: [[CategoryValues.MFP, CategoryValues.LASERPRINTER, CategoryValues.INKPRINTER]] }
				},
				deviceId: { type: DataTypes.UUID, allowNull: false },
				ipAddress: { type: DataTypes.INET, allowNull: true, validate: { isIPv4: true } }
			},
			{
				modelName: 'DevicePrinter',
				tableName: 'device_printers',
				timestamps: true,
				underscored: true,
				sequelize,
				indexes: [
					// OPTIMIZACIÓN: Vital para el JOIN con la tabla devices
					{ fields: ['device_id'], name: 'device_printer_device_id_idx' },
					// OPTIMIZACIÓN: Para búsquedas rápidas por IP
					{ fields: ['ip_address'], name: 'device_printer_ip_address_idx' }
				]
			}
		)
	}
}
