import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class PermissionGroupAssociation
 * @description A utility class to build Sequelize query options for the PermissionGroup model,
 * specifically for handling associations with Permission.
 */
export class PermissionGroupAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Modifies a Sequelize `FindOptions` object to include Permission associations
	 * and applies a filter based on `permissionId` if present in the criteria.
	 *
	 * @param {Criteria} criteria The criteria object, which may contain a `permissionId` filter.
	 * @param {FindOptions} options The base Sequelize options object to be modified.
	 * @returns {FindOptions} The enhanced Sequelize `FindOptions` object with associations.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where }

		const permissionInclude: IncludeOptions = {
			association: 'permissions', // As defined in PermissionGroupSchema.ts
			attributes: [], // We only need it for filtering, not for the result
			through: {}
		}

		options.include = [permissionInclude]

		if ('permissionId' in whereFilters) {
			permissionInclude.where = { id: whereFilters.permissionId }
			delete whereFilters.permissionId
		}

		options.where = whereFilters
		return options
	}
}
