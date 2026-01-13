import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionDto } from '../../domain/entity/Region.dto'
import { type RegionId } from '../../domain/valueObject/RegionId'
import { type RegionName } from '../../domain/valueObject/RegionName'
import { type AdministrativeRegionId } from '../../../AdministrativeRegion/domain/valueObject/AdministrativeRegionId'
import { type AdministrativeRegionDto } from '../../../AdministrativeRegion/domain/entity/AdministrativeRegion.dto'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

/**
 * Represents the Region model in the database.
 */
export class RegionModel extends Model<Omit<RegionDto, 'administrativeRegion'>> implements RegionDto {
	declare id: Primitives<RegionId>
	declare name: Primitives<RegionName>
	declare administrativeRegionId: Primitives<AdministrativeRegionId>
	declare administrativeRegion: AdministrativeRegionDto

	/**
	 * Associates the Region model with other models.
	 * @param {SequelizeModels} models - The models object containing all initialized models.
	 */
	static async associate(models: SequelizeModels): Promise<void> {
		this.belongsTo(models.AdministrativeRegion, {
			as: 'administrativeRegion',
			foreignKey: 'administrativeRegionId'
		}) // A Region belongs to Administrative Region
		this.hasMany(models.State, { as: 'state', foreignKey: 'regionId' }) // An Region can hava many states
	}

	/**
	 * Initializes the Region model.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		RegionModel.init(
			{
				id: {
					type: DataTypes.STRING,
					primaryKey: true,
					allowNull: false
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true
				},
				administrativeRegionId: {
					type: DataTypes.STRING,
					allowNull: false
				}
			},
			{
				modelName: 'Region',
				tableName: 'regions',
				timestamps: false,
				underscored: true,
				sequelize,
				indexes: [{ fields: ['administrative_region_id'] }]
			}
		)
	}
}
