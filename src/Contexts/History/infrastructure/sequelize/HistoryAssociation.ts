import { type FindOptions, type IncludeOptions, type Order } from 'sequelize'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

/**
 * @class HistoryAssociation
 * @description A utility class to build complex Sequelize query options for the History model.
 * It handles the dynamic construction of nested includes, filters, and order clauses based on a given Criteria object.
 */
export class HistoryAssociation {
	/**
	 * @static
	 * @method converFilter
	 * @description Converts a Criteria object into a Sequelize FindOptions object, correctly mapping
	 * filters and orderings to their respective nested associations (e.g., user, device).
	 *
	 * @param {Criteria} criteria The criteria object containing filters, order, and pagination.
	 * @param {FindOptions} options The base Sequelize options to be modified.
	 * @returns {FindOptions} The fully constructed Sequelize FindOptions object.
	 */
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const userInclude: IncludeOptions = {
			association: 'user',
			attributes: ['id', 'name', 'email', 'lastName', 'roleId']
		}
		const empñpyeeInclude: IncludeOptions = { association: 'employee', attributes: [] }
		const deviceInclude: IncludeOptions = {
			association: 'device',
			attributes: ['serial', 'updatedAt'],
			include: [{ association: 'category', attributes: ['name'] }]
		}

		options.include = [userInclude, empñpyeeInclude, deviceInclude]

		const whereFilters = options.where ?? {}
		const deviceWhere: Record<string, unknown> = {}

		// --- Dynamic Filter Application ---
		// Accumulate all device-related filters into the 'deviceWhere' object.
		if ('serial' in whereFilters) {
			deviceWhere.serial = whereFilters.serial
			delete whereFilters.serial
		}
		if ('categoryId' in whereFilters) {
			deviceWhere.categoryId = whereFilters.categoryId
			delete whereFilters.categoryId
		}

		// Handle date range filter on the device model, assuming it applies to device.updatedAt
		if ('startDate' in whereFilters && 'endDate' in whereFilters) {
			const { startDate, endDate } = whereFilters
			whereFilters.updatedAt = {
				...endDate,
				...startDate
			}
			delete whereFilters.startDate
			delete whereFilters.endDate
		}

		// Assign the accumulated 'where' clause to the device include if it's not empty.
		if (Object.keys(deviceWhere).length > 0) {
			deviceInclude.where = deviceWhere
		}

		// Assign the remaining filters to the main 'where' clause.
		options.where = whereFilters
		options.order = this.transformOrder(options.order)

		return options
	}

	/**
	 * @private
	 * @static
	 * @method transformOrder
	 * @description Transforms a simple order format (e.g., ['serial', 'ASC']) into a nested format
	 * that Sequelize can use for ordering on associated tables (e.g., ['device', 'serial', 'ASC']).
	 *
	 * @param {Order | undefined} order The order configuration from the criteria.
	 * @returns {Order | undefined} A Sequelize-compatible nested order configuration.
	 */
	private static transformOrder(order: Order | undefined): Order | undefined {
		if (!Array.isArray(order) || order.length === 0) {
			return undefined
		}

		const orderMap: Record<string, string[]> = {
			serial: ['device', 'serial'],
			categoryId: ['device', 'category', 'name']
		}

		// Ensure we are working with an array of [field, direction] tuples.
		const orderTuples = order.flat().length === 2 && typeof order[0] === 'string' ? [order] : order

		const transformedOrder = (orderTuples as Array<[string, string]>).map(([field, direction]) => {
			const mappedPath = orderMap[field]
			return mappedPath ? [...mappedPath, direction.toUpperCase()] : [field, direction.toUpperCase()]
		})

		return transformedOrder as Order
	}
}
