import { type FindOptions, Op, WhereOptions } from 'sequelize'
import { type Criteria } from '../../domain/criteria/Criteria'
import { type Filter } from '../../domain/criteria/Filter'

export type Mappings = { [key: string]: string }

export class CriteriaToSequelizeConverter {
	convert(criteria: Criteria, mappings: Mappings = {}): FindOptions {
		const query: FindOptions = {}
		if (criteria.hasFilters()) {
			query.where = criteria.filters.value.reduce((acc: WhereOptions, filter) => {
				return {
					...acc,
					...this.generateWhereQuery(filter, mappings, acc)
				}
			}, {})
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

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	private generateWhereQuery(filter: Filter, mappings: Mappings = {}, acc: WhereOptions): WhereOptions {
		const field = mappings[filter.field.value] ?? filter.field.value

		const value = filter.value.value

		if (filter.operator.isOR()) {
			return {
				...acc,
				[Op.or]: [...(acc?.[Op.or] || []), { [field]: { [Op.iLike]: `%${value}%` } }]
			}
		}
		if (filter.operator.isAND()) {
			return {
				[Op.and]: [{ [field]: { [Op.iLike]: `%${value}%` } }]
			}
		}

		if (filter.operator.isContains()) {
			return { [field]: { [Op.iLike]: `%${value}%` } }
		}

		if (filter.operator.isNotContains()) {
			return { [field]: { [Op.notILike]: `%${value}%` } }
		}

		if (filter.operator.isNotEquals()) {
			return { [field]: value }
		}

		if (filter.operator.isGreaterThan()) {
			return { [field]: { [Op.gt]: value } }
		}

		if (filter.operator.isGreaterThanOrEqual()) {
			return { [field]: { [Op.gte]: value } }
		}
		if (filter.operator.isGreaterThan()) {
			return { [field]: { [Op.lt]: value } }
		}
		if (filter.operator.isGreaterThanOrEqual()) {
			return { [field]: { [Op.lte]: value } }
		}

		return { [field]: value }
	}
}
