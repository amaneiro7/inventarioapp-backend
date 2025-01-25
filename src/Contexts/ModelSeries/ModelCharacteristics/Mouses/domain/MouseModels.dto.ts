import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeDto } from '../../../InputType/domain/InputType.dto'
import {
	type ModelSeriesParams,
	type ModelSeriesPrimitives
} from '../../../ModelSeries/domain/ModelSeries.dto'
import { type ModelMouseInputType } from './ModelMouseInputType'

export interface MouseModels {
	inputTypeId: Primitives<ModelMouseInputType>
}
export type MouseModelsPrimitives = ModelSeriesPrimitives & {
	inputTypeId: Primitives<ModelMouseInputType>
}

export type MouseModelsParams = ModelSeriesParams & {
	inputTypeId: Primitives<ModelMouseInputType>
}

export type MouseModelsDto = MouseModels & {
	inputType: InputTypeDto
}
