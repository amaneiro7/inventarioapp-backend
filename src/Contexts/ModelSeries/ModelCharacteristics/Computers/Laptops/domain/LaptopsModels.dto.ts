import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ComputerModels } from '../../Computer/domain/ComputerModels.dto'
import { type BatteryModelName } from './BatteryModelName'

export type LaptopModels = ComputerModels & {
	batteryModel: Primitives<BatteryModelName>
}
export type LaptopModelsPrimitives = ComputerModels & {
	batteryModel: Primitives<BatteryModelName>
}

export type LaptopModelsParams = ComputerModels & {
	batteryModel: Primitives<BatteryModelName>
}

export type LaptopModelsDto = ComputerModels & {
	batteryModel: Primitives<BatteryModelName>
}
