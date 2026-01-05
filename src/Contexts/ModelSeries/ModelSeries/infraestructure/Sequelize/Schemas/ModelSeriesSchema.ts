import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorModel } from '../../../../../Features/Processor/Processor/infrastructure/sequelize/ProcessorSchema'
import { type ModelSeriesId } from '../../../domain/valueObject/ModelSeriesId'
import { type ModelSeriesName } from '../../../domain/valueObject/ModelSeriesName'
import { type CategoryId } from '../../../../../Category/Category/domain/valueObject/CategoryId'
import { type ProcessorId } from '../../../../../Features/Processor/Processor/domain/ProcessorId'
import { type BrandId } from '../../../../../Brand/domain/valueObject/BrandId'
import { type Generic } from '../../../domain/valueObject/Generic'
import { type BrandDto } from '../../../../../Brand/domain/entity/Brand.dto'
import { type CategoryDto } from '../../../../../Category/Category/domain/entity/Category.dto'
import { type ModelSeriesDto } from '../../../domain/dto/ModelSeries.dto'
import { type ComputerModelsDto } from '../../../domain/dto/ComputerModels.dto'
import { type LaptopModelsDto } from '../../../domain/dto/LaptopsModels.dto'
import { type KeyboardModelsDto } from '../../../domain/dto/KeyboardModels.dto'
import { type MonitorModelsDto } from '../../../domain/dto/MonitoModels.dto'
import { type PrinteModelsDto } from '../../../domain/dto/ModelPrinters.dto'
import { type MouseModelsDto } from '../../../domain/dto/MouseModels.dto'
import { type ProcessorDto } from '../../../../../Features/Processor/Processor/domain/Processor.dto'
import { type SequelizeModels } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

/**
 * @description Sequelize model for the `ModelSeries` entity.
 */
export class ModelSeriesModel
	extends Model<
		Omit<
			ModelSeriesDto,
			| 'category'
			| 'brand'
			| 'modelComputer'
			| 'modelLaptop'
			| 'modelPrinter'
			| 'modelKeyboard'
			| 'modelMonitor'
			| 'modelMouse'
			| 'processors'
			| 'updatedAt'
			| 'createdAt'
		>
	>
	implements ModelSeriesDto
{
	declare updatedAt: Date
	declare createdAt: Date
	declare id: Primitives<ModelSeriesId>
	declare name: Primitives<ModelSeriesName>
	declare categoryId: Primitives<CategoryId>
	declare brandId: Primitives<BrandId>
	declare generic: Primitives<Generic>
	declare category: CategoryDto
	declare brand: BrandDto
	declare modelComputer: ComputerModelsDto | null
	declare modelLaptop: LaptopModelsDto | null
	declare modelPrinter: PrinteModelsDto | null
	declare modelKeyboard: KeyboardModelsDto | null
	declare modelMonitor: MonitorModelsDto | null
	declare modelMouse: MouseModelsDto | null
	declare processors: ProcessorDto[]

	// --- Association Mixins (provided by Sequelize) ---
	declare getProcessors: BelongsToManyGetAssociationsMixin<ProcessorModel>
	declare addProcessors: BelongsToManyAddAssociationsMixin<ProcessorModel, Primitives<ProcessorId>>
	declare setProcessors: BelongsToManySetAssociationsMixin<ProcessorModel, Primitives<ProcessorId>>
	declare removeProcessors: BelongsToManyAddAssociationsMixin<ProcessorModel, Primitives<ProcessorId>>

	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
		this.belongsTo(models.Brand, { as: 'brand', foreignKey: 'brandId' })
		this.hasMany(models.Device, { as: 'device', foreignKey: 'modelId' })
		this.hasOne(models.ModelComputer, { as: 'modelComputer', foreignKey: 'modelSeriesId' })
		this.hasOne(models.ModelLaptop, { as: 'modelLaptop', foreignKey: 'modelSeriesId' })
		this.hasOne(models.ModelMonitor, { as: 'modelMonitor', foreignKey: 'modelSeriesId' })
		this.hasOne(models.ModelPrinter, { as: 'modelPrinter', foreignKey: 'modelSeriesId' })
		this.hasOne(models.ModelKeyboard, { as: 'modelKeyboard', foreignKey: 'modelSeriesId' })
		this.hasOne(models.ModelMouse, { as: 'modelMouse', foreignKey: 'modelSeriesId' })
		this.belongsToMany(models.Processor, {
			as: 'processors',
			through: 'model_processor',
			foreignKey: 'modelId',
			otherKey: 'processorId'
		})
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false },
				categoryId: { type: DataTypes.STRING, allowNull: false },
				brandId: { type: DataTypes.UUID, allowNull: false },
				generic: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
			},
			{
				modelName: 'Model',
				tableName: 'models',
				timestamps: true,
				underscored: true,
				sequelize,
				indexes: [
					{ unique: true, fields: ['name', 'brand_id'], name: 'unique_model_name_per_brand' },
					{ fields: ['category_id'] }, // Optimiza filtros por categoría
					{ fields: ['brand_id'] } // Optimiza JOINs con la tabla Brand
				]
			}
		)
	}
}
