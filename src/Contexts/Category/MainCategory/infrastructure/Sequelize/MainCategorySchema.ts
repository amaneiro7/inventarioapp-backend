import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MainCategoryDto } from '../../domain/MainCategory.dto'
import { type MainCategoryId } from '../../domain/MainCategoryId'
import { type MainCategoryName } from '../../domain/MainCategoryName'

export class MainCategoryModel
	extends Model<MainCategoryDto>
	implements MainCategoryDto
{
	declare id: Primitives<MainCategoryId>
	declare name: Primitives<MainCategoryName>

	public static async createModel(sequelize: Sequelize) {
		await this.initialize(sequelize)
		await this.associate(sequelize.models)
	}

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.Category, {
			as: 'category',
			foreignKey: 'mainCategoryId'
		}) // A main category can have many categories
	}

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
