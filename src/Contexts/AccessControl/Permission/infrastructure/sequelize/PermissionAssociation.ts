import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class PermissionAssociation
 * @description A utility class to build Sequelize query options for the Permission model,
 * specifically for handling associations with PermissionGroup.
 */
export class PermissionAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Modifies a Sequelize `FindOptions` object to include PermissionGroup associations
	 * and applies a filter based on `permissionGroupId` if present in the criteria.
	 *
	 * @param {Criteria} criteria The criteria object, which may contain a `permissionGroupId` filter.
	 * @param {FindOptions} options The base Sequelize options object to be modified.
	 * @returns {FindOptions} The enhanced Sequelize `FindOptions` object with associations.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where }

		const permissionGroupInclude: IncludeOptions = {
			association: 'permissionGroups', // As defined in PermissionSchema.ts
			attributes: [], // We only need it for filtering, not for the result
			through: {}
		}

		options.include = [permissionGroupInclude]

		// If a permissionGroupId filter exists, apply it to the association include
		if ('permissionGroupId' in whereFilters) {
			permissionGroupInclude.where = { id: whereFilters.permissionGroupId }
			// Remove the filter from the main where clause to avoid ambiguity
			delete whereFilters.permissionGroupId
		}

		options.where = whereFilters
		return options
	}
}
