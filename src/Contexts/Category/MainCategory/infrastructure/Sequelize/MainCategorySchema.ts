import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type MainCategoryDto } from '../../domain/MainCategory.dto'
import { type MainCategoryId } from '../../domain/MainCategoryId'
import { type MainCategoryName } from '../../domain/MainCategoryName'

/**
 * @class MainCategoryModel
 * @extends Model<MainCategoryDto>
 * @implements {MainCategoryDto}
 * @description Sequelize model for the `MainCategory` entity. It defines the table structure,
 * columns, and associations for main categories in the database.
 */
export class MainCategoryModel extends Model<MainCategoryDto> implements MainCategoryDto {
	/**
	 * @property {Primitives<MainCategoryId>} id The primary key, a string representing the main category's unique identifier.
	 */
	declare id: Primitives<MainCategoryId>
	/**
	 * @property {Primitives<MainCategoryName>} name The name of the main category. Must be unique.
	 */
	declare name: Primitives<MainCategoryName>

	/**
	 * @static
	 * @method associate
	 * @description Defines the relationship between the `MainCategoryModel` and the `CategoryModel`.
	 * @param {SequelizeModels} models An object containing all initialized Sequelize models.
	 */
	static associate(models: SequelizeModels): void {
		// A main category can have many sub-categories
		this.hasMany(models.Category, {
			as: 'category',
			foreignKey: 'mainCategoryId'
		})
	}

	/**
	 * @static
	 * @method initialize
	 * @description Initializes the `MainCategoryModel` with its schema definition and configuration.
	 * @param {Sequelize} sequelize The Sequelize instance.
	 */
	static initialize(sequelize: Sequelize): void {
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
				tableName: 'main_categories', // Explicitly define table name
				underscored: true,
				timestamps: false,
				sequelize
			}
		)
	}
}
