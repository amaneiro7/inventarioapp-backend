import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesParams, type ModelSeriesPrimitives } from '../../../ModelSeries/domain/entity/ModelSeries.dto'
import { type CartridgeModel } from './CartridgeModel'

/**
 * @interface PrinteModels
 * @description Defines the specific properties of a printer model.
 */
export interface PrinteModels {
	cartridgeModel: Primitives<CartridgeModel>
}

/**
 * @type PrinteModelsPrimitives
 * @description Represents the primitive state of a printer model.
 */
export type PrinteModelsPrimitives = ModelSeriesPrimitives & PrinteModels

/**
 * @type PrinteModelsParams
 * @description Represents the parameters for creating a new printer model.
 */
export type PrinteModelsParams = ModelSeriesParams & PrinteModels

/**
 * @type PrinteModelsDto
 * @description Data Transfer Object for a printer model.
 */
export type PrinteModelsDto = PrinteModels
