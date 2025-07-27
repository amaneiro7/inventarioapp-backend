import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type BrandId } from '../../domain/BrandId'
import { type BrandName } from '../../domain/BrandName'
import { type BrandDto } from '../../domain/Brand.dto'
import { type SequelizeModels } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type CategoryDto } from '../../../Category/Category/domain/Category.dto'
import { type CategoryModel } from '../../../Category/Category/infrastructure/Sequelize/CategorySchema'
import { type CategoryId } from '../../../Category/Category/domain/CategoryId'

/**
 * @class BrandModel
 * @extends Model<BrandDto>
 * @implements {BrandDto}
 * @description Sequelize model for the Brand entity. Defines the table structure and associations
 * for brands in the database.
 */
export class BrandModel extends Model<Omit<BrandDto, 'categories'>> implements BrandDto {
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
	declare categories: CategoryDto[]

	// Métodos de asociación
	declare getCategories: BelongsToManyGetAssociationsMixin<CategoryModel>
	declare addCategories: BelongsToManyAddAssociationsMixin<CategoryModel, Primitives<CategoryId>>
	declare setCategories: BelongsToManySetAssociationsMixin<CategoryModel, Primitives<CategoryId>>
	declare removeCategories: BelongsToManyAddAssociationsMixin<CategoryModel, Primitives<CategoryId>>

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
		this.belongsToMany(models.Category, {
			as: 'categories',
			through: 'category_brand',
			foreignKey: 'brandId',
			otherKey: 'categoryId'
		})
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
