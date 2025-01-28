import { BrandId } from '../../../../Brand/domain/BrandId'

import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../ModelSeries/domain/Generic'
import { ModelSeries } from '../../../ModelSeries/domain/ModelSeries'
import { ModelSeriesId } from '../../../ModelSeries/domain/ModelSeriesId'
import { ModelSeriesName } from '../../../ModelSeries/domain/ModelSeriesName'
import { CartridgeModel } from './CartridgeModel'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import {
	CategoryDefaultData,
	type CategoryValues
} from '../../../../Category/Category/domain/CategoryDefaultData'
import {
	type PrinteModelsParams,
	type PrinteModelsPrimitives
} from './ModelPrinters.dto'
import { type ModelSeriesDto } from '../../../ModelSeries/domain/ModelSeries.dto'

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
			throw new Error(
				'Invalid category for printer model The category must be "printer"'
			)
		}
		const id = ModelSeriesId.random().value
		return new ModelPrinters(
			new ModelSeriesId(id),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new CartridgeModel(params.cartridgeModel)
		)
	}

	public static isPrinterCategory({
		categoryId
	}: {
		categoryId: Primitives<CategoryId>
	}): boolean {
		const AcceptedComputerCategories: CategoryValues[] = [
			'Impresoras Laser',
			'Impresoras Tinta'
		]
		return AcceptedComputerCategories.includes(
			CategoryDefaultData[categoryId]
		)
	}

	static fromPrimitives(primitives: ModelSeriesDto): ModelPrinters {
		if (!primitives.modelPrinter) {
			throw new Error('Error al cargar información de impresoras')
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
			id: this.idValue,
			name: this.nameValue,
			categoryId: this.categoryIdValue,
			brandId: this.brandIdValue,
			generic: this.genericValue,
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
