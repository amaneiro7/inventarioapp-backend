import { type FindOptions, type IncludeOptions, type Order, Op } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class ShipmentAssociation
 * @description A utility class to build complex Sequelize query options for the Shipment model.
 * It handles the dynamic construction of nested includes, filters, and order clauses based on a given Criteria object.
 */
export class ShipmentAssociation {
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
		const shipmentDeviceInclude: IncludeOptions = {
			association: 'shipmentDevice',
			attributes: ['id', 'deviceId', 'deviceSnapshot']
		}

		options.include = [
			{
				association: 'fromUser',
				attributes: ['id', 'employeeId'],
				include: [
					{
						association: 'employee',
						attributes: ['name', 'lastName', 'userName', 'email']
					}
				]
			},
			{
				association: 'toEmployee',
				attributes: ['name', 'lastName']
			},
			{
				association: 'originLocation',
				attributes: ['name', 'address']
			},
			{
				association: 'destinationLocation',
				attributes: ['name', 'address']
			},
			shipmentDeviceInclude
		]

		const whereFilters = options.where ?? {}

		// // --- Date Range Handling ---
		// // If a date filter is present, adjust it to a full-day range.
		// const dateFields = ['createdAt', 'updatedAt', 'date'] // Add other date fields if necessary
		// for (const field of dateFields) {
		// 	if (whereFilters[field]) {
		// 		const date = whereFilters[field] as string
		// 		// Basic check for YYYY-MM-DD format
		// 		if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
		// 			whereFilters[field] = {
		// 				[Op.between]: [`${date} 00:00:00`, `${date} 23:59:59.999`]
		// 			}
		// 		}
		// 	}
		// }

		if ('shipmentDate' in whereFilters) {
			delete whereFilters.shipmentDate
			const date = criteria.obtainFilterValue('shipmentDate') as unknown as string
			const formatDat = new Date(date)
			whereFilters.shipmentDate = {
				[Op.eq]: formatDat
			}
		}
		if ('deliveryDate' in whereFilters) {
			delete whereFilters.deliveryDate
			const date = criteria.obtainFilterValue('deliveryDate') as unknown as string
			const formatDat = new Date(date)
			whereFilters.deliveryDate = {
				[Op.eq]: formatDat
			}
		}

		// --- Dynamic Filter Application ---
		// Accumulate all device-related filters into the 'deviceWhere' object.
		if ('deviceId' in whereFilters) {
			shipmentDeviceInclude.where = { deviceId: whereFilters.deviceId }
			shipmentDeviceInclude.required = true
			delete whereFilters.deviceId
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
			sentBy: ['fromUser', 'employee', 'name'],
			receivedBy: ['toEmployee', 'name'],
			origin: ['originLocation', 'name'],
			destination: ['destinationLocation', 'name'],
			deviceId: ['shipmentDevice', 'deviceId']
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
