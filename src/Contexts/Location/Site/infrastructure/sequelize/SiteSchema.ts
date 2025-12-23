import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CityId } from '../../../City/domain/valueObject/CityId'
import { type SiteName } from '../../domain/valueObject/SiteName'
import { type SiteAddress } from '../../domain/valueObject/SiteAddress'
import { type CityDto } from '../../../City/domain/entity/City.dto'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type SiteId } from '../../domain/valueObject/SiteId'
import { type SiteDto } from '../../domain/entity/Site.dto'

/**
 * Represents the Site model in the database.
 */
export class SiteModels extends Model<Omit<SiteDto, 'city'>> implements SiteDto {
	declare id: Primitives<SiteId>
	declare cityId: Primitives<CityId>
	declare address: Primitives<SiteAddress>
	declare name: Primitives<SiteName>
	declare city: CityDto

	/**
	 * Associates the Site model with other models.
	 * @param {SequelizeModels} models - The models object containing all initialized models.
	 */
	static async associate(models: SequelizeModels): Promise<void> {
		this.belongsTo(models.City, { as: 'city', foreignKey: 'cityId' }) // A Site belongs to Many City
		this.hasMany(models.Location, { as: 'location', foreignKey: 'siteId' }) // A Site has Many Locations
		this.hasMany(models.Shipment, { as: 'shipmentOrigin', foreignKey: 'origin' }) // A Site has Many shipmentsOrigin
		this.hasMany(models.Shipment, { as: 'shipmentsDestination', foreignKey: 'destination' }) // A Site has Many shipmentsLocation
	}

	/**
	 * Initializes the Site model.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		SiteModels.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				cityId: {
					type: DataTypes.UUID,
					allowNull: false
				},
				address: {
					type: DataTypes.TEXT,
					allowNull: false
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true
				}
			},
			{
				modelName: 'Site',
				tableName: 'sites',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
