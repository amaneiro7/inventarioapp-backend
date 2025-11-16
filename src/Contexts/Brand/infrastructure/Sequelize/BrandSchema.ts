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

export class BrandModel extends Model<Omit<BrandDto, 'categories'>> implements BrandDto {
	declare id: Primitives<BrandId>
	declare name: Primitives<BrandName>
	declare categories: CategoryDto[]

	// --- Association Mixins (provided by Sequelize) ---
	declare getCategories: BelongsToManyGetAssociationsMixin<CategoryModel>
	declare addCategories: BelongsToManyAddAssociationsMixin<CategoryModel, Primitives<CategoryId>>
	declare setCategories: BelongsToManySetAssociationsMixin<CategoryModel, Primitives<CategoryId>>
	declare removeCategories: BelongsToManyAddAssociationsMixin<CategoryModel, Primitives<CategoryId>>

	static associate(models: SequelizeModels): void {
		// A brand can be associated with many ModelSeries
		this.hasMany(models.Model, { as: 'model', foreignKey: 'brandId' })
		// A brand can be associated with many Devices
		this.hasMany(models.Device, { as: 'device', foreignKey: 'brandId' })
		// A brand belongs to many Categories through the 'category_brand' join table
		this.belongsToMany(models.Category, {
			as: 'categories',
			through: 'category_brand',
			foreignKey: 'brandId',
			otherKey: 'categoryId'
		})
	}

	static initialize(sequelize: Sequelize): void {
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
				//tableName: 'brands', // Explicitly define table name for clarity
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
