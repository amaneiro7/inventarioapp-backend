import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../../domain/LocationId'
import { type TypeOfSiteId } from '../../../TypeOfSite/domain/TypeOfSiteId'
import { type LocationName } from '../../domain/LocationName'
import { type LocationSubnet } from '../../domain/LocationSubnet'
import { type SiteId } from '../../../Site/domain/SiteId'
import { type LocationDto } from '../../domain/Location.dto'
import { type SiteDto } from '../../../Site/domain/Site.dto'
import { type TypeOfSiteDto } from '../../../TypeOfSite/domain/TypeOfSite.dto'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import { type LocationOperationalStatus } from '../../domain/LocationOperationalStatus'
import { type LocationStatusDto } from '../../../LocationStatus/domain/LocationStatus.dto'

/**
 * Represents the Location model in the database.
 */
export class LocationModel
	extends Model<Omit<LocationDto, 'site' | 'typeOfSite' | 'operationalStatus'>>
	implements LocationDto
{
	declare id: Primitives<LocationId>
	declare typeOfSiteId: Primitives<TypeOfSiteId>
	declare siteId: Primitives<SiteId>
	declare locationStatusId: Primitives<LocationOperationalStatus>
	declare name: Primitives<LocationName>
	declare subnet: Primitives<LocationSubnet>

	declare typeOfSite: TypeOfSiteDto
	declare site: SiteDto
	declare operationalStatus: LocationStatusDto

	/**
	 * Associates the Location model with other models.
	 * @param {Sequelize['models']} models - The models object containing all initialized models.
	 */ static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.TypeOfSite, {
			as: 'typeOfSite',
			foreignKey: 'typeOfSiteId'
		}) // A Location belongs to Many Type Of Site
		this.belongsTo(models.LocationStatus, {
			as: 'locationStatus',
			foreignKey: 'locationStatusId'
		}) // A Location belongs to Many Location STatus
		this.belongsTo(models.Site, { as: 'site', foreignKey: 'siteId' }) //  A Location belongs to Many sites
		this.hasMany(models.Employee, {
			as: 'employee',
			foreignKey: 'locationId'
		}) // A Location has Many employees
		this.hasMany(models.Device, { as: 'devices', foreignKey: 'locationId' }) // A Location has Many devices
		this.hasOne(models.LocationMonitoring, {
			as: 'locationMonitoring',
			foreignKey: 'locationId'
		}) // A location has one location Monitoring
	}

	/**
	 * Initializes the Location model.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 */ static async initialize(sequelize: Sequelize): Promise<void> {
		LocationModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				typeOfSiteId: {
					type: DataTypes.STRING,
					allowNull: false
				},
				siteId: {
					type: DataTypes.UUID,
					allowNull: false
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false
				},
				subnet: {
					type: DataTypes.INET,
					allowNull: true
				},
				locationStatusId: {
					type: DataTypes.STRING,
					allowNull: false,
					defaultValue: LocationStatusOptions.OPERATIONAL
				}
			},
			{
				modelName: 'Location',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
