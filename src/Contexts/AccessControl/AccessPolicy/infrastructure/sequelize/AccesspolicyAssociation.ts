import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class AccessPolicyAssociation
 * @description A utility class to build Sequelize query options for the AccessPolicy model,
 * specifically for handling associations with AccessPolicyGroup.
 */
export class AccessPolicyAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Modifies a Sequelize `FindOptions` object to include AccessPolicyGroup associations
	 * and applies a filter based on `AccessPolicyGroupId` if present in the criteria.
	 *
	 * @param {Criteria} criteria The criteria object, which may contain a `AccessPolicyGroupId` filter.
	 * @param {FindOptions} options The base Sequelize options object to be modified.
	 * @returns {FindOptions} The enhanced Sequelize `FindOptions` object with associations.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where }

		const permissionGroupInclude: IncludeOptions = {
			association: 'permissionsGroups', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'], // We only need it for filtering, not for the result
			through: {}
		}
		const roleInclude: IncludeOptions = {
			association: 'role', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'] // We only need it for filtering, not for the result
		}
		const cargoInclude: IncludeOptions = {
			association: 'cargo', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'] // We only need it for filtering, not for the result
		}
		const departamentoInclude: IncludeOptions = {
			association: 'departamento', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'] // We only need it for filtering, not for the result
		}
		const vicepresidenciaInclude: IncludeOptions = {
			association: 'vicepresidencia', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'] // We only need it for filtering, not for the result
		}
		const vicepresidenciaEjecutivaInclude: IncludeOptions = {
			association: 'vicepresidenciaEjecutiva', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'] // We only need it for filtering, not for the result
		}
		const directivaInclude: IncludeOptions = {
			association: 'directiva', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'] // We only need it for filtering, not for the result
		}

		options.include = [
			permissionGroupInclude,
			cargoInclude,
			departamentoInclude,
			roleInclude,
			vicepresidenciaInclude,
			vicepresidenciaEjecutivaInclude,
			directivaInclude
		]

		// If a AccessPolicyGroupId filter exists, apply it to the association include
		if ('permissionGroupId' in whereFilters) {
			permissionGroupInclude.where = { id: whereFilters.permissionGroupId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.permissionGroupId
		}
		// If a roleId filter exists, apply it to the association include
		if ('roleId' in whereFilters) {
			roleInclude.where = { id: whereFilters.roleId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.roleId
		}
		// If a cargoId filter exists, apply it to the association include
		if ('cargoId' in whereFilters) {
			cargoInclude.where = { id: whereFilters.cargoId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.cargoId
		}
		// If a directivaId filter exists, apply it to the association include
		if ('directivaId' in whereFilters) {
			directivaInclude.where = { id: whereFilters.directivaId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.directivaId
		}
		// If a vicepresidenciaEjectivaId filter exists, apply it to the association include
		if ('vicepresidenciaEjectivaId' in whereFilters) {
			vicepresidenciaEjecutivaInclude.where = { id: whereFilters.vicepresidenciaEjectivaId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.vicepresidenciaEjectivaId
		}
		// If a vicepresidenciaId filter exists, apply it to the association include
		if ('vicepresidenciaId' in whereFilters) {
			vicepresidenciaInclude.where = { id: whereFilters.vicepresidenciaId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.vicepresidenciaId
		}
		// If a departamentoId filter exists, apply it to the association include
		if ('departamentoId' in whereFilters) {
			departamentoInclude.where = { id: whereFilters.departamentoId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.departamentoId
		}

		options.where = whereFilters
		return options
	}
}
