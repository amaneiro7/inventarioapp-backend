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

		const PermissionGroupInclude: IncludeOptions = {
			association: 'permissionsGroups', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'], // We only need it for filtering, not for the result
			through: {}
		}
		const CargoInclude: IncludeOptions = {
			association: 'cargo', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'] // We only need it for filtering, not for the result
		}
		const DepartamentoInclude: IncludeOptions = {
			association: 'departamento', // As defined in AccessPolicySchema.ts
			attributes: ['id', 'name'] // We only need it for filtering, not for the result
		}

		options.include = [PermissionGroupInclude, CargoInclude, DepartamentoInclude]

		// If a AccessPolicyGroupId filter exists, apply it to the association include
		if ('permissionGroupId' in whereFilters) {
			PermissionGroupInclude.where = { id: whereFilters.permissionGroupId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.permissionGroupId
		}
		// If a cargoId filter exists, apply it to the association include
		if ('cargoId' in whereFilters) {
			CargoInclude.where = { id: whereFilters.cargoId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.cargoId
		}
		// If a departamentoId filter exists, apply it to the association include
		if ('departamentoId' in whereFilters) {
			DepartamentoInclude.where = { id: whereFilters.departamentoId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.departamentoId
		}

		options.where = whereFilters
		return options
	}
}
