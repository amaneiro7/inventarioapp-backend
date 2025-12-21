import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type InputTypeDto } from '../../../InputType/domain/entity/InputType.dto'
import { type InputTypeId } from '../../../InputType/domain/valueObject/InputTypeId'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from './ModelSeries.dto'

/**
 * @interface MouseModels
 * @description Defines the specific properties of a mouse model.
 */
export interface MouseModels {
	inputTypeId: Primitives<InputTypeId>
}

/**
 * @type MouseModelsPrimitives
 * @description Represents the primitive state of a mouse model.
 */
export type MouseModelsPrimitives = ModelSeriesPrimitives & MouseModels
export type MouseModelsField = keyof Omit<MouseModelsPrimitives, 'id'>
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
