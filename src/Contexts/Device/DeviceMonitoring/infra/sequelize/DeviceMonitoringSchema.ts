import { DataTypes, Model, type Sequelize } from 'sequelize'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { type DeviceMonitoringDto } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceDto } from '../../../Device/domain/Device.dto'
import { type MonitoringLastScan } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastScan'
import { type MonitoringLastSuccess } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastSuccess'
import { type MonitoringLastFailed } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastFailed'

/**
 * @class DeviceMonitoringModel
 * @extends Model
 * @description Sequelize model for the `DeviceMonitoring` entity.
 */
export class DeviceMonitoringModel extends Model<Omit<DeviceMonitoringDto, 'device'>> implements DeviceMonitoringDto {
	declare id: string
	declare deviceId: string
	declare status: MonitoringStatuses
	declare lastScan: MonitoringLastScan['value']
	declare lastSuccess: MonitoringLastSuccess['value']
	declare lastFailed: MonitoringLastFailed['value']
	declare device: DeviceDto

	/**
	 * @static
	 * @method associate
	 * @description Defines the relationship between this model and the `Device` model.
	 * @param {Sequelize['models']} models An object containing all initialized Sequelize models.
	 */
	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.Device, { as: 'device', foreignKey: 'deviceId' })
	}

	/**
	 * @static
	 * @method initialize
	 * @description Initializes the `DeviceMonitoringModel` with its schema definition.
	 * @param {Sequelize} sequelize The Sequelize instance.
	 */
	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				status: {
					type: DataTypes.ENUM(...Object.values(MonitoringStatuses)),
					allowNull: false,
					defaultValue: MonitoringStatuses.NOTAVAILABLE
				},
				deviceId: { type: DataTypes.UUID, allowNull: true },
				lastScan: { type: DataTypes.DATE, allowNull: true },
				lastSuccess: { type: DataTypes.DATE, allowNull: true },
				lastFailed: { type: DataTypes.DATE, allowNull: true }
			},
			{
				modelName: 'DeviceMonitoring',
				tableName: 'device_monitorings',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
