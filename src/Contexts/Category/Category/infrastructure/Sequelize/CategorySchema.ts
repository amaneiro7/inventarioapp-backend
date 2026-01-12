import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { type MainCategoryDto } from '../../../MainCategory/domain/entity/MainCategory.dto'
import { type MainCategoryId } from '../../../MainCategory/domain/valueObject/MainCategoryId'
import { type CategoryDto } from '../../domain/entity/Category.dto'
import { type CategoryId } from '../../domain/valueObject/CategoryId'
import { type CategoryName } from '../../domain/valueObject/CategoryName'

/**
 * @class CategoryModel
 * @extends Model<Omit<CategoryDto, 'mainCategory'>>
 * @implements {CategoryDto}
 * @description Sequelize model for the `Category` entity. It defines the table structure,
 * columns, and associations for categories in the database.
 */
export class CategoryModel extends Model<Omit<CategoryDto, 'mainCategory'>> implements CategoryDto {
	declare id: Primitives<CategoryId>
	declare name: Primitives<CategoryName>
	declare mainCategoryId: Primitives<MainCategoryId>
	declare mainCategory: MainCategoryDto

	/**
	 * @static
	 * @method associate
	 * @description Defines the relationships between the `CategoryModel` and other models.
	 * @param {SequelizeModels} models An object containing all initialized Sequelize models.
	 */
	static associate(models: SequelizeModels): void {
		// A category belongs to one main category
		this.belongsTo(models.MainCategory, { as: 'mainCategory', foreignKey: 'mainCategoryId' })
		// A category can be associated with many brands
		this.belongsToMany(models.Brand, {
			as: 'brands',
			through: 'category_brand',
			foreignKey: 'categoryId',
			otherKey: 'brandId'
		})
		// A category can have many model series, devices, and device-specific sub-tables
		this.hasMany(models.Model, { as: 'model', foreignKey: 'categoryId' })
		this.hasMany(models.Device, { as: 'device', foreignKey: 'categoryId' })
		this.hasMany(models.DeviceHardDrive, { as: 'deviceHardDrive', foreignKey: 'categoryId' })
		this.hasMany(models.DeviceComputer, { as: 'deviceComputer', foreignKey: 'categoryId' })
		this.hasMany(models.DevicePrinter, { as: 'DevicePrinter', foreignKey: 'categoryId' })
		// A category can have many model-specific sub-tables
		this.hasMany(models.ModelComputer, { as: 'modelComputer', foreignKey: 'categoryId' })
		this.hasMany(models.ModelLaptop, { as: 'modelLaptop', foreignKey: 'categoryId' })
		this.hasMany(models.ModelMonitor, { as: 'modelMonitor', foreignKey: 'categoryId' })
		this.hasMany(models.ModelPrinter, { as: 'modelPrinter', foreignKey: 'categoryId' })
		this.hasMany(models.ModelKeyboard, { as: 'modelKeyboard', foreignKey: 'categoryId' })
		this.hasMany(models.ModelMouse, { as: 'modelMouse', foreignKey: 'categoryId' })
	}

	/**
	 * @static
	 * @method initialize
	 * @description Initializes the `CategoryModel` with its schema definition and configuration.
	 * @param {Sequelize} sequelize The Sequelize instance.
	 */
	static initialize(sequelize: Sequelize): void {
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
					type: DataTypes.STRING,
					field: 'main_category_id'
				}
			},
			{
				modelName: 'Category',
				tableName: 'categories',
				underscored: true,
				timestamps: false,
				sequelize,
				indexes: [
					{ fields: ['mainCategoryId'], name: 'category_main_category_id_idx' } // New index
				]
			}
		)
	}
}
