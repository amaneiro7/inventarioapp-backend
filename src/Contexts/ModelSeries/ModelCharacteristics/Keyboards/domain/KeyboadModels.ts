import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { ProcessorId } from '../../../../Features/Processor/Processor/domain/ProcessorId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { Generic } from '../../../ModelSeries/domain/Generic'
import { ModelSeries } from '../../../ModelSeries/domain/entity/ModelSeries'
import { type ModelSeriesDto } from '../../../ModelSeries/domain/entity/ModelSeries.dto'
import { ModelSeriesId } from '../../../ModelSeries/domain/ModelSeriesId'
import { ModelSeriesName } from '../../../ModelSeries/domain/ModelSeriesName'
import { HasFingerPrintReader } from './HasFingerPrintReader'
import { type KeyboardModelsParams, type KeyboardModelsPrimitives } from './KeyboardModels.dto'
import { ModelKeyboardInputType } from './ModelKeyboardInputType'

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
		processors: ProcessorId[],
		private InputTypeId: ModelKeyboardInputType,
		private hasFingerPrintReader: HasFingerPrintReader
	) {
		super(id, name, categoryId, brandId, generic, processors)
	}

	static create(params: KeyboardModelsParams): KeyboardModels {
		return new KeyboardModels(
			ModelSeriesId.random(),
			new ModelSeriesName(params.name),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new Generic(params.generic),
			this.addProcessorIds({ categoryId: params.categoryId, processorIds: params.processors }),
			new ModelKeyboardInputType(params.inputTypeId),
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
			primitives.processors.map(processor => new ProcessorId(processor.id)),
			new ModelKeyboardInputType(primitives.modelKeyboard.inputTypeId),
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
