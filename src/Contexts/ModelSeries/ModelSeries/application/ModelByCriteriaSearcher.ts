import { Criteria } from '../../../Shared/domain/criteria/Criteria'
import { Filter } from '../../../Shared/domain/criteria/Filter'
import { FilterField } from '../../../Shared/domain/criteria/FilterField'
import { FilterOperator } from '../../../Shared/domain/criteria/FilterOperator'
import { Filters } from '../../../Shared/domain/criteria/Filters'
import { FilterValue } from '../../../Shared/domain/criteria/FilterValue'
import { Order } from '../../../Shared/domain/criteria/Order'
import { type SearchByCriteriaQuery } from '../../../Shared/domain/SearchByCriteriaQuery'
import { type ModelSeriesPrimitives } from '../domain/ModelSeries'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelSeriesSearchByCriteria {
	constructor(
		private readonly modelSeriesRepository: ModelSeriesRepository
	) {}

	async run(
		query: SearchByCriteriaQuery
	): Promise<{ total: number; data: ModelSeriesPrimitives[] }> {
		const filters = query.filters.map(filter => {
			return new Filter(
				new FilterField(filter.field),
				FilterOperator.fromValue(filter.operator),
				new FilterValue(filter.value)
			)
		})
		const order = Order.fromValues(
			query.orderBy ?? 'categoryId',
			query.orderType
		)
		const criteria = new Criteria(
			new Filters(filters),
			order,
			query.limit,
			query.offset
		)
		return await this.modelSeriesRepository.matching(criteria)
	}
}
