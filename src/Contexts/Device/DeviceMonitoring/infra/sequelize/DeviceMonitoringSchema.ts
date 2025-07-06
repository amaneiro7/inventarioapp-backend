import { DataTypes, Model, type Sequelize } from 'sequelize'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { type DeviceMonitoringDto } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceDto } from '../../../Device/domain/Device.dto'
import { type MonitoringLastScan } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastScan'
import { type MonitoringLastSuccess } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastSuccess'
import { type MonitoringLastFailed } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastFailed'

export class DeviceMonitoringModel extends Model<Omit<DeviceMonitoringDto, 'device'>> implements DeviceMonitoringDto {
	declare id: string
	declare deviceId: string
	declare status: MonitoringStatuses
	declare lastScan: MonitoringLastScan['value']
	declare lastSuccess: MonitoringLastSuccess['value']
	declare lastFailed: MonitoringLastFailed['value']
	declare device: DeviceDto

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Device, { as: 'device', foreignKey: 'device_id' }) // A Device Monitoring belongs to a device
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		DeviceMonitoringModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				status: {
					type: DataTypes.ENUM(
						MonitoringStatuses.NOTAVAILABLE,
						MonitoringStatuses.ONLINE,
						MonitoringStatuses.OFFLINE
					),
					allowNull: false,
					defaultValue: MonitoringStatuses.NOTAVAILABLE
				},
				deviceId: {
					type: DataTypes.UUID,
					allowNull: true
				},
				lastScan: {
					type: DataTypes.DATE,
					allowNull: true
				},
				lastSuccess: {
					type: DataTypes.DATE,
					allowNull: true
				},
				lastFailed: {
					type: DataTypes.DATE,
					allowNull: true
				}
			},
			{
				modelName: 'DeviceMonitoring',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
