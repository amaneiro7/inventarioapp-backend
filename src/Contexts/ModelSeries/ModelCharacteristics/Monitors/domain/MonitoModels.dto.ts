import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import {
	type ModelSeriesParams,
	type ModelSeriesPrimitives
} from '../../../ModelSeries/domain/ModelSeries.dto'
import { type MonitorHasDVI } from './MonitorHasDVI'
import { type MonitorHasHDMI } from './MonitorHasHDMI'
import { type MonitorHasVGA } from './MonitorHasVGA'
import { type MonitorScreenSize } from './MonitorScreenSize'

export interface MonitorModels {
	screenSize: Primitives<MonitorScreenSize>
	hasDVI: Primitives<MonitorHasDVI>
	hasHDMI: Primitives<MonitorHasHDMI>
	hasVGA: Primitives<MonitorHasVGA>
}
export type MonitorModelsPrimitives = ModelSeriesPrimitives & {
	screenSize: Primitives<MonitorScreenSize>
	hasDVI: Primitives<MonitorHasDVI>
	hasHDMI: Primitives<MonitorHasHDMI>
	hasVGA: Primitives<MonitorHasVGA>
}

export type MonitorModelsParams = ModelSeriesParams & {
	screenSize: Primitives<MonitorScreenSize>
	hasDVI: Primitives<MonitorHasDVI>
	hasHDMI: Primitives<MonitorHasHDMI>
	hasVGA: Primitives<MonitorHasVGA>
}

export type MonitorModelsDto = MonitorModels
