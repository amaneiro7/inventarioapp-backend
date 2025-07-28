import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * A utility class for handling associations in City queries.
 */
export class CityAssociation {
	/**
	 * Converts filter criteria into Sequelize FindOptions.
	 *
	 * @param {Criteria} criteria - The criteria to convert.
	 * @param {FindOptions} options - The initial find options.
	 * @returns {FindOptions} The updated find options with associations.
	 */
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where } // Clone to avoid direct mutation

		// ------------------- 1. INCLUDES DEFINITION -------------------
		// Define all possible associations that can be included in the query.
		// These are later referenced by the filter configuration.
		const administrativeRegionInclude: IncludeOptions = {
			association: 'administrativeRegion',
			required: true
		}
		const regionInclude: IncludeOptions = {
			association: 'region',
			required: true,
			include: [administrativeRegionInclude]
		}
		const stateInclude: IncludeOptions = { association: 'state', required: true, include: [regionInclude] }

		options.include = [stateInclude]

		if ('regionId' in whereFilters) {
			regionInclude.where = {
				id: whereFilters.regionId
			}
			delete whereFilters.regionId
		}
		if ('administrativeRegionId' in whereFilters) {
			administrativeRegionInclude.where = {
				id: whereFilters.administrativeRegionId
			}
			delete whereFilters.administrativeRegionId
		}

		// Re-assign the modified where clauses back to the options.
		options.where = whereFilters

		return options
	}
}
