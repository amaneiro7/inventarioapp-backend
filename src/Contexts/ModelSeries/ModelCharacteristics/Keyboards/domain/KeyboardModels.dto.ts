import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeDto } from '../../../InputType/domain/InputType.dto'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from '../../../ModelSeries/domain/ModelSeries.dto'
import { type HasFingerPrintReader } from './HasFingerPrintReader'
import { type ModelKeyboardInputType } from './ModelKeyboardInputType'

export interface KeyboardModels {
	inputTypeId: Primitives<ModelKeyboardInputType>
	hasFingerPrintReader: Primitives<HasFingerPrintReader>
}
export type KeyboardModelsPrimitives = ModelSeriesPrimitives & {
	inputTypeId: Primitives<ModelKeyboardInputType>
	hasFingerPrintReader: Primitives<HasFingerPrintReader>
}

export type KeyboardModelsParams = ModelSeriesParams & {
	inputTypeId: Primitives<ModelKeyboardInputType>
	hasFingerPrintReader: Primitives<HasFingerPrintReader>
}

export type KeyboardModelsDto = KeyboardModels & {
	inputType: InputTypeDto
}
