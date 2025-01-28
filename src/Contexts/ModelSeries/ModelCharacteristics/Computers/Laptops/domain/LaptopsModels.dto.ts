import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import {
	type ComputerModelsDto,
	type ComputerModels,
	type ComputerModelsPrimitives,
	type ComputerModelsParams
} from '../../Computer/domain/ComputerModels.dto'
import { type BatteryModelName } from './BatteryModelName'

export type LaptopModels = ComputerModels & {
	batteryModel: Primitives<BatteryModelName>
}
export type LaptopModelsPrimitives = ComputerModelsPrimitives & {
	batteryModel: Primitives<BatteryModelName>
}

export type LaptopModelsParams = ComputerModelsParams & {
	batteryModel: Primitives<BatteryModelName>
}

export type LaptopModelsDto = ComputerModelsDto & {
	batteryModel: Primitives<BatteryModelName>
}
