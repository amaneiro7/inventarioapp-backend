import { ModelSeries } from './ModelSeries'
import { ModelSeriesId } from '../valueObject/ModelSeriesId'
import { ModelSeriesName } from '../valueObject/ModelSeriesName'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { Generic } from '../valueObject/Generic'
import { InputTypeId } from '../../../InputType/domain/valueObject/InputTypeId'
import { HasFingerPrintReader } from '../valueObject/HasFingerPrintReader'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { InputTypeDoesNotExistError } from '../../../InputType/domain/errors/InputTypeDoesNotExistError'
import { type ModelDependencies } from './ModelDependencies'
import { type ModelSeriesDto } from '../dto/ModelSeries.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type KeyboardModelsParams, type KeyboardModelsPrimitives } from '../dto/KeyboardModels.dto'

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
		return new KeyboardModels(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			new InputTypeId(params.inputTypeId),
			new HasFingerPrintReader(params.hasFingerPrintReader)
		)
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

	async update(
		params: Partial<KeyboardModelsParams>,
		dependencies: ModelDependencies
	): Promise<Array<{ field: string; oldValue: unknown; newValue: unknown }>> {
		const changes = await super.update(params, dependencies)

		if (params.inputTypeId !== undefined && this.inputTypeValue !== params.inputTypeId) {
			const existingInputType = await dependencies.inputTypeRepository.findById(params.inputTypeId)
			if (!existingInputType) {
				throw new InputTypeDoesNotExistError(params.inputTypeId)
			}
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
