import { BrandId } from '../../../../Brand/domain/BrandId'

import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../ModelSeries/domain/Generic'
import { ModelSeries } from '../../../ModelSeries/domain/ModelSeries'
import { ModelSeriesDto } from '../../../ModelSeries/domain/ModelSeries.dto'
import { ModelSeriesId } from '../../../ModelSeries/domain/ModelSeriesId'
import { ModelSeriesName } from '../../../ModelSeries/domain/ModelSeriesName'
import { HasFingerPrintReader } from './HasFingerPrintReader'
import { KeyboardModelsParams, KeyboardModelsPrimitives } from './KeyboardModels.dto'
import { ModelKeyboardInputType } from './ModelKeyboardInputType'

export class KeyboardModels extends ModelSeries {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		private InputTypeId: ModelKeyboardInputType,
		private hasFingerPrintReader: HasFingerPrintReader
	) {
		super(id, name, categoryId, brandId, generic)
	}

	static create(params: KeyboardModelsParams): KeyboardModels {
		const id = String(ModelSeriesId.random())
		return new KeyboardModels(
			new ModelSeriesId(id),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new ModelKeyboardInputType(params.inputTypeId),
			new HasFingerPrintReader(params.hasFingerPrintReader)
		)
	}

	public static isKeyboardCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		const AcceptedKeyboardCategories: CategoryValues[] = [CategoryValues.KEYBOARD]
		return AcceptedKeyboardCategories.some(category => category === categoryId)
	}

	static fromPrimitives(primitives: ModelSeriesDto): KeyboardModels {
		if (!primitives.modelKeyboard) {
			throw new Error('Error al cargar la información de teclados')
		}
		return new KeyboardModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			new ModelKeyboardInputType(primitives.modelKeyboard.inputTypeId),
			new HasFingerPrintReader(primitives.modelKeyboard.hasFingerPrintReader)
		)
	}

	toPrimitives(): KeyboardModelsPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			categoryId: this.categoryIdValue,
			brandId: this.brandIdValue,
			generic: this.genericValue,
			inputTypeId: this.inputTypeValue,
			hasFingerPrintReader: this.hasFingerPrintReaderValue
		}
	}

	get inputTypeValue(): Primitives<ModelKeyboardInputType> {
		return this.InputTypeId.value
	}
	get hasFingerPrintReaderValue(): Primitives<HasFingerPrintReader> {
		return this.hasFingerPrintReader.value
	}

	updateHasFingerPrintReader(newValue: Primitives<HasFingerPrintReader>): void {
		this.hasFingerPrintReader = new HasFingerPrintReader(newValue)
	}
	updateInputType(newValue: Primitives<ModelKeyboardInputType>): void {
		this.InputTypeId = new ModelKeyboardInputType(newValue)
	}
}
