import { DataTypes, Model, type Sequelize } from 'sequelize'
import { LocationMonitoringStatuses } from '../../domain/valueObject/LocationMonitoringStatus'
import { type LocationMonitoringDto } from '../../domain/entity/LocationMonitoring.dto'
import { type LocationDto } from '../../../Location/domain/Location.dto'
import { type LocationMonitoringLastScan } from '../../domain/valueObject/LocationMonitoringLastScan'
import { type LocationMonitoringLastSuccess } from '../../domain/valueObject/LocationMonitoringLastSuccess'
import { type LocationMonitoringLastFailed } from '../../domain/valueObject/LocationMonitoringLastFailed'
export class LocationMonitoringModel
	extends Model<Omit<LocationMonitoringDto, 'location'>>
	implements LocationMonitoringDto
{
	declare id: string
	declare locationId: string
	declare status: LocationMonitoringStatuses
	declare lastScan: LocationMonitoringLastScan['value']
	declare lastSuccess: LocationMonitoringLastSuccess['value']
	declare lastFailed: LocationMonitoringLastFailed['value']
	declare location: LocationDto

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Location, { as: 'location', foreignKey: 'location_id' }) // A Location Monitoring belongs to a location
	}
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
						LocationMonitoringStatuses.NOTAVAILABLE,
						LocationMonitoringStatuses.ONLINE,
						LocationMonitoringStatuses.OFFLINE
					),
					allowNull: false,
					defaultValue: LocationMonitoringStatuses.NOTAVAILABLE
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
