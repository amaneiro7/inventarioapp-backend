import { ModelSeries } from './ModelSeries'
import { ModelSeriesId } from '../valueObject/ModelSeriesId'
import { ModelSeriesName } from '../valueObject/ModelSeriesName'
import { CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { Generic } from '../valueObject/Generic'
import { CartridgeModel } from '../valueObject/CartridgeModel'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { ModelSeriesCreatedDomainEvent } from '../event/ModelSeriesCreatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PrinteModelsParams, type PrinteModelsPrimitives } from '../dto/ModelPrinters.dto'
import { type ModelSeriesDto } from '../dto/ModelSeries.dto'
import { type ModelsFields } from '../dto/ModelsFields'
import { ModelSeriesCategoryMismatchError } from '../errors/ModelSeriesCategoryMismatchError'

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
		private cartridgeModel: CartridgeModel
	) {
		super(id, name, categoryId, brandId, generic)
	}

	static create(params: PrinteModelsParams): ModelPrinters {
		if (!this.isPrinterCategory({ categoryId: params.categoryId })) {
			throw new ModelSeriesCategoryMismatchError('Impresora')
		}
		const model = new ModelPrinters(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new CartridgeModel(params.cartridgeModel)
		)
		model.record(
			new ModelSeriesCreatedDomainEvent({
				aggregateId: model.idValue,
				name: model.nameValue,
				categoryId: model.categoryValue,
				brandId: model.brandValue
			})
		)
		return model
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
			new CartridgeModel(primitives.modelPrinter.cartridgeModel)
		)
	}

	toPrimitives(): PrinteModelsPrimitives {
		return {
			...super.toPrimitives(),
			cartridgeModel: this.cartridgeModelValue
		}
	}

	update(params: Partial<PrinteModelsParams>): ModelsFields {
		const changes: ModelsFields = []

		if (params.cartridgeModel !== undefined && this.cartridgeModelValue !== params.cartridgeModel) {
			changes.push({
				field: 'cartridgeModel',
				oldValue: this.cartridgeModelValue,
				newValue: params.cartridgeModel
			})
			this.updateCartridgeModel(params.cartridgeModel)
		}

		return changes
	}

	get cartridgeModelValue(): Primitives<CartridgeModel> {
		return this.cartridgeModel.value
	}

	updateCartridgeModel(newValue: Primitives<CartridgeModel>): void {
		this.cartridgeModel = new CartridgeModel(newValue)
	}
}
