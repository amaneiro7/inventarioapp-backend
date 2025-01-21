import { SearchByCriteriaQuery } from '../SearchByCriteriaQuery'
import { Criteria } from './Criteria'
import { Filter } from './Filter'
import { FilterField } from './FilterField'
import { FilterOperator } from './FilterOperator'
import { Filters } from './Filters'
import { FilterValue } from './FilterValue'
import { Order } from './Order'

export class CreateCriteria {
	static async execute(query: SearchByCriteriaQuery): Promise<Criteria> {
		const filters = query.filters.map(
			filter =>
				new Filter(
					new FilterField(filter.field),
					FilterOperator.fromValue(filter.operator),
					new FilterValue(filter.value)
				)
		)
		const order = Order.fromValues(query.orderBy, query.orderType)
		return new Criteria(
			new Filters(filters),
			order,
			query.limit,
			query.offset
		)
	}
}
