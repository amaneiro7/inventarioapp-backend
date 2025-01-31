import { type Request } from 'express'
import { type FiltersPrimitives } from '../../domain/criteria/Filter'
import { Criteria } from '../../domain/criteria/Criteria'

export class CriteriaFromUrlConverter {
	public toCriteria(req: Request): Criteria {
		const searchParams = new URLSearchParams(
			req.query as unknown as Record<string, string>
		)
		console.log('req.query', req.query)
		// const url = new URL(
		// 	'http://localhost:3000/api/users?filters[0][field]=name&filters[0][operator]=CONTAINS&filters[0][value]=Javi'
		// )

		// const { searchParams } = url

		const filters = searchParams.get('filters') ?? []
		console.log(filters)
		// const filters = this.parseFilters(searchParams)

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
		console.log('parseFilters', searchParams)
		searchParams.forEach((value, key) => {
			console.log('parseFilters forEach', key)
			const match = key.match(/filters\[(\d+)]\[(.+)]/)
			console.log('parseFilters Match', match)
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
