import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type BatteryModelName } from '../valueObject/BatteryModelName'
import {
	type ComputerModelsDto,
	type ComputerModels,
	type ComputerModelsPrimitives,
	type ComputerModelsParams
} from './ComputerModels.dto'

/**
 * @interface LaptopModels
 * @description Extends the ComputerModels interface with laptop-specific properties.
 */
export type LaptopModels = ComputerModels & {
	batteryModel: Primitives<BatteryModelName>
}

/**
 * @type LaptopModelsPrimitives
 * @description Represents the primitive state of a laptop model.
 */
export type LaptopModelsPrimitives = ComputerModelsPrimitives & {
	batteryModel: Primitives<BatteryModelName>
}

export type LaptopModelsField = keyof Omit<LaptopModelsPrimitives, 'id'>

/**
 * @type LaptopModelsParams
 * @description Represents the parameters for creating a new laptop model.
 */
export type LaptopModelsParams = ComputerModelsParams & {
	batteryModel: Primitives<BatteryModelName>
}

/**
 * @type LaptopModelsDto
 * @description Data Transfer Object for a laptop model.
 */
export type LaptopModelsDto = ComputerModelsDto & {
	batteryModel: Primitives<BatteryModelName>
}
