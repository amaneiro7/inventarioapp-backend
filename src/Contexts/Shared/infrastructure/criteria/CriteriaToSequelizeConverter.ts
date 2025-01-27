import { type FindOptions, Op } from 'sequelize'
import { type Criteria } from '../../domain/criteria/Criteria'
import { type Filter } from '../../domain/criteria/Filter'

export type Mappings = { [key: string]: string }

export class CriteriaToSequelizeConverter {
	convert(criteria: Criteria, mappings: Mappings = {}): FindOptions {
		console.log('CriteriaToSequelizeConverter:', criteria.pageSize)
		const query: FindOptions = {}

		if (criteria.hasFilters()) {
			query.where = criteria.filters.value.reduce((acc, filter) => {
				return { ...acc, ...this.generateWhereQuery(filter, mappings) }
			}, {})
		}
		if (criteria.hasOrder()) {
			query.order = [
				[criteria.order.orderBy.value, criteria.order.orderType.value]
			]
		}

		if (criteria.pageSize) {
			query.limit = criteria.pageSize
		}

		if (criteria.pageSize && criteria.pageNumber) {
			query.offset = criteria.pageNumber
		}

		return query
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	private generateWhereQuery(filter: Filter, mappings: Mappings = {}) {
		const field = mappings[filter.field.value] ?? filter.field.value

		const value = filter.value.value

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
