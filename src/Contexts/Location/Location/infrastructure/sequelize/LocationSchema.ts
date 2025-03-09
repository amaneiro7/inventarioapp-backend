import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../../domain/LocationId'
import { type TypeOfSiteId } from '../../../TypeOfSite/domain/TypeOfSiteId'
import { type LocationName } from '../../domain/LocationName'
import { type LocationSubnet } from '../../domain/LocationSubnet'
import { type SiteId } from '../../../Site/domain/SiteId'
import { type LocationDto } from '../../domain/Location.dto'
import { type SiteDto } from '../../../Site/domain/Site.dto'
import { type TypeOfSite } from '../../../TypeOfSite/domain/TypeOfSite.dto'

export class LocationModel extends Model<Omit<LocationDto, 'site' | 'typeOfSite'>> implements LocationDto {
	declare typeOfSite: TypeOfSite
	declare site: SiteDto
	declare id: Primitives<LocationId>
	declare typeOfSiteId: Primitives<TypeOfSiteId>
	declare siteId: Primitives<SiteId>
	declare name: Primitives<LocationName>
	declare subnet: Primitives<LocationSubnet>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.TypeOfSite, {
			as: 'typeOfSite',
			foreignKey: 'typeOfSiteId'
		}) // A Location belongs to Many Type Of Site
		this.belongsTo(models.Site, { as: 'site', foreignKey: 'siteId' }) //  A Location belongs to Many sites
		this.hasMany(models.Employee, {
			as: 'employee',
			foreignKey: 'locationId'
		}) // A Location has Many employees
		this.hasMany(models.Device, { as: 'devices', foreignKey: 'locationId' }) // A Location has Many devices
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
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
