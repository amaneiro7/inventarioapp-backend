import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionDto } from '../../domain/entity/AdministrativeRegion.dto'
import { type AdministrativeRegionId } from '../../domain/valueObject/AdministrativeRegionId'
import { type AdministrativeRegionName } from '../../domain/valueObject/AdministrativeRegionName'

/**
 * Represents the AdministrativeRegion model in the database.
 */
export class AdministrativeRegionModel extends Model<AdministrativeRegionDto> implements AdministrativeRegionDto {
	declare id: Primitives<AdministrativeRegionId>
	declare name: Primitives<AdministrativeRegionName>

	/**
	 * Associates the AdministrativeRegion model with other models.
	 * @param {Sequelize['models']} models - The models object containing all initialized models.
	 */
	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.Region, { as: 'region', foreignKey: 'administrativeRegionId' }) // An Region can hava many states
	}

	/**
	 * Initializes the AdministrativeRegion model.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		AdministrativeRegionModel.init(
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
				}
			},
			{
				modelName: 'AdministrativeRegion',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
