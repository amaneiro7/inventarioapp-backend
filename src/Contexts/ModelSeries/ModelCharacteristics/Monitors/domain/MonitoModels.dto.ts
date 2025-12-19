import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from '../../../ModelSeries/domain/entity/ModelSeries.dto'
import { type MonitorHasDVI } from './MonitorHasDVI'
import { type MonitorHasHDMI } from './MonitorHasHDMI'
import { type MonitorHasVGA } from './MonitorHasVGA'
import { type MonitorScreenSize } from './MonitorScreenSize'

/**
 * @interface MonitorModels
 * @description Defines the specific properties of a monitor model.
 */
export interface MonitorModels {
	screenSize: Primitives<MonitorScreenSize>
	hasDVI: Primitives<MonitorHasDVI>
	hasHDMI: Primitives<MonitorHasHDMI>
	hasVGA: Primitives<MonitorHasVGA>
}

/**
 * @type MonitorModelsPrimitives
 * @description Represents the primitive state of a monitor model, extending the base model series.
 */
export type MonitorModelsPrimitives = ModelSeriesPrimitives & MonitorModels

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
