import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type MainCategoryDto } from '../../domain/MainCategory.dto'
import { type MainCategoryId } from '../../domain/MainCategoryId'
import { type MainCategoryName } from '../../domain/MainCategoryName'

/**
 * Sequelize model for the MainCategory entity.
 *
 * @export
 * @class MainCategoryModel
 * @extends {Model<MainCategoryDto>}
 * @implements {MainCategoryDto}
 */
export class MainCategoryModel extends Model<MainCategoryDto> implements MainCategoryDto {
	declare id: Primitives<MainCategoryId>
	declare name: Primitives<MainCategoryName>

	/**
	 * Establishes associations with other models.
	 *
	 * @static
	 * @param {SequelizeModels} models - The available Sequelize models.
	 * @returns {Promise<void>}
	 */
	static async associate(models: SequelizeModels): Promise<void> {
		// A main category can have many categories
		this.hasMany(models.Category, {
			as: 'category',
			foreignKey: 'mainCategoryId'
		})
	}

	/**
	 * Initializes the MainCategory model.
	 *
	 * @static
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 * @returns {Promise<void>}
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		MainCategoryModel.init(
			{
				id: {
					type: DataTypes.STRING,
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
				modelName: 'MainCategory',
				underscored: true,
				timestamps: false,
				sequelize
			}
		)
	}
}
