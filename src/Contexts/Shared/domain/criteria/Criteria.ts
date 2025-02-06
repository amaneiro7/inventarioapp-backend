import { Primitives } from '../value-object/Primitives'
import { FiltersPrimitives } from './Filter'
import { FilterField } from './FilterField'
import { Filters } from './Filters'
import { InvalidCriteria } from './InvalidCriteria'
import { Order } from './Order'
import { OrderBy } from './OrderBy'
import { OrderType } from './OrderType'

interface CriteriaPrimitives {
	filters: FiltersPrimitives[]
	orderBy?: Primitives<OrderBy>
	orderType?: Primitives<OrderType>
	pageSize?: number
	pageNumber?: number
}

export class Criteria {
	constructor(
		public readonly filters: Filters,
		public readonly order: Order,
		public readonly pageSize?: number,
		public readonly pageNumber?: number
	) {
		if (pageNumber && !pageSize) {
			throw new InvalidCriteria()
		}
	}

	static fromPrimitives(
		filters: FiltersPrimitives[],
		orderBy?: string,
		orderType?: string,
		pageSize?: number,
		pageNumber?: number
	): Criteria {
		return new Criteria(
			Filters.fromValues(filters),
			Order.fromValues(orderBy, orderType),
			Number(pageSize),
			Number(pageNumber)
		)
	}

	toPrimitives(): CriteriaPrimitives {
		return {
			filters: this.filters.toPrimitives(),
			orderBy: this.order.orderBy.value,
			orderType: this.order.orderType.value,
			pageSize: this.pageSize,
			pageNumber: this.pageNumber
		}
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
