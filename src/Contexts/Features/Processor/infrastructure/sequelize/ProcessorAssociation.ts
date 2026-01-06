import { type FindOptions, type IncludeOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
/**
 * @class BrandAssociation
 * @description A utility class to build Sequelize query options for the Brand model,
 * specifically for handling associations and their filters.
 */
export class ProcessorAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Modifies a Sequelize `FindOptions` object to include Brand associations
	 * and applies a filter based on the `modelId` if present in the criteria.
	 *
	 * @param {Criteria} criteria The criteria object, which may contain a `modelId` filter.
	 * @param {FindOptions} options The base Sequelize options object to be modified.
	 * @returns {FindOptions} The enhanced Sequelize `FindOptions` object with associations.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where }

		const modelInclude: IncludeOptions = {
			association: 'models',
			attributes: ['id', 'name'],
			through: {}
		}

		options.include = [modelInclude]

		// If a modelId filter exists, apply it to the association include
		if ('modelId' in whereFilters) {
			modelInclude.where = { id: whereFilters.modelId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.modelId
		}

		options.where = whereFilters

		return options
	}
}
