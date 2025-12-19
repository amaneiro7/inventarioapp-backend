import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeDto } from '../../../InputType/domain/entity/InputType.dto'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from '../../../ModelSeries/domain/entity/ModelSeries.dto'
import { type HasFingerPrintReader } from './HasFingerPrintReader'
import { type ModelKeyboardInputType } from './ModelKeyboardInputType'

/**
 * @interface KeyboardModels
 * @description Defines the specific properties of a keyboard model.
 */
export interface KeyboardModels {
	inputTypeId: Primitives<ModelKeyboardInputType>
	hasFingerPrintReader: Primitives<HasFingerPrintReader>
}

/**
 * @type KeyboardModelsPrimitives
 * @description Represents the primitive state of a keyboard model.
 */
export type KeyboardModelsPrimitives = ModelSeriesPrimitives & KeyboardModels

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
