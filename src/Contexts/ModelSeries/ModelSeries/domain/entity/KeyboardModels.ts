import { ModelSeries } from './ModelSeries'
import { ModelSeriesId } from '../valueObject/ModelSeriesId'
import { ModelSeriesName } from '../valueObject/ModelSeriesName'
import { CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { Generic } from '../valueObject/Generic'
import { InputTypeId } from '../../../InputType/domain/valueObject/InputTypeId'
import { HasFingerPrintReader } from '../valueObject/HasFingerPrintReader'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { ModelSeriesCreatedDomainEvent } from '../event/ModelSeriesCreatedDomainEvent'
import { type ModelSeriesDto } from '../dto/ModelSeries.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type KeyboardModelsParams, type KeyboardModelsPrimitives } from '../dto/KeyboardModels.dto'
import { type ModelsFields } from '../dto/ModelsFields'
import { ModelSeriesCategoryMismatchError } from '../errors/ModelSeriesCategoryMismatchError'

/**
 * @description Represents a keyboard model, extending the base ModelSeries class.
 */
export class KeyboardModels extends ModelSeries {
	constructor(
		id: ModelSeriesId,
		name: ModelSeriesName,
		categoryId: CategoryId,
		brandId: BrandId,
		generic: Generic,
		private InputTypeId: InputTypeId,
		private hasFingerPrintReader: HasFingerPrintReader
	) {
		super(id, name, categoryId, brandId, generic)
	}

	static create(params: KeyboardModelsParams): KeyboardModels {
		if (!this.isKeyboardCategory({ categoryId: params.categoryId })) {
			throw new ModelSeriesCategoryMismatchError('Teclado')
		}
		const model = new KeyboardModels(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new InputTypeId(params.inputTypeId),
			new HasFingerPrintReader(params.hasFingerPrintReader)
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

	static isKeyboardCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		return categoryId === CategoryValues.KEYBOARD
	}

	static fromPrimitives(primitives: ModelSeriesDto): KeyboardModels {
		if (!primitives.modelKeyboard) {
			throw new Error('Keyboard model data is missing')
		}
		return new KeyboardModels(
			new ModelSeriesId(primitives.id),
			new ModelSeriesName(primitives.name),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new Generic(primitives.generic),
			new InputTypeId(primitives.modelKeyboard.inputTypeId),
			new HasFingerPrintReader(primitives.modelKeyboard.hasFingerPrintReader)
		)
	}

	toPrimitives(): KeyboardModelsPrimitives {
		return {
			...super.toPrimitives(),
			inputTypeId: this.inputTypeValue,
			hasFingerPrintReader: this.hasFingerPrintReaderValue
		}
	}

	update(params: Partial<KeyboardModelsParams>): ModelsFields {
		const changes: ModelsFields = []

		if (params.inputTypeId !== undefined && this.inputTypeValue !== params.inputTypeId) {
			changes.push({
				field: 'inputTypeId',
				oldValue: this.inputTypeValue,
				newValue: params.inputTypeId
			})
			this.updateInputType(params.inputTypeId)
		}

		if (
			params.hasFingerPrintReader !== undefined &&
			this.hasFingerPrintReaderValue !== params.hasFingerPrintReader
		) {
			this.updateHasFingerPrintReader(params.hasFingerPrintReader)
			changes.push({
				field: 'hasFingerPrintReader',
				oldValue: this.hasFingerPrintReaderValue,
				newValue: params.hasFingerPrintReader
			})
		}

		return changes
	}

	get inputTypeValue(): Primitives<InputTypeId> {
		return this.InputTypeId.value
	}

	get hasFingerPrintReaderValue(): Primitives<HasFingerPrintReader> {
		return this.hasFingerPrintReader.value
	}

	updateHasFingerPrintReader(newValue: Primitives<HasFingerPrintReader>): void {
		this.hasFingerPrintReader = new HasFingerPrintReader(newValue)
	}

	updateInputType(newValue: Primitives<InputTypeId>): void {
		this.InputTypeId = new InputTypeId(newValue)
	}
}
