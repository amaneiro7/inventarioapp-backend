import { type MemoryRamTypeDto } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRam.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from '../../../../ModelSeries/domain/ModelSeries.dto'
import { type ComputerMemoryRamType } from './ComputerMemoryRamType'
import { type HasBluetooth } from './HasBluetooth'
import { type HasDVI } from './HasDVI'
import { type HasHDMI } from './HasHDMI'
import { type HasVGA } from './HasVGA'
import { type HasWifiAdapter } from './HasWifiAdapter'
import { type MemoryRamSlotQuantity } from './MemoryRamSlotQuantity'

/**
 * @interface ComputerModels
 * @description Defines the specific properties of a computer model.
 */
export interface ComputerModels {
	memoryRamTypeId: Primitives<ComputerMemoryRamType>
	memoryRamSlotQuantity: Primitives<MemoryRamSlotQuantity>
	hasBluetooth: Primitives<HasBluetooth>
	hasWifiAdapter: Primitives<HasWifiAdapter>
	hasDVI: Primitives<HasDVI>
	hasHDMI: Primitives<HasHDMI>
	hasVGA: Primitives<HasVGA>
}

/**
 * @type ComputerModelsPrimitives
 * @description Represents the primitive state of a computer model, extending the base model series.
 */
export type ComputerModelsPrimitives = ModelSeriesPrimitives & ComputerModels

/**
 * @type ComputerModelsParams
 * @description Represents the parameters for creating a new computer model.
 */
export type ComputerModelsParams = ModelSeriesParams & ComputerModels

/**
 * @type ComputerModelsDto
 * @description Data Transfer Object for a computer model, including the memory RAM type.
 */
export type ComputerModelsDto = ComputerModels & {
	memoryRamType: MemoryRamTypeDto
}
