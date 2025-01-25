import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import {
	type ModelSeriesParams,
	type ModelSeriesPrimitives
} from '../../../ModelSeries/domain/ModelSeries.dto'
import { type CartridgeModel } from './CartridgeModel'

export interface PrinteModels {
	cartridgeModel: Primitives<CartridgeModel>
}
export type PrinteModelsPrimitives = ModelSeriesPrimitives & {
	cartridgeModel: Primitives<CartridgeModel>
}

export type PrinteModelsParams = ModelSeriesParams & {
	cartridgeModel: Primitives<CartridgeModel>
}

export type PrinteModelsDto = PrinteModels
