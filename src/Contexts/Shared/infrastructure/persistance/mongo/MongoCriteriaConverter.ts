import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import type { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import type { Filter } from '../../../../Shared/domain/criteria/Filter'
import type { Order } from '../../../../Shared/domain/criteria/Order'

type MongoFilterOperator = '$eq' | '$ne' | '$gt' | '$lt' | '$regex'
type MongoFilterValue = boolean | string | number
type MongoFilterOperation = { [operator in MongoFilterOperator]?: MongoFilterValue }
type MongoFilter = { [field: string]: MongoFilterOperation } | { [field: string]: { $not: MongoFilterOperation } }
type MongoDirection = 1 | -1
type MongoSort = { [field: string]: MongoDirection }

interface MongoQuery {
	filter: MongoFilter
	sort: MongoSort
	skip: number
	limit: number
}

interface TransformerFunction<T, K> {
	(value: T): K
}

export class MongoCriteriaConverter {
	private filterTransformers: Map<Operator, TransformerFunction<Filter, MongoFilter>>

	constructor() {
		this.filterTransformers = new Map<Operator, TransformerFunction<Filter, MongoFilter>>([
			[Operator.EQUAL, this.equalFilter],
			[Operator.NOT_EQUAL, this.notEqualFilter],
			[Operator.GREATER_THAN, this.greaterThanFilter],
			[Operator.LOWER_THAN, this.lowerThanFilter],
			[Operator.CONTAINS, this.containsFilter],
			[Operator.NOT_CONTAINS, this.notContainsFilter]
		])
	}

	public convert(criteria: Criteria): MongoQuery {
		return {
			filter: criteria.hasFilters() ? this.generateFilter(criteria.filters.value) : {},
			sort: criteria.order.hasOrder() ? this.generateSort(criteria.order) : { _id: -1 },
			skip: criteria.pageNumber || 0,
			limit: criteria.pageSize || 0
		}
	}

	protected generateFilter(filters: Filter[]): MongoFilter {
		const filter = filters.map(filter => {
			const transformer = this.filterTransformers.get(filter.operator.value)

			if (!transformer) {
				throw Error(`Unexpected operator value ${filter.operator.value}`)
			}

			return transformer(filter)
		})

		return Object.assign({}, ...filter)
	}

	protected generateSort(order: Order): MongoSort {
		return {
			[order.orderBy.value === 'id' ? '_id' : order.orderBy.value]: order.orderType.isAsc() ? 1 : -1
		}
	}

	private equalFilter(filter: Filter): MongoFilter {
		return { [filter.field.value]: { $eq: filter.value.value } }
	}

	private notEqualFilter(filter: Filter): MongoFilter {
		return { [filter.field.value]: { $ne: filter.value.value } }
	}

	private greaterThanFilter(filter: Filter): MongoFilter {
		return { [filter.field.value]: { $gt: filter.value.value } }
	}

	private lowerThanFilter(filter: Filter): MongoFilter {
		return { [filter.field.value]: { $lt: filter.value.value } }
	}

	private containsFilter(filter: Filter): MongoFilter {
		return { [filter.field.value]: { $regex: filter.value.value } }
	}

	private notContainsFilter(filter: Filter): MongoFilter {
		return { [filter.field.value]: { $not: { $regex: filter.value.value } } }
	}
}
