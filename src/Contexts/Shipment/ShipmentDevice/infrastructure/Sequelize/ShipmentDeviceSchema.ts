import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ShipmentDeviceId } from '../../domain/valueObject/ShipmentDeviceId'
import { type ShipmentDeviceDto } from '../../domain/entity/ShipmentDevice.dto'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type DeviceId } from '../../../../Device/Device/domain/valueObject/DeviceId'
import { type DeviceSnapshotData } from '../../domain/valueObject/DeviceSnapshot'
import { type ShipmentId } from '../../../Shipment/domain/valueObject/ShipmentId'

export class ShipmentDeviceModel extends Model<ShipmentDeviceDto> implements ShipmentDeviceDto {
	declare id: Primitives<ShipmentDeviceId>
	declare shipmentId: Primitives<ShipmentId>
	declare deviceId: Primitives<DeviceId>
	declare deviceSnapshot: DeviceSnapshotData

	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Shipment, { as: 'shipment', foreignKey: 'shipmentId' })
		this.belongsTo(models.Device, { as: 'device', foreignKey: 'deviceId' })
	}

	static initialize(sequelize: Sequelize): void {
		ShipmentDeviceModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				shipmentId: {
					type: DataTypes.UUID,
					allowNull: false
				},
				deviceId: {
					type: DataTypes.UUID,
					allowNull: false
				},
				deviceSnapshot: {
					type: DataTypes.JSONB,
					allowNull: false
				}
			},
			{
				modelName: 'ShipmentDevice',
				tableName: 'shipment_devices',
				timestamps: true,
				underscored: true,
				sequelize,
				indexes: [{ fields: ['shipment_id'] }, { fields: ['device_id'] }]
			}
		)
	}
}
