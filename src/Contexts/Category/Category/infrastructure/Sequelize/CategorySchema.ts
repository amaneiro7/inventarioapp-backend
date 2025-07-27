import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type MainCategoryDto } from '../../../MainCategory/domain/MainCategory.dto'
import { type MainCategoryId } from '../../../MainCategory/domain/MainCategoryId'
import { type CategoryDto } from '../../domain/Category.dto'
import { type CategoryId } from '../../domain/CategoryId'
import { type CategoryName } from '../../domain/CategoryName'

/**
 * Sequelize model for the Category entity.
 *
 * @export
 * @class CategoryModel
 * @extends {Model<Omit<CategoryDto, 'mainCategory'>>}
 * @implements {CategoryDto}
 */
export class CategoryModel extends Model<Omit<CategoryDto, 'mainCategory'>> implements CategoryDto {
	declare id: Primitives<CategoryId>
	declare name: Primitives<CategoryName>
	declare mainCategoryId: Primitives<MainCategoryId>
	declare mainCategory: MainCategoryDto

	/**
	 * Establishes associations with other models.
	 *
	 * @static
	 * @param {SequelizeModels} models - The available Sequelize models.
	 * @returns {Promise<void>}
	 */
	static async associate(models: SequelizeModels): Promise<void> {
		this.belongsToMany(models.Brand, {
			as: 'brands',
			through: 'category_brand',
			foreignKey: 'categoryId',
			otherKey: 'brandId'
		})
		// A category belongs to one main category
		this.belongsTo(models.MainCategory, {
			as: 'mainCategory',
			foreignKey: 'mainCategoryId'
		})
		// A category can have many model series
		this.hasMany(models.Model, { as: 'model', foreignKey: 'categoryId' })
		// A category can have many devices
		this.hasMany(models.Device, { as: 'device', foreignKey: 'categoryId' })
		// A category can have many hard drives
		this.hasMany(models.DeviceHardDrive, {
			as: 'deviceHardDrive',
			foreignKey: 'categoryId'
		})
		// A category can have many computers
		this.hasMany(models.DeviceComputer, {
			as: 'deviceComputer',
			foreignKey: 'categoryId'
		})
		// A category can have many multifunctional printers
		this.hasMany(models.DeviceMFP, {
			as: 'deviceMFP',
			foreignKey: 'categoryId'
		})
		// A category can have many computer models
		this.hasMany(models.ModelComputer, {
			as: 'modelComputer',
			foreignKey: 'categoryId'
		})
		// A category can have many laptop models
		this.hasMany(models.ModelLaptop, {
			as: 'modelLaptop',
			foreignKey: 'categoryId'
		})
		// A category can have many monitor models
		this.hasMany(models.ModelMonitor, {
			as: 'modelMonitor',
			foreignKey: 'categoryId'
		})
		// A category can have many printer models
		this.hasMany(models.ModelPrinter, {
			as: 'modelPrinter',
			foreignKey: 'categoryId'
		})
		// A category can have many keyboard models
		this.hasMany(models.ModelKeyboard, {
			as: 'modelKeyboard',
			foreignKey: 'categoryId'
		})
		// A category can have many mouse models
		this.hasMany(models.ModelMouse, {
			as: 'modelMouse',
			foreignKey: 'categoryId'
		})
	}

	/**
	 * Initializes the Category model.
	 *
	 * @static
	 * @param {Sequelize} sequelize - The Sequelize instance.
	 * @returns {Promise<void>}
	 */
	static async initialize(sequelize: Sequelize): Promise<void> {
		CategoryModel.init(
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
				},
				mainCategoryId: {
					allowNull: false,
					type: DataTypes.STRING
				}
			},
			{
				modelName: 'Category',
				underscored: true,
				timestamps: false,
				sequelize
			}
		)
	}
}
