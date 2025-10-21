import { type FindOptions } from 'sequelize'
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
		options.include = ['role', 'employee'] // Include employee
		return options
	}
}
