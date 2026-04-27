import { createHash } from 'crypto'
import { Primitives } from '../value-object/Primitives'
import { Filter, FiltersPrimitives } from './Filter'
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
			pageSize ? Number(pageSize) : undefined,
			pageNumber ? Number(pageNumber) : undefined
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

	withFilters(newFilter: Filter[]): Criteria {
		const updatedFilters = new Filters([...this.filters.value, ...newFilter])
		return new Criteria(updatedFilters, this.order, this.pageSize, this.pageNumber)
	}

	withoutPagination(): Criteria {
		return new Criteria(this.filters, this.order)
	}

	withOrder(orderBy: string, orderType: string): Criteria {
		return new Criteria(this.filters, Order.fromValues(orderBy, orderType), this.pageSize, this.pageNumber)
	}

	withoutFilter(fieldName: string): Criteria {
		const currentFilters = this.filters.toPrimitives()
		const updatedFilters = currentFilters.filter(filter => filter.field !== fieldName)
		return Criteria.fromPrimitives(
			updatedFilters,
			this.order.orderBy.value,
			this.order.orderType.value,
			this.pageSize,
			this.pageNumber
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
		return this.filters.value.find(f => f.field.value === field)?.value.value
	}

	/**
	 * Generates a unique and consistent hash string representing the current state of the criteria.
	 * This is primarily used for creating unique cache keys.
	 *
	 * @returns {string} A SHA-256 hash string.
	 */
	public hash(): string {
		const data = this.toPrimitives()
		const json = JSON.stringify(data)
		return createHash('sha256').update(json).digest('hex')
	}
}
