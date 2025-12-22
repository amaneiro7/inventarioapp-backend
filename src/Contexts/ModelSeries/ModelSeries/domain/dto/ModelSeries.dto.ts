import { type BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { type CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { type Generic } from '../valueObject/Generic'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../valueObject/ModelSeriesId'
import { type ModelSeriesName } from '../valueObject/ModelSeriesName'
import { type CategoryDto } from '../../../../Category/Category/domain/entity/Category.dto'
import { type BrandDto } from '../../../../Brand/domain/entity/Brand.dto'
import { type ComputerModelsDto } from './ComputerModels.dto'
import { type LaptopModelsDto } from './LaptopsModels.dto'
import { type PrinteModelsDto } from './ModelPrinters.dto'
import { type KeyboardModelsDto } from './KeyboardModels.dto'
import { type MonitorModelsDto } from './MonitoModels.dto'
import { type MouseModelsDto } from './MouseModels.dto'
import { type ProcessorDto } from '../../../../Features/Processor/Processor/domain/Processor.dto'
import { type ProcessorId } from '../../../../Features/Processor/Processor/domain/ProcessorId'

/**
 * @interface ModelSeries
 * @description Defines the core properties of a ModelSeries entity.
 */
export interface ModelSeries {
	/**
	 * @property {Primitives<ModelSeriesId>} id The unique identifier of the models.
	 */
	id: Primitives<ModelSeriesId>
	/**
	 * @property {Primitives<ModelSeriesName>} name The name of the brand.
	 */
	name: Primitives<ModelSeriesName>
	categoryId: Primitives<CategoryId>
	brandId: Primitives<BrandId>
	generic: Primitives<Generic>
}

export type ModelSeriesField = keyof Omit<ModelSeriesPrimitives, 'id'>

/**
 * @type ModelSeriesParams
 * @description Represents the parameters required to create a new ModelSeries.
 */
export type ModelSeriesParams = Omit<
	ModelSeries & {
		/**
		 * @property {Primitives<ProcessorId>[]} processors An array of processor IDs associated with the model.
		 */
		processors: Primitives<ProcessorId>[]
	},
	'id'
>

/**
 * @type ModelSeriesPrimitives
 * @description Represents the primitive, serializable state of a ModelSeries entity.
 */
export type ModelSeriesPrimitives = ModelSeries & {
	/**
	 * @property {Primitives<ProcessorId>[]} processors An array of processor IDs associated with the model.
	 */
	processors: Primitives<ProcessorId>[]
}

/**
 * @type ModelSeriesDto
 * @description Represents a Data Transfer Object (DTO) for a ModelSeries, including all its related data.
 */
export type ModelSeriesDto = ModelSeries & {
	category: CategoryDto
	brand: BrandDto
	modelComputer: ComputerModelsDto | null
	modelLaptop: LaptopModelsDto | null
	modelPrinter: PrinteModelsDto | null
	modelKeyboard: KeyboardModelsDto | null
	modelMouse: MouseModelsDto | null
	modelMonitor: MonitorModelsDto | null
	processors: ProcessorDto[]
	updatedAt: Date
	createdAt: Date
}
