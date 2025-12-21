import { DataTypes, Model, type Sequelize } from 'sequelize'
import { CategoryValues } from '../../../../../Category/Category/domain/CategoryOptions'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../../../ModelSeries/domain/valueObject/ModelSeriesId'
import { type CategoryId } from '../../../../../Category/Category/domain/CategoryId'
import { type PrinteModelsDto } from '../../../domain/dto/ModelPrinters.dto'
import { type CartridgeModel } from '../../../domain/valueObject/CartridgeModel'

interface ModelPrinterCreationAttributes extends PrinteModelsDto {
	id: Primitives<ModelSeriesId>
	categoryId: Primitives<CategoryId>
	modelSeriesId: Primitives<ModelSeriesId>
}

/**
 * @description Sequelize model for the `ModelPrinter` entity.
 */
export class ModelPrinterModel extends Model<ModelPrinterCreationAttributes> implements PrinteModelsDto {
	declare id: Primitives<ModelSeriesId>
	declare cartridgeModel: Primitives<CartridgeModel>
	declare modelSeriesId: Primitives<ModelSeriesId>
	declare categoryId: Primitives<CategoryId>

	static associate(models: Sequelize['models']): void {
		this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelSeriesId' })
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				modelSeriesId: { type: DataTypes.UUID, unique: true, allowNull: false },
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: { isIn: [[CategoryValues.LASERPRINTER, CategoryValues.INKPRINTER]] }
				},
				cartridgeModel: { type: DataTypes.STRING, allowNull: false }
			},
			{ modelName: 'ModelPrinter', tableName: 'model_printers', underscored: true, sequelize }
		)
	}
}
