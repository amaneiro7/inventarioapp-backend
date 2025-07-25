import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class DepartamentoAssociation
 * @description A utility class to build complex Sequelize query options for the Departamento model.
 * It handles the dynamic construction of deeply nested includes and applies filters to them.
 */
export class DepartamentoAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Modifies a Sequelize FindOptions object to include Departamento associations.
	 * It dynamically adds 'where' clauses to the nested includes based on filter keys
	 * like `vicepresidenciaId`, `directivaId`, etc., found in the criteria.
	 *
	 * @param {Criteria} criteria The criteria object.
	 * @param {FindOptions} options The base Sequelize options object to be modified.
	 * @returns {FindOptions} The enhanced Sequelize FindOptions object with includes and nested filters.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		// --- 1. Define Includes with Clear Naming for Readability and Safety ---
		const directivaInclude: IncludeOptions = {
			association: 'directiva',
			attributes: ['id', 'name']
		}
		const vicepresidenciaEjecutivaInclude: IncludeOptions = {
			association: 'vicepresidenciaEjecutiva',
			attributes: ['id', 'name', 'directivaId'],
			include: [directivaInclude]
		}
		const vicepresidenciaInclude: IncludeOptions = {
			association: 'vicepresidencia',
			attributes: ['id', 'name', 'vicepresidenciaEjecutivaId'],
			include: [vicepresidenciaEjecutivaInclude]
		}
		const cargoInclude: IncludeOptions = {
			association: 'cargos',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}

		options.include = [vicepresidenciaInclude, cargoInclude, 'employee']

		// Cast to our custom type to make TypeScript aware of the filter keys.
		const whereFilters = options.where ?? {}

		// --- 2. Apply Nested Filters Accumulatively ---
		// These filters are applied to the correct level of the nested include structure.
		if ('cargoId' in whereFilters) {
			cargoInclude.where = { id: whereFilters.cargoId }
			delete whereFilters.cargoId
		}
		if ('vicepresidenciaId' in whereFilters) {
			vicepresidenciaInclude.where = { id: whereFilters.vicepresidenciaId }
			delete whereFilters.vicepresidenciaId
		}
		if ('vicepresidenciaEjecutivaId' in whereFilters) {
			vicepresidenciaEjecutivaInclude.where = { id: whereFilters.vicepresidenciaEjecutivaId }
			delete whereFilters.vicepresidenciaEjecutivaId
		}
		if ('directivaId' in whereFilters) {
			directivaInclude.where = { id: whereFilters.directivaId }
			delete whereFilters.directivaId
		}

		options.where = whereFilters

		return options
	}
}
