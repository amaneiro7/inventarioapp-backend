import { type Request } from 'express'
import { type FiltersPrimitives } from '../../domain/criteria/Filter'
import { Criteria } from '../../domain/criteria/Criteria'

export class CriteriaFromUrlConverter {
	public toCriteria(req: Request): Criteria {
		const { filters, orderBy, orderType, pageSize, pageNumber } = req.query

		return Criteria.fromPrimitives(
			filters ? (filters as unknown as FiltersPrimitives[]) : [],
			orderBy ? (orderBy as string) : undefined,
			orderType ? (orderType as string) : undefined,
			pageSize ? Number(pageSize) : undefined,
			pageNumber ? (Number(pageNumber) as number) : undefined
		)
	}
}
