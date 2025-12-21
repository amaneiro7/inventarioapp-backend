import { type MemoryRamTypeDto } from '../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRam.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from './ModelSeries.dto'
import { type MemoryRamTypeId } from '../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeId'
import { type HasBluetooth } from '../valueObject/HasBluetooth'
import { type HasDVI } from '../valueObject/HasDVI'
import { type HasHDMI } from '../valueObject/HasHDMI'
import { type HasVGA } from '../valueObject/HasVGA'
import { type HasWifiAdapter } from '../valueObject/HasWifiAdapter'
import { type MemoryRamSlotQuantity } from '../valueObject/MemoryRamSlotQuantity'

/**
 * @interface ComputerModels
 * @description Defines the specific properties of a computer model.
 */
export interface ComputerModels {
	memoryRamTypeId: Primitives<MemoryRamTypeId>
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

export type ComputerModelsField = keyof Omit<ComputerModelsPrimitives, 'id'>

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
