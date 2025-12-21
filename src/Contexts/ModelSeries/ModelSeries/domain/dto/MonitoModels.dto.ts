import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

import { type MonitorScreenSize } from '../../../ModelSeries/domain/valueObject/MonitorScreenSize'
import { type HasDVI } from '../valueObject/HasDVI'
import { type HasHDMI } from '../valueObject/HasHDMI'
import { type HasVGA } from '../valueObject/HasVGA'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from './ModelSeries.dto'

/**
 * @interface MonitorModels
 * @description Defines the specific properties of a monitor model.
 */
export interface MonitorModels {
	screenSize: Primitives<MonitorScreenSize>
	hasDVI: Primitives<HasDVI>
	hasHDMI: Primitives<HasHDMI>
	hasVGA: Primitives<HasVGA>
}

/**
 * @type MonitorModelsPrimitives
 * @description Represents the primitive state of a monitor model, extending the base model series.
 */
export type MonitorModelsPrimitives = ModelSeriesPrimitives & MonitorModels

export type MonitorModelsField = keyof Omit<MonitorModelsPrimitives, 'id'>
/**
 * @type MonitorModelsParams
 * @description Represents the parameters for creating a new monitor model.
 */
export type MonitorModelsParams = ModelSeriesParams & MonitorModels

/**
 * @type MonitorModelsDto
 * @description Data Transfer Object for a monitor model.
 */
export type MonitorModelsDto = MonitorModels
