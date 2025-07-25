import { type FindOptions, Op, type WhereOptions } from 'sequelize'
import { type Filter } from '../../../domain/criteria/Filter'
import { type Criteria } from '../../../domain/criteria/Criteria'

/**
 * @description Defines a mapping from domain field names to database column names.
 * @example { 'productId': 'product_id' }
 */
export type Mappings = { [key: string]: string }

/**
 * @class SequelizeCriteriaConverter
 * @description Converts a domain-specific Criteria object into a Sequelize FindOptions object.
 * It handles the transformation of filters, ordering, and pagination into a type-safe Sequelize query.
 */
export class SequelizeCriteriaConverter {
	/**
	 * @method convert
	 * @description The main method to convert a Criteria object to Sequelize FindOptions.
	 * @param {Criteria} criteria - The domain criteria object.
	 * @param {Mappings} [mappings={}] - An optional mapping of domain fields to database fields.
	 * @returns {FindOptions} A Sequelize-compatible query options object.
	 */
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
					//@ts-expect-error Sequelize
					[Op.or]: [...((acc[Op.or] as WhereOptions[]) ?? []), condition]
				}
			}
			if (filter.operator.isAND()) {
				return {
					...acc,
					//@ts-expect-error Sequelize
					[Op.and]: [...((acc[Op.and] as WhereOptions[]) ?? []), condition]
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

	private generateCondition(field: string, operator: symbol, value: string | boolean | number): WhereOptions {
		return { [field]: { [operator]: value } }
	}
}
