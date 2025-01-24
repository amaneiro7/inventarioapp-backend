import { Primitives } from '../value-object/Primitives'
import { FiltersPrimitives } from './Filter'
import { FilterField } from './FilterField'
import { Filters } from './Filters'
import { InvalidCriteria } from './InvalidCriteria'
import { Order } from './Order'

export class Criteria {
	constructor(
		public readonly filters: Filters,
		public readonly order: Order,
		public readonly pageSize?: number | null,
		public readonly pageNumber?: number | null
	) {
		if (pageNumber !== null && !pageSize) {
			throw new InvalidCriteria()
		}
	}

	static fromPrimitives(
		filters: FiltersPrimitives[],
		orderBy: string | null,
		orderType: string | null,
		pageSize?: number | null,
		pageNumber?: number | null
	): Criteria {
		return new Criteria(
			Filters.fromValues(filters),
			Order.fromValues(orderBy, orderType),
			pageSize,
			pageNumber
		)
	}

	hasFilters(): boolean {
		return !this.filters.isEmpty()
	}

	hasOrder(): boolean {
		return this.order.hasOrder()
	}

	searchValueInArray(field: Primitives<FilterField>): boolean {
		return this.filters.value.some(filter => filter.field.value === field)
	}

	obtainFilterValue(field: Primitives<FilterField>) {
		return this.filters.value.map(filter => {
			if (filter.field.value === field) return filter.value.value
		})
	}
}
