import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type BrandId } from '../../domain/BrandId'
import { type BrandName } from '../../domain/BrandName'
import { type BrandDto } from '../../domain/Brand.dto'
import { type SequelizeModels } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

/**
 * @class BrandModel
 * @extends Model<BrandDto>
 * @implements {BrandDto}
 * @description Sequelize model for the Brand entity. Defines the table structure and associations
 * for brands in the database.
 */
export class BrandModel extends Model<BrandDto> implements BrandDto {
	/**
	 * @property {Primitives<BrandId>} id
	 * @description The unique identifier of the brand (UUID).
	 */
	declare id: Primitives<BrandId>
	/**
	 * @property {Primitives<BrandName>} name
	 * @description The name of the brand. Must be unique.
	 */
	declare name: Primitives<BrandName>

	/**
	 * @static
	 * @method associate
	 * @description Defines associations with other Sequelize models.
	 * A Brand can have many Model Series and many Devices.
	 * @param {SequelizeModels} models - An object containing all initialized Sequelize models.
	 * @returns {Promise<void>}
	 */
	static async associate(models: SequelizeModels): Promise<void> {
		this.hasMany(models.Model, { as: 'model', foreignKey: 'brandId' }) // A brand can have many model series
		this.hasMany(models.Device, { as: 'device', foreignKey: 'brandId' }) // A brand can have many device
	}

	/**
	 * @static
	 * @method initialize
	 * @description Initializes the BrandModel with its schema definition.
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 * @returns {Promise<void>}
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		BrandModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				name: {
					allowNull: false,
					type: DataTypes.STRING,
					unique: true
				}
			},
			{
				modelName: 'Brand',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
