import { DataTypes, Model, type Sequelize } from 'sequelize'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { type LocationMonitoringDto } from '../../domain/entity/LocationMonitoring.dto'
import { type LocationDto } from '../../../Location/domain/Location.dto'
import { type MonitoringLastScan } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastScan'
import { type MonitoringLastSuccess } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastSuccess'
import { type MonitoringLastFailed } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastFailed'

/**
 * Represents the LocationMonitoring model in the database.
 */
export class LocationMonitoringModel
	extends Model<Omit<LocationMonitoringDto, 'location'>>
	implements LocationMonitoringDto
{
	declare id: string
	declare locationId: string
	declare status: MonitoringStatuses
	declare lastScan: MonitoringLastScan['value']
	declare lastSuccess: MonitoringLastSuccess['value']
	declare lastFailed: MonitoringLastFailed['value']
	declare location: LocationDto

	/**
	 * Associates the LocationMonitoring model with other models.
	 * @param {Sequelize['models']} models - The models object containing all initialized models.
	 */
	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Location, { as: 'location', foreignKey: 'location_id' }) // A Location Monitoring belongs to a location
	}

	/**
	 * Initializes the LocationMonitoring model.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		LocationMonitoringModel.init(
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
						MonitoringStatuses.OFFLINE,
						MonitoringStatuses.HOSTNAME_MISMATCH
					),
					allowNull: false,
					defaultValue: MonitoringStatuses.NOTAVAILABLE
				},
				locationId: {
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
				modelName: 'LocationMonitoring',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
