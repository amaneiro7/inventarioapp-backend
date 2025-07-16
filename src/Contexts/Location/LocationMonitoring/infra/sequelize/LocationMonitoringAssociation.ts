import { Op, WhereOptions, type FindOptions, type IncludeOptions, type Order } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

/**
 * @class LocationMonitoringAssociation
 * @description A utility class to build the complex Sequelize FindOptions for general location monitoring searches.
 * It encapsulates the logic for creating nested joins and applying dynamic filters and ordering.
 */
export class LocationMonitoringAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Constructs a dynamic and complex FindOptions object for Sequelize based on the provided criteria.
	 * This method builds a deeply nested query to join from LocationMonitoring to the full geographical hierarchy.
	 *
	 * @param {Criteria} criteria The criteria object containing filters and ordering.
	 * @param {FindOptions} options The base FindOptions to be modified.
	 * @returns {FindOptions} A fully configured FindOptions object ready for a Sequelize query.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		// --- 1. Define the nested include structure ---
		// Using named variables for each include makes the structure clear and avoids magic indexes.
		// This improves readability and makes the code less prone to errors when modified.
		const administrativeRegionInclude: IncludeOptions = {
			association: 'administrativeRegion',
			required: true,
			attributes: []
		}
		const regionInclude: IncludeOptions = {
			association: 'region',
			required: true,
			include: [administrativeRegionInclude]
		}
		const stateInclude: IncludeOptions = { association: 'state', required: true, include: [regionInclude] }
		const cityInclude: IncludeOptions = { association: 'city', required: true, include: [stateInclude] }
		const siteInclude: IncludeOptions = { association: 'site', required: true, include: [cityInclude] }
		const typeOfSiteInclude: IncludeOptions = { association: 'typeOfSite', attributes: [] }

		// Explicitly type the `where` clause for `location` to allow dynamic properties to be added later.
		const locationWhere: WhereOptions = {
			locationStatusId: LocationStatusOptions.OPERATIONAL,
			subnet: { [Op.ne]: null }
		}

		const locationInclude: IncludeOptions = {
			association: 'location',
			required: true,
			where: locationWhere, // Assign the typed where object
			include: [typeOfSiteInclude, siteInclude]
		}

		options.include = [locationInclude]

		// --- 2. Dynamic Filter Application ---
		// This section applies filters from the criteria to the correct level of the nested include structure.

		// Apply a top-level status filter if not already present in the criteria.
		if (!criteria.searchValueInArray('status')) {
			options.where = { ...options.where, status: { [Op.ne]: MonitoringStatuses.NOTAVAILABLE } }
		}

		const whereFilters = options.where ?? {}

		// Handle subnet filter safely using Op.iLike to prevent SQL injection.
		if ('subnet' in whereFilters) {
			const subnetFilter = whereFilters.subnet as { [key: symbol]: string }
			const subnetValue = subnetFilter[Object.getOwnPropertySymbols(subnetFilter)[0]]
			locationWhere.subnet = { [Op.iLike]: subnetValue }
			delete whereFilters.subnet
		}

		// Apply filters to their corresponding association.
		if ('typeOfSiteId' in whereFilters) {
			locationWhere.typeOfSiteId = whereFilters.typeOfSiteId
			delete whereFilters.typeOfSiteId
		}

		if ('siteId' in whereFilters) {
			siteInclude.where = { id: whereFilters.siteId }
			delete whereFilters.siteId
		}

		if ('cityId' in whereFilters) {
			cityInclude.where = { id: whereFilters.cityId }
			delete whereFilters.cityId
		}

		if ('stateId' in whereFilters) {
			stateInclude.where = { id: whereFilters.stateId }
			delete whereFilters.stateId
		}

		if ('stateName' in whereFilters) {
			stateInclude.where = { ...stateInclude.where, name: whereFilters.stateName }
			delete whereFilters.stateName
		}

		if ('regionId' in whereFilters) {
			regionInclude.where = { id: whereFilters.regionId }
			delete whereFilters.regionId
		}

		if ('administrativeRegionId' in whereFilters) {
			administrativeRegionInclude.where = { id: whereFilters.administrativeRegionId }
			delete whereFilters.administrativeRegionId
		}

		// Re-assign the modified where clauses back to the options.
		options.where = whereFilters

		// --- 3. Order Transformation ---
		// The `transformOrder` method correctly maps frontend field names (e.g., 'cityId')
		// to the nested Sequelize structure required for sorting on associated tables.
		options.order = this.transformOrder(options.order)

		return options
	}

	/**
	 * @private
	 * @static
	 * @method transformOrder
	 * @description Transforms a simple order format (e.g., ['cityId', 'ASC']) into a nested format
	 * that Sequelize can use for ordering on associated tables (e.g., ['location', 'site', 'city', 'name', 'ASC']).
	 *
	 * @param {Order | undefined} order The order configuration from the criteria.
	 * @returns {Order | undefined} A Sequelize-compatible nested order configuration.
	 */
	private static transformOrder(order: Order | undefined): Order | undefined {
		if (!order || !Array.isArray(order) || order.length === 0) return undefined

		const orderMap: Record<string, string[]> = {
			locationId: ['location', 'name'],
			cityId: ['location', 'site', 'city', 'name'],
			stateId: ['location', 'site', 'city', 'state', 'name'],
			regionId: ['location', 'site', 'city', 'state', 'region', 'name'],
			administrativeRegionId: ['location', 'site', 'city', 'state', 'region', 'administrativeRegion', 'name'],
			subnet: ['location', 'subnet'],
			name: ['location', 'name']
		}

		const transformedOrder = (order as Array<[string, string]>).map(([field, direction]) => {
			const mappedPath = orderMap[field]
			// If a mapping exists, use the nested path. Otherwise, use the original field name.
			return mappedPath ? [...mappedPath, direction] : [field, direction]
		})

		return transformedOrder as Order
	}
}
