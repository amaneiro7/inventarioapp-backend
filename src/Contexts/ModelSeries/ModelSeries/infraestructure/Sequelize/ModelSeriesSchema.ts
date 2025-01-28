import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../domain/ModelSeriesId'
import { type ModelSeriesName } from '../../domain/ModelSeriesName'
import { type CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type BrandId } from '../../../../Brand/domain/BrandId'
import { type Generic } from '../../domain/Generic'
import { type ModelSeriesDto } from '../../domain/ModelSeries.dto'
import { type BrandDto } from '../../../../Brand/domain/Brand.dto'
import { type CategoryDto } from '../../../../Category/Category/domain/Category.dto'
import { type ComputerModelsDto } from '../../../ModelCharacteristics/Computers/Computer/domain/ComputerModels.dto'
import { type LaptopModelsDto } from '../../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels.dto'
import { type KeyboardModelsDto } from '../../../ModelCharacteristics/Keyboards/domain/KeyboardModels.dto'
import { type MonitorModelsDto } from '../../../ModelCharacteristics/Monitors/domain/MonitoModels.dto'
import { type PrinteModelsDto } from '../../../ModelCharacteristics/Printers/domain/ModelPrinters.dto'

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
	// join
	declare category: CategoryDto
	declare brand: BrandDto
	declare modelComputer: ComputerModelsDto | null
	declare modelLaptop: LaptopModelsDto | null
	declare modelPrinter: PrinteModelsDto | null
	declare modelKeyboard: KeyboardModelsDto | null
	declare modelMonitor: MonitorModelsDto | null

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Category, {
			as: 'category',
			foreignKey: 'categoryId'
		}) // A model series belongs to a category
		this.belongsTo(models.Brand, { as: 'brand', foreignKey: 'brandId' }) // A model series belongs to a brand
		this.hasMany(models.Device, { as: 'device', foreignKey: 'modelId' }) // A model series can have many devices
		this.hasOne(models.ModelComputer, {
			as: 'modelComputer',
			foreignKey: 'modelSeriesId'
		}) // A model series has one computer model (if it is a computer)
		this.hasOne(models.ModelLaptop, {
			as: 'modelLaptop',
			foreignKey: 'modelSeriesId'
		}) // A model series has one laptop model (if it is a laptop)
		this.hasOne(models.ModelMonitor, {
			as: 'modelMonitor',
			foreignKey: 'modelSeriesId'
		}) // A model series has one monitor model (if it is a monitor)
		this.hasOne(models.ModelPrinter, {
			as: 'modelPrinter',
			foreignKey: 'modelSeriesId'
		}) // A model series has one printer model (if it is a printer)
		this.hasOne(models.ModelKeyboard, {
			as: 'modelKeyboard',
			foreignKey: 'modelSeriesId'
		}) // A model series has one keyboard model (if it is a keyboard)
		this.hasOne(models.ModelMouse, {
			as: 'modelMouse',
			foreignKey: 'modelSeriesId'
		}) // A model series has one keyboard model (if it is a keyboard)
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		ModelSeriesModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true
				},
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false
				},
				brandId: {
					type: DataTypes.UUID,
					allowNull: false
				},
				generic: {
					type: DataTypes.BOOLEAN,
					allowNull: false,
					defaultValue: false
				}
			},
			{
				modelName: 'Model',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
