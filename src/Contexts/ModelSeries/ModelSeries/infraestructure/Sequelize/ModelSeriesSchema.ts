import {
	DataTypes,
	Model,
	type BelongsToManyAddAssociationsMixin,
	type BelongsToManyGetAssociationsMixin,
	type BelongsToManySetAssociationsMixin,
	type Sequelize
} from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../domain/ModelSeriesId'
import { type ModelSeriesName } from '../../domain/ModelSeriesName'
import { type CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { type Generic } from '../../domain/Generic'
import { type ModelSeriesDto } from '../../domain/ModelSeries.dto'
import { type BrandDto } from '../../../../Brand/domain/entity/Brand.dto'
import { type CategoryDto } from '../../../../Category/Category/domain/Category.dto'
import { type ComputerModelsDto } from '../../../ModelCharacteristics/Computers/Computer/domain/ComputerModels.dto'
import { type LaptopModelsDto } from '../../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels.dto'
import { type KeyboardModelsDto } from '../../../ModelCharacteristics/Keyboards/domain/KeyboardModels.dto'
import { type MonitorModelsDto } from '../../../ModelCharacteristics/Monitors/domain/MonitoModels.dto'
import { type PrinteModelsDto } from '../../../ModelCharacteristics/Printers/domain/ModelPrinters.dto'
import { type MouseModelsDto } from '../../../ModelCharacteristics/Mouses/domain/MouseModels.dto'
import { ProcessorDto } from '../../../../Features/Processor/Processor/domain/Processor.dto'
import { SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'
import { ProcessorId } from '../../../../Features/Processor/Processor/domain/ProcessorId'
import { ProcessorModel } from '../../../../Features/Processor/Processor/infrastructure/sequelize/ProcessorSchema'

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
				name: { type: DataTypes.STRING, allowNull: false, unique: true },
				categoryId: { type: DataTypes.STRING, allowNull: false },
				brandId: { type: DataTypes.UUID, allowNull: false },
				generic: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
			},
			{ modelName: 'Model', tableName: 'models', timestamps: true, underscored: true, sequelize }
		)
	}
}
