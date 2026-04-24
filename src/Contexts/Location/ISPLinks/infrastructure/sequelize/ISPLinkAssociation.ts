import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * A utility class for handling associations in ISPLink queries.
 */
export class ISPLinkAssociation {
	/**
	 * Converts filter criteria into Sequelize FindOptions.
	 *
	 * @param {Criteria} criteria - The criteria to convert.
	 * @param {FindOptions} options - The initial find options.
	 * @returns {FindOptions} The updated find options with associations.
	 */
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		// --- 1. Define Includes with Clear Naming ---
		const locationInclude: IncludeOptions = {
			association: 'locations',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}

		options.include = [locationInclude]

		const whereFilters = options.where ?? {}

		// --- 2. Apply Prioritized Filter (Mutually Exclusive) ---
		// This `if/else if` chain ensures only the highest-priority filter is applied.
		if ('locationId' in whereFilters) {
			locationInclude.where = { id: whereFilters.locationId }
			delete whereFilters.locationId
		}

		options.where = whereFilters

		return options
	}
}
