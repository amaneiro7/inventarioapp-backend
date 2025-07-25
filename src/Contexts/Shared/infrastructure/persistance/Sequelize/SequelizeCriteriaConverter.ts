import { type FindOptions, Op, type WhereOptions, type WhereAttributeHash } from 'sequelize'
import { Operator } from '../../../domain/criteria/FilterOperator'
import { type FiltersPrimitives } from '../../../domain/criteria/Filter'
import { type Criteria } from '../../../domain/criteria/Criteria'
import { type Filters } from '../../../domain/criteria/Filters'

// Defines the structure of a Sequelize condition object, e.g., { [Op.eq]: 'value' }.
// This is the core part of a where clause for a single attribute.
type SequelizeCondition = WhereAttributeHash[keyof WhereAttributeHash]

// Defines a function that transforms a domain filter primitive into a Sequelize condition object.
type ConditionTransformer = (filter: FiltersPrimitives) => SequelizeCondition

/**
 * @class SequelizeCriteriaConverter
 * @description Converts a domain-specific Criteria object into a Sequelize FindOptions object.
 * It handles the transformation of filters, ordering, and pagination into a type-safe Sequelize query.
 */
export class SequelizeCriteriaConverter {
	private readonly conditionTransformers: Map<Operator, ConditionTransformer>

	constructor() {
		this.conditionTransformers = new Map<Operator, ConditionTransformer>([
			[Operator.EQUAL, this.equalCondition],
			[Operator.NOT_EQUAL, this.notEqualCondition],
			[Operator.GREATER_THAN, this.greaterThanCondition],
			[Operator.GREATER_THAN_OR_EQUAL, this.greaterThanOrEqualCondition],
			[Operator.LOWER_THAN, this.lowerThanCondition],
			[Operator.LOWER_THAN_OR_EQUAL, this.lowerThanOrEqualCondition],
			[Operator.CONTAINS, this.containsCondition],
			[Operator.NOT_CONTAINS, this.notContainsCondition]
		])
	}

	/**
	 * @method convert
	 * @description The main method that orchestrates the conversion of a Criteria object.
	 * @param {Criteria} criteria The domain Criteria object.
	 * @returns {FindOptions} The equivalent Sequelize FindOptions object.
	 */
	public convert(criteria: Criteria): FindOptions {
		const query: FindOptions = {}

		if (criteria.hasFilters()) {
			query.where = this.generateFilter(criteria.filters)
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

	/**
	 * @method generateFilter
	 * @description Generates a fully-typed and optimized Sequelize `where` clause from a set of Filters.
	 * - Groups filters by field.
	 * - Correctly handles multiple filters on the same field:
	 *   - Multiple 'EQUAL' filters become a single `[Op.in]` clause.
	 *   - A mix of different filters becomes an `[Op.and]` clause.
	 * @param {Filters} filters The domain Filters object.
	 * @returns {WhereOptions} The generated Sequelize `where` clause.
	 */
	protected generateFilter(filters: Filters): WhereOptions {
		const filtersByField = new Map<string, FiltersPrimitives[]>()
		for (const filter of filters.value) {
			const primitive = filter.toPrimitives()
			if (!filtersByField.has(primitive.field)) {
				filtersByField.set(primitive.field, [])
			}
			filtersByField.get(primitive.field)!.push(primitive)
		}

		const where: WhereOptions = {}
		for (const [field, fieldFilters] of filtersByField.entries()) {
			const allAreEquals = fieldFilters.every(f => f.operator === Operator.EQUAL)

			if (fieldFilters.length > 1 && allAreEquals) {
				where[field] = {
					[Op.in]: fieldFilters.map(f => f.value)
				}
			} else {
				const conditions: SequelizeCondition[] = fieldFilters.map(f => {
					const transformer = this.conditionTransformers.get(f.operator as Operator)
					if (!transformer) {
						throw new Error(`Unexpected operator value ${f.operator}`)
					}
					return transformer(f)
				})

				if (conditions.length > 1) {
					where[field] = { [Op.and]: conditions }
				} else {
					where[field] = conditions[0]
				}
			}
		}
		return where
	}

	// ------------------- Condition Transformers -------------------
	// Each function now returns a type-safe SequelizeCondition object.

	private equalCondition(filter: FiltersPrimitives): SequelizeCondition {
		return { [Op.eq]: filter.value }
	}

	private notEqualCondition(filter: FiltersPrimitives): SequelizeCondition {
		return { [Op.ne]: filter.value }
	}

	private greaterThanCondition(filter: FiltersPrimitives): SequelizeCondition {
		return { [Op.gt]: filter.value }
	}

	private greaterThanOrEqualCondition(filter: FiltersPrimitives): SequelizeCondition {
		return { [Op.gte]: filter.value }
	}

	private lowerThanCondition(filter: FiltersPrimitives): SequelizeCondition {
		return { [Op.lt]: filter.value }
	}

	private lowerThanOrEqualCondition(filter: FiltersPrimitives): SequelizeCondition {
		return { [Op.lte]: filter.value }
	}

	private containsCondition(filter: FiltersPrimitives): SequelizeCondition {
		return { [Op.iLike]: `%${filter.value}%` }
	}

	private notContainsCondition(filter: FiltersPrimitives): SequelizeCondition {
		return { [Op.notILike]: `%${filter.value}%` }
	}
}
