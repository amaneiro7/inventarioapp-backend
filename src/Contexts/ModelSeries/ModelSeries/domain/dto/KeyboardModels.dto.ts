import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeDto } from '../../../InputType/domain/entity/InputType.dto'
import { type InputTypeId } from '../../../InputType/domain/valueObject/InputTypeId'
import { type HasFingerPrintReader } from '../valueObject/HasFingerPrintReader'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from './ModelSeries.dto'

/**
 * @interface KeyboardModels
 * @description Defines the specific properties of a keyboard model.
 */
export interface KeyboardModels {
	inputTypeId: Primitives<InputTypeId>
	hasFingerPrintReader: Primitives<HasFingerPrintReader>
}

/**
 * @type KeyboardModelsPrimitives
 * @description Represents the primitive state of a keyboard model.
 */
export type KeyboardModelsPrimitives = ModelSeriesPrimitives & KeyboardModels

export type KeyboardModelsField = keyof Omit<KeyboardModelsPrimitives, 'id'>
/**
 * @type KeyboardModelsParams
 * @description Represents the parameters for creating a new keyboard model.
 */
export type KeyboardModelsParams = ModelSeriesParams & KeyboardModels

/**
 * @type KeyboardModelsDto
 * @description Data Transfer Object for a keyboard model, including the input type.
 */
export type KeyboardModelsDto = KeyboardModels & {
	inputType: InputTypeDto
}
