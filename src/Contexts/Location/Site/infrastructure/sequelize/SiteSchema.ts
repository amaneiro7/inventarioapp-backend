import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type SiteDto } from '../../domain/Site.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SiteId } from '../../domain/SiteId'
import { type CityId } from '../../../City/domain/CityId'
import { type SiteName } from '../../domain/SiteName'
import { type SiteAddress } from '../../domain/SiteAddress'
import { type CityDto } from '../../../City/domain/City.dto'

export class SiteModels extends Model<Omit<SiteDto, 'city'>> implements SiteDto {
	declare id: Primitives<SiteId>
	declare cityId: Primitives<CityId>
	declare address: Primitives<SiteAddress>
	declare name: Primitives<SiteName>
	declare city: CityDto

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.City, { as: 'city', foreignKey: 'cityId' }) // A Site belongs to Many City
		this.hasMany(models.Location, { as: 'location', foreignKey: 'siteId' }) // A Site has Many Locations
	}
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
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
