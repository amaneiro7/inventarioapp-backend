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
		const whereFilters = options.where ?? {}

		// --- 1. Construir la jerarquía de "adentro hacia afuera" para garantizar la coherencia ---

		// Nivel más profundo: Directiva
		const directivaInclude: IncludeOptions = {
			association: 'directiva',
			attributes: ['id', 'name']
		}
		if ('directivaId' in whereFilters) {
			directivaInclude.where = { id: whereFilters.directivaId }
			delete whereFilters.directivaId
			// `required: false` solo es necesario si también estamos filtrando por un nivel superior en la misma jerarquía.
			// De lo contrario, queremos un INNER JOIN para que el filtro de directivaId funcione correctamente por sí solo.
			if ('vicepresidenciaEjecutivaId' in whereFilters || 'vicepresidenciaId' in whereFilters) {
				directivaInclude.required = false
			}
		}

		// Nivel intermedio: Vicepresidencia Ejecutiva (incluye Directiva)
		const vicepresidenciaEjecutivaInclude: IncludeOptions = {
			association: 'vicepresidenciaEjecutiva',
			attributes: ['id', 'name', 'directivaId'],
			include: [directivaInclude]
		}
		if ('vicepresidenciaEjecutivaId' in whereFilters) {
			vicepresidenciaEjecutivaInclude.where = { id: whereFilters.vicepresidenciaEjecutivaId }
			delete whereFilters.vicepresidenciaEjecutivaId
		}

		// Nivel superior: Vicepresidencia (incluye Vicepresidencia Ejecutiva)
		const vicepresidenciaInclude: IncludeOptions = {
			association: 'vicepresidencia',
			attributes: ['id', 'name', 'vicepresidenciaEjecutivaId'],
			include: [vicepresidenciaEjecutivaInclude]
		}
		if ('vicepresidenciaId' in whereFilters) {
			vicepresidenciaInclude.where = { id: whereFilters.vicepresidenciaId }
			delete whereFilters.vicepresidenciaId
		}

		// --- 2. Construir los includes no jerárquicos ---
		const cargoInclude: IncludeOptions = {
			association: 'cargos',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}
		if ('cargoId' in whereFilters) {
			cargoInclude.where = { id: whereFilters.cargoId }
			delete whereFilters.cargoId
		}

		// --- 3. Ensamblar la consulta final ---
		options.include = [vicepresidenciaInclude, cargoInclude, { association: 'employee' }]
		options.where = whereFilters

		return options
	}
}
