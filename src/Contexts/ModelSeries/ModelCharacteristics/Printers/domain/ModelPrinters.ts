import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../ModelSeries/domain/Generic'
import { ModelSeries } from '../../../ModelSeries/domain/entity/ModelSeries'
import { ModelSeriesId } from '../../../ModelSeries/domain/ModelSeriesId'
import { ModelSeriesName } from '../../../ModelSeries/domain/ModelSeriesName'
import { CartridgeModel } from './CartridgeModel'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type PrinteModelsParams, type PrinteModelsPrimitives } from './ModelPrinters.dto'
import { type ModelSeriesDto } from '../../../ModelSeries/domain/entity/ModelSeries.dto'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { ProcessorId } from '../../../../Features/Processor/Processor/domain/ProcessorId'

/**
 * @description Represents a printer model, extending the base ModelSeries class.
 */
export class ModelPrinters extends ModelSeries {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		processors: ProcessorId[],
		private cartridgeModel: CartridgeModel
	) {
		super(id, name, categoryId, brandId, generic, processors)
	}

	static create(params: PrinteModelsParams): ModelPrinters {
		if (!this.isPrinterCategory({ categoryId: params.categoryId })) {
			throw new Error('La categoría debe ser de tipo impresora.')
		}
		return new ModelPrinters(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			this.addProcessorIds({ categoryId: params.categoryId, processorIds: params.processors }),
			new CartridgeModel(params.cartridgeModel)
		)
	}

	static isPrinterCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		const acceptedCategories: string[] = [CategoryValues.LASERPRINTER, CategoryValues.INKPRINTER]
		return acceptedCategories.includes(categoryId)
	}

	static fromPrimitives(primitives: ModelSeriesDto): ModelPrinters {
		if (!primitives.modelPrinter) {
			throw new Error('Printer model data is missing')
		}
		return new ModelPrinters(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			primitives.processors.map(processor => new ProcessorId(processor.id)),
			new CartridgeModel(primitives.modelPrinter.cartridgeModel)
		)
	}

	toPrimitives(): PrinteModelsPrimitives {
		return {
			...super.toPrimitives(),
			cartridgeModel: this.cartridgeModelValue
		}
	}

	get cartridgeModelValue(): Primitives<CartridgeModel> {
		return this.cartridgeModel.value
	}

	updateCartridgeModel(newValue: Primitives<CartridgeModel>): void {
		this.cartridgeModel = new CartridgeModel(newValue)
	}
}
