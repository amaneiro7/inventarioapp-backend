import { type BrandId } from '../../../Brand/domain/BrandId'
import { type CategoryId } from '../../../Category/Category/domain/CategoryId'
import { type Generic } from './Generic'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from './ModelSeriesId'
import { type ModelSeriesName } from './ModelSeriesName'
import { type CategoryDto } from '../../../Category/Category/domain/Category.dto'
import { type BrandDto } from '../../../Brand/domain/Brand.dto'
import { type ComputerModelsDto } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerModels.dto'
import { type LaptopModelsDto } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels.dto'
import { type PrinteModelsDto } from '../../ModelCharacteristics/Printers/domain/ModelPrinters.dto'
import { type KeyboardModelsDto } from '../../ModelCharacteristics/Keyboards/domain/KeyboardModels.dto'
import { type MonitorModelsDto } from '../../ModelCharacteristics/Monitors/domain/MonitoModels.dto'
import { type MouseModelsDto } from '../../ModelCharacteristics/Mouses/domain/MouseModels.dto'

export interface ModelSeries {
	id: Primitives<ModelSeriesId>
	name: Primitives<ModelSeriesName>
	categoryId: Primitives<CategoryId>
	brandId: Primitives<BrandId>
	generic: Primitives<Generic>
}
export type ModelSeriesParams = Omit<ModelSeries, 'id'>

export type ModelSeriesPrimitives = ModelSeries

export type ModelSeriesDto = ModelSeries & {
	category: CategoryDto
	brand: BrandDto
	modelComputer: ComputerModelsDto | null
	modelLaptop: LaptopModelsDto | null
	modelPrinter: PrinteModelsDto | null
	modelKeyboard: KeyboardModelsDto | null
	modelMouse: MouseModelsDto | null
	modelMonitor: MonitorModelsDto | null
	updatedAt: Date
	createdAt: Date
}
