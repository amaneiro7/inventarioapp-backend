import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * A utility class for handling associations in State queries.
 */
export class StateAssociation {
	/**
	 * Converts filter criteria into Sequelize FindOptions.
	 *
	 * @param {Criteria} criteria - The criteria to convert.
	 * @param {FindOptions} options - The initial find options.
	 * @returns {FindOptions} The updated find options with associations.
	 */ static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where }
		const administrativeRegionInclude: IncludeOptions = {
			association: 'administrativeRegion',
			required: true,
			attributes: []
		}
		const regionInclude: IncludeOptions = {
			association: 'region',
			required: true,
			include: [administrativeRegionInclude]
		}
		options.include = [regionInclude]

		// Poder filtrar por region administrativa
		if ('administrativeRegionId' in whereFilters) {
			administrativeRegionInclude.where = {
				id: whereFilters.administrativeRegionId
			}

			delete whereFilters?.administrativeRegionId
		}

		// Re-assign the modified where clauses back to the options.
		options.where = whereFilters
		return options
	}
}
