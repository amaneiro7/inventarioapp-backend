import { DataTypes, Model, type Sequelize } from 'sequelize'
import { DeviceMonitoringStatuses } from '../../domain/valueObject/DeviceMonitoringStatus'
import { type DeviceMonitoringDto } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceDto } from '../../../Device/domain/Device.dto'
import { type DeviceMonitoringLastScan } from '../../domain/valueObject/DeviceMonitoringLastScan'
import { type DeviceMonitoringLastSuccess } from '../../domain/valueObject/DeviceMonitoringLastSuccess'
import { type DeviceMonitoringLastFailed } from '../../domain/valueObject/DeviceMonitoringLastFailed'
export class DeviceMonitoringModel extends Model<Omit<DeviceMonitoringDto, 'device'>> implements DeviceMonitoringDto {
	declare id: string
	declare deviceId: string
	declare status: DeviceMonitoringStatuses
	declare lastScan: DeviceMonitoringLastScan['value']
	declare lastSuccess: DeviceMonitoringLastSuccess['value']
	declare lastFailed: DeviceMonitoringLastFailed['value']
	declare device: DeviceDto

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasOne(models.Device, {
			as: 'device',
			foreignKey: 'deviceId'
		}) // A deviceMonitoring has one device
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
						DeviceMonitoringStatuses.NOTAVAILABLE,
						DeviceMonitoringStatuses.ONLINE,
						DeviceMonitoringStatuses.OFFLINE
					),
					allowNull: false,
					defaultValue: DeviceMonitoringStatuses.NOTAVAILABLE
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
