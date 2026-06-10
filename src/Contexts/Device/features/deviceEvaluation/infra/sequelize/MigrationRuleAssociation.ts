import type { FindOptions, IncludeOptions } from 'sequelize'
import type { Criteria } from '../../../../../Shared/domain/criteria/Criteria'

/**
 * @class MigrationRuleAssociation
 * @description A utility class to build complex Sequelize query options for the MigrationRule model.
 */
export class MigrationRuleAssociation {
	/**
	 * @description Converts a Criteria object into a fully configured Sequelize FindOptions object.
	 * @param {Criteria} criteria The criteria object containing filters and ordering.
	 * @param {FindOptions} options The base FindOptions to be modified.
	 * @returns {FindOptions} The configured Sequelize FindOptions object.
	 */
	public static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const processorInclude: IncludeOptions = {
			association: 'approvedProcessor',
			attributes: ['id', 'name'],
			through: { attributes: [] }
		}

		options.include = [processorInclude]

		const whereFilters = options.where ?? {}

		if ('processorId' in whereFilters) {
			processorInclude.where = { id: whereFilters.processorId }
			delete whereFilters.processorId
		}

		// Clean up custom filter keys
		options.where = whereFilters

		return options
	}
}
