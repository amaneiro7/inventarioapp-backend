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
		// --- 1. Define Includes with Clear Naming ---
		const departamentoInclude: IncludeOptions = {
			association: 'departamentos',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}
		const vicepresidenciaInclude: IncludeOptions = {
			association: 'vicepresidencias',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}
		const vicepresidenciaEjecutivaInclude: IncludeOptions = {
			association: 'vicepresidenciaEjecutivas',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}
		const directivaInclude: IncludeOptions = {
			association: 'directivas',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}

		options.include = [
			departamentoInclude,
			vicepresidenciaInclude,
			vicepresidenciaEjecutivaInclude,
			directivaInclude
		]

		const whereFilters = options.where ?? {}

		// --- 2. Apply Prioritized Filter (Mutually Exclusive) ---
		// This `if/else if` chain ensures only the highest-priority filter is applied.
		if ('departamentoId' in whereFilters) {
			departamentoInclude.where = { id: whereFilters.departamentoId }
		} else if ('vicepresidenciaId' in whereFilters) {
			vicepresidenciaInclude.where = { id: whereFilters.vicepresidenciaId }
		} else if ('vicepresidenciaEjecutivaId' in whereFilters) {
			vicepresidenciaEjecutivaInclude.where = { id: whereFilters.vicepresidenciaEjecutivaId }
		} else if ('directivaId' in whereFilters) {
			directivaInclude.where = { id: whereFilters.directivaId }
		}

		// --- 3. Clean Up All Association Filter Keys ---
		// Regardless of which filter was applied (or if none were), we remove all
		// potential association keys from the main 'where' clause to prevent side effects.
		if ('departamentoId' in whereFilters) {
			delete whereFilters.departamentoId
		}
		if ('vicepresidenciaId' in whereFilters) {
			delete whereFilters.vicepresidenciaId
		}
		if ('vicepresidenciaEjecutivaId' in whereFilters) {
			delete whereFilters.vicepresidenciaEjecutivaId
		}
		if ('directivaId' in whereFilters) {
			delete whereFilters.directivaId
		}

		options.where = whereFilters

		return options
	}
}
