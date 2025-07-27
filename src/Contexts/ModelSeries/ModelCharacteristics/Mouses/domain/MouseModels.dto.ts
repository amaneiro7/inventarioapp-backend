import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeDto } from '../../../InputType/domain/InputType.dto'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from '../../../ModelSeries/domain/ModelSeries.dto'
import { type ModelMouseInputType } from './ModelMouseInputType'

/**
 * @interface MouseModels
 * @description Defines the specific properties of a mouse model.
 */
export interface MouseModels {
	inputTypeId: Primitives<ModelMouseInputType>
}

/**
 * @type MouseModelsPrimitives
 * @description Represents the primitive state of a mouse model.
 */
export type MouseModelsPrimitives = ModelSeriesPrimitives & MouseModels

/**
 * @type MouseModelsParams
 * @description Represents the parameters for creating a new mouse model.
 */
export type MouseModelsParams = ModelSeriesParams & MouseModels

/**
 * @type MouseModelsDto
 * @description Data Transfer Object for a mouse model, including the input type.
 */
export type MouseModelsDto = MouseModels & {
	inputType: InputTypeDto
}
