import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

/**
 * @class BrandAssociation
 * @description A utility class to build Sequelize query options for the Brand model,
 * specifically for handling associations and their filters.
 */
export class BrandAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Modifies a Sequelize `FindOptions` object to include Brand associations
	 * and applies a filter based on the `categoryId` if present in the criteria.
	 *
	 * @param {Criteria} criteria The criteria object, which may contain a `categoryId` filter.
	 * @param {FindOptions} options The base Sequelize options object to be modified.
	 * @returns {FindOptions} The enhanced Sequelize `FindOptions` object with associations.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where }

		const categoryInclude: IncludeOptions = {
			association: 'categories',
			attributes: ['id', 'name'],
			through: {},
			required: true
		}

		options.include = [categoryInclude]

		// If a categoryId filter exists, apply it to the association include
		if ('categoryId' in whereFilters) {
			categoryInclude.where = { id: whereFilters.categoryId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.categoryId
		}

		options.where = whereFilters

		return options
	}
}
