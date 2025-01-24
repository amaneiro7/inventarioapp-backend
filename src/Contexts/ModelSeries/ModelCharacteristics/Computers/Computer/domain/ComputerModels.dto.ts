import { type MemoryRamTypeDto } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRam.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import {
	type ModelSeriesParams,
	type ModelSeriesPrimitives
} from '../../../../ModelSeries/domain/ModelSeries.dto'
import { type ComputerMemoryRamType } from './ComputerMemoryRamType'
import { type HasBluetooth } from './HasBluetooth'
import { type HasDVI } from './HasDVI'
import { type HasHDMI } from './HasHDMI'
import { type HasVGA } from './HasVGA'
import { type HasWifiAdapter } from './HasWifiAdapter'
import { type MemoryRamSlotQuantity } from './MemoryRamSlotQuantity'

export interface ComputerModels {
	memoryRamTypeId: Primitives<ComputerMemoryRamType>
	memoryRamSlotQuantity: Primitives<MemoryRamSlotQuantity>
	hasBluetooth: Primitives<HasBluetooth>
	hasWifiAdapter: Primitives<HasWifiAdapter>
	hasDVI: Primitives<HasDVI>
	hasHDMI: Primitives<HasHDMI>
	hasVGA: Primitives<HasVGA>
}
export type ComputerModelsPrimitives = ModelSeriesPrimitives & {
	memoryRamTypeId: Primitives<ComputerMemoryRamType>
	memoryRamSlotQuantity: Primitives<MemoryRamSlotQuantity>
	hasBluetooth: Primitives<HasBluetooth>
	hasWifiAdapter: Primitives<HasWifiAdapter>
	hasDVI: Primitives<HasDVI>
	hasHDMI: Primitives<HasHDMI>
	hasVGA: Primitives<HasVGA>
}

export type ComputerModelsParams = ModelSeriesParams & {
	memoryRamTypeId: Primitives<ComputerMemoryRamType>
	memoryRamSlotQuantity: Primitives<MemoryRamSlotQuantity>
	hasBluetooth: Primitives<HasBluetooth>
	hasWifiAdapter: Primitives<HasWifiAdapter>
	hasDVI: Primitives<HasDVI>
	hasHDMI: Primitives<HasHDMI>
	hasVGA: Primitives<HasVGA>
}

export type ComputerModelsDto = ComputerModels & {
	memoryRamType: MemoryRamTypeDto
}
