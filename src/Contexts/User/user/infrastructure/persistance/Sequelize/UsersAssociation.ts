import { type IncludeOptions, type FindOptions } from 'sequelize'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'

/**
 * @description A utility class to build Sequelize FindOptions for User-related queries.
 */
export class UsersAssociation {
	/**
	 * @description Configures Sequelize FindOptions to include associated models based on criteria.
	 * @param {Criteria} criteria The criteria object.
	 * @param {FindOptions} options The base Sequelize options to be modified.
	 * @returns {FindOptions} The modified Sequelize FindOptions object.
	 */
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where }

		const employeeInclude: IncludeOptions = {
			association: 'employee'
		}
		const roleInclude: IncludeOptions = {
			association: 'role',
			attributes: ['id', 'name']
		}
		options.include = [employeeInclude, roleInclude]

		// Filter by employee email
		if ('email' in whereFilters) {
			employeeInclude.where = {
				...employeeInclude.where,
				email: whereFilters.email
			}
			delete whereFilters?.email
		}
		// Filter by employee email
		if ('name' in whereFilters) {
			employeeInclude.where = {
				...employeeInclude.where,
				nameemail: whereFilters.name
			}
			delete whereFilters?.name
		}
		// Filter by employee lastName
		if ('lastName' in whereFilters) {
			employeeInclude.where = {
				...employeeInclude.where,
				lastName: whereFilters.lastName
			}
			delete whereFilters?.lastName
		}

		// Filter by employee userName
		if ('userName' in whereFilters) {
			employeeInclude.where = {
				...employeeInclude.where,
				userName: whereFilters.userName
			}
			delete whereFilters?.userName
		}

		options.where = whereFilters
		return options
	}
}
