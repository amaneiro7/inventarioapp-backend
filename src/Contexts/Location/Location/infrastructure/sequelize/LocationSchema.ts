import {
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	DataTypes,
	Model,
	type Sequelize
} from 'sequelize'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { LocationId } from '../../domain/valueObject/LocationId'
import type { TypeOfSiteId } from '../../../TypeOfSite/domain/valueObject/TypeOfSiteId'
import type { LocationName } from '../../domain/valueObject/LocationName'
import type { SiteId } from '../../../Site/domain/valueObject/SiteId'
import type { LocationDto } from '../../domain/entity/Location.dto'
import type { SiteDto } from '../../../Site/domain/entity/Site.dto'
import type { TypeOfSiteDto } from '../../../TypeOfSite/domain/entity/TypeOfSite.dto'
import type { LocationStatusDto } from '../../../LocationStatus/domain/entity/LocationStatus.dto'
import type { SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import type { LocationStatusId } from '../../../LocationStatus/domain/valueObject/LocationStatusId'
import type { LocationSubnet } from '../../domain/valueObject/LocationSubnet'
import type { ISPLinkModel } from '../../../ISPLinks/infrastructure/sequelize/ISPLinkSchema'
import type { ISPLinkId } from '../../../ISPLinks/domain/valueObject/ISPLinkId'
import type { ISPLinkDto } from '../../../ISPLinks/domain/entity/ISPLink.dto'
import { AgencyClassificationEnum, type AgencyClassification } from '../../domain/valueObject/AgencyClassification'

/**
 * Represents the Location model in the database.
 */
export class LocationModel
	extends Model<Omit<LocationDto, 'site' | 'typeOfSite' | 'operationalStatus' | 'ispLinks'>>
	implements LocationDto
{
	declare id: Primitives<LocationId>
	declare typeOfSiteId: Primitives<TypeOfSiteId>
	declare siteId: Primitives<SiteId>
	declare locationStatusId: Primitives<LocationStatusId>
	declare name: Primitives<LocationName>
	declare subnet: Primitives<LocationSubnet>
	declare typeOfSite: TypeOfSiteDto
	declare agencyClassification: Primitives<AgencyClassification>
	declare site: SiteDto
	declare operationalStatus: LocationStatusDto
	declare ispLinks: Primitives<ISPLinkId>[] & Omit<ISPLinkDto, 'locations'>[]

	// Association Mixins
	declare getISPLink: BelongsToManyGetAssociationsMixin<ISPLinkModel>
	declare addISPLink: BelongsToManyAddAssociationsMixin<ISPLinkModel, Primitives<ISPLinkId>>
	declare setISPLinks: BelongsToManySetAssociationsMixin<ISPLinkModel, Primitives<ISPLinkId>>
	declare removeISPLink: BelongsToManyAddAssociationsMixin<ISPLinkModel, Primitives<ISPLinkId>>

	/**
	 * Associates the Location model with other models.
	 * @param {SequelizeModels} models - The models object containing all initialized models.
	 */ static async associate(models: SequelizeModels): Promise<void> {
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
		this.belongsToMany(models.ISPLink, {
			as: 'ispLinks',
			through: 'location_isp_link',
			foreignKey: 'locationId',
			otherKey: 'ispLinkId'
		}) // A Location belongs to Many ISP Links
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
				agencyClassification: {
					type: DataTypes.ENUM(...Object.values(AgencyClassificationEnum)),
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
				tableName: 'locations',
				timestamps: false,
				underscored: true,
				sequelize,
				indexes: [{ fields: ['type_of_site_id'] }, { fields: ['site_id'] }, { fields: ['location_status_id'] }]
			}
		)
	}
}
