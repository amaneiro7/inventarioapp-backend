import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type CategoryId } from '../../../Category/Category/domain/CategoryId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from './ModelSeriesId'
import { type ModelSeriesName } from './ModelSeriesName'
import {
	type ModelSeriesDto,
	type ModelSeriesPrimitives
} from './ModelSeries.dto'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'

export abstract class ModelSeriesRepository {
	abstract save(payload: ModelSeriesPrimitives): Promise<void>

	abstract searchAll(criteria: Criteria): Promise<ResponseDB<ModelSeriesDto>>

	abstract matching(criteria: Criteria): Promise<ResponseDB<ModelSeriesDto>>

	abstract searchById(
		id: Primitives<ModelSeriesId>
	): Promise<ModelSeriesDto | null>

	abstract searchByName(
		name: Primitives<ModelSeriesName>
	): Promise<ModelSeriesDto | null>

	abstract searchByCategory(
		categoryId: Primitives<CategoryId>
	): Promise<ModelSeriesDto[]>

	abstract donwload(criteria: Criteria): Promise<{}>

	abstract remove(id: Primitives<ModelSeriesId>): Promise<void>
}
