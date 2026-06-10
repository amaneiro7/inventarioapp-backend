import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class CargoAssociation
 * @description A utility class to build complex Sequelize query options for the Cargo model.
 * It is responsible for dynamically constructing nested includes and applying a single,
 * prioritized filter to these associated tables.
 */
export class CargoAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Modifies a Sequelize FindOptions object to include Cargo associations.
	 * It applies a **single, prioritized filter** to the associations. The priority order is:
	 * 1. `unidadId`
	 * Only the first matching filter found in this order will be applied. All association-related
	 * filter keys are then removed from the main 'where' clause.
	 *
	 * @param {Criteria} criteria The criteria object.
	 * @param {FindOptions} options The base Sequelize options object to be modified.
	 * @returns {FindOptions} The enhanced Sequelize FindOptions object.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		// --- 1. Define Includes with Clear Naming ---
		const unidadInclude: IncludeOptions = {
			association: 'unidades',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}

		options.include = [unidadInclude]

		const whereFilters = options.where ?? {}

		// --- 2. Apply Prioritized Filter (Mutually Exclusive) ---
		// This `if/else if` chain ensures only the highest-priority filter is applied.
		if ('unidadId' in whereFilters) {
			unidadInclude.where = { id: whereFilters.unidadId }
			delete whereFilters.unidadId
		}

		options.where = whereFilters

		return options
	}
}
