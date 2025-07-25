import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../../ModelSeries/domain/ModelSeriesId'
import { type CartridgeModel } from '../../domain/CartridgeModel'
import { type CategoryId } from '../../../../../Category/Category/domain/CategoryId'
import { type PrinteModelsDto } from '../../domain/ModelPrinters.dto'

interface ModelPrinterCreationAttributes extends PrinteModelsDto {
	id: Primitives<ModelSeriesId>
	categoryId: Primitives<CategoryId>
	modelSeriesId: Primitives<ModelSeriesId>
}

export class ModelPrinterModel extends Model<ModelPrinterCreationAttributes> implements PrinteModelsDto {
	declare id: Primitives<ModelSeriesId>
	declare cartridgeModel: Primitives<CartridgeModel>
	declare modelSeriesId: Primitives<ModelSeriesId>
	declare categoryId: Primitives<CategoryId>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Model, {
			as: 'model',
			foreignKey: 'modelSeriesId'
		}) // A Laptop model belongs to a model
		this.belongsTo(models.Category, { as: 'category' }) // A computer model belongs to a category
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		ModelPrinterModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				modelSeriesId: {
					type: DataTypes.UUID,
					unique: true,
					allowNull: false
				},
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						isIn: {
							args: [[CategoryValues.LASERPRINTER, CategoryValues.INKPRINTER]],
							msg: 'Solo puede pertenecer a la categoria de Impresoras Laser e Impresoras Tinta'
						}
					}
				},
				cartridgeModel: {
					type: DataTypes.STRING,
					allowNull: false
				}
			},
			{
				modelName: 'ModelPrinter',
				underscored: true,
				sequelize
			}
		)
	}
}
