import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

/**
 * @class CargoAssociation
 * @description A utility class to build complex Sequelize query options for the Cargo model.
 * It is responsible for dynamically constructing nested includes and applying a single,
 * prioritized filter to these associated tables.
 */
export class BrandAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Modifies a Sequelize FindOptions object to include Cargo associations.
	 * It applies a **single, prioritized filter** to the associations. The priority order is:
	 * 1. `departamentoId`
	 * 2. `vicepresidenciaId`
	 * 3. `vicepresidenciaEjecutivaId`
	 * 4. `directivaId`
	 * Only the first matching filter found in this order will be applied. All association-related
	 * filter keys are then removed from the main 'where' clause.
	 *
	 * @param {Criteria} criteria The criteria object.
	 * @param {FindOptions} options The base Sequelize options object to be modified.
	 * @returns {FindOptions} The enhanced Sequelize FindOptions object.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where }
		// --- 1. Define Includes with Clear Naming ---
		const categoryInclude: IncludeOptions = {
			association: 'categories',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}

		options.include = [categoryInclude]

		// --- 2. Apply Prioritized Filter (Mutually Exclusive) ---
		// This `if/else if` chain ensures only the highest-priority filter is applied.
		if ('categoryId' in whereFilters) {
			categoryInclude.where = { id: whereFilters.categoryId }
			delete whereFilters.categoryId
		}

		options.where = whereFilters

		return options
	}
}
