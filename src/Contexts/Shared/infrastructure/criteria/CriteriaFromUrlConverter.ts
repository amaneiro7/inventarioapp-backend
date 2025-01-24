import { Criteria } from '../../domain/criteria/Criteria'
import { FiltersPrimitives } from '../../domain/criteria/Filter'

export class CriteriaFromUrlConverter {
	public toCriteria(url: URL): Criteria {
		const { searchParams } = url

		const filters = this.parseFilters(searchParams)

		return Criteria.fromPrimitives(
			filters,
			searchParams.get('orderBy'),
			searchParams.get('order'),
			searchParams.has('pageSize')
				? parseInt(searchParams.get('pageSize') as string, 10)
				: null,
			searchParams.has('pageNumber')
				? parseInt(searchParams.get('pageNumber') as string, 10)
				: null
		)
	}

	public toFiltersPrimitives(url: URL): FiltersPrimitives[] {
		const { searchParams } = url

		return this.parseFilters(searchParams)
	}

	private parseFilters(searchParams: URLSearchParams): FiltersPrimitives[] {
		const tempFilters: Record<string, Partial<FiltersPrimitives>> = {}

		searchParams.forEach((value, key) => {
			const match = key.match(/filters\[(\d+)]\[(.+)]/)
			if (match) {
				const index = match[1]
				const property = match[2] as keyof FiltersPrimitives
				if (!tempFilters[index]) {
					tempFilters[index] = {}
				}
				// @ts-ignore
				tempFilters[index][property] = value
			}
		})
		// @ts-ignore
		return Object.values(tempFilters).filter(
			filter =>
				filter.field !== undefined &&
				filter.operator !== undefined &&
				filter.value !== undefined
		)
	}
}
