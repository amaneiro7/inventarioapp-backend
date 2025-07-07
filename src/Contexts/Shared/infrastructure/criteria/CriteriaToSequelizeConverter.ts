import { type FindOptions, Op, WhereOptions } from 'sequelize'
import { type Criteria } from '../../domain/criteria/Criteria'
import { type Filter } from '../../domain/criteria/Filter'

export type Mappings = { [key: string]: string }

export class CriteriaToSequelizeConverter {
	convert(criteria: Criteria, mappings: Mappings = {}): FindOptions {
		const query: FindOptions = {}

		if (criteria.hasFilters()) {
			query.where = this.generateWhereQueryFromFilters(criteria.filters.value, mappings)
		}
		if (criteria.hasOrder()) {
			query.order = [[criteria.order.orderBy.value, criteria.order.orderType.value]]
		}

		if (criteria.pageSize) {
			query.limit = criteria.pageSize
		}

		if (criteria.pageSize && criteria.pageNumber) {
			query.offset = (criteria.pageNumber - 1) * criteria.pageSize
		}

		return query
	}

	 
	private generateWhereQueryFromFilters(filters: Filter[], mappings: Mappings = {}): WhereOptions {
		return filters.reduce((acc: WhereOptions, filter) => {
			const field = mappings[filter.field.value] ?? filter.field.value
			const value = filter.value.value
			const condition = this.generateCondition(field, Op.iLike, `%${value}%`) // Default iLike condition

			if (filter.operator.isOR()) {
				return {
					...acc,
					// @ts-ignore
					[Op.or]: [...((acc[Op.or] as WhereOptions[]) || []), condition]
				}
			}
			if (filter.operator.isAND()) {
				return {
					...acc,
					// @ts-ignore
					[Op.and]: [...((acc[Op.and] as WhereOptions[]) || []), condition]
				}
			}

			if (filter.operator.isContains()) {
				return { ...acc, ...this.generateCondition(field, Op.iLike, `%${value}%`) }
			}

			if (filter.operator.isNotContains()) {
				return { ...acc, ...this.generateCondition(field, Op.eq, value) }
			}

			if (filter.operator.isNotEquals()) {
				return { ...acc, ...this.generateCondition(field, Op.ne, value) }
			}

			if (filter.operator.isGreaterThan()) {
				return { ...acc, ...this.generateCondition(field, Op.gt, value) }
			}

			if (filter.operator.isGreaterThanOrEqual()) {
				return { ...acc, ...this.generateCondition(field, Op.gte, value) }
			}
			if (filter.operator.isLowerThan()) {
				return { ...acc, ...this.generateCondition(field, Op.lt, value) }
			}
			if (filter.operator.isLowerThanOrEqual()) {
				return { ...acc, ...this.generateCondition(field, Op.lte, value) }
			}

			// Default case, assuming equality if no specific operator matches
			return { ...acc, ...this.generateCondition(field, Op.eq, value) }
		}, {})
	}

	private generateCondition(field: string, operator: symbol, value: any): WhereOptions {
		return { [field]: { [operator]: value } }
	}
}
