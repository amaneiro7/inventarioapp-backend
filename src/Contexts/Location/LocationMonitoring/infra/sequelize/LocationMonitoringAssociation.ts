import { Op, Sequelize, type FindOptions, type IncludeOptions, type Order } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

/**
 * A utility class to build the complex Sequelize FindOptions for general location monitoring searches.
 */
export class LocationMonitoringAssociation {
	/**
	 * Constructs a dynamic and complex FindOptions object for Sequelize based on the provided criteria.
	 *
	 * @param criteria The criteria object containing filters and ordering.
	 * @param options The base FindOptions to be modified.
	 * @returns A fully configured FindOptions object.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		// Define the nested include structure using named variables for clarity and type safety.
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

		const locationInclude: IncludeOptions = {
			association: 'location',
			required: true,
			where: {
				locationStatusId: LocationStatusOptions.OPERATIONAL,
				subnet: { [Op.ne]: null }
			},
			include: [typeOfSiteInclude, siteInclude]
		}

		options.include = [locationInclude]

		// --- Dynamic Filter Application ---
		if (!criteria.searchValueInArray('status')) {
			options.where = { ...options.where, status: { [Op.ne]: MonitoringStatuses.NOTAVAILABLE } }
		}

		const whereFilters = options.where ?? {}
		const locationWhereFilters = locationInclude.where ?? {}

		try {
			if ('subnet' in whereFilters) {
				const subnet = whereFilters.subnet as string
				const symbol = Object.getOwnPropertySymbols(subnet)[0]
				const value: string = subnet[symbol] as string

				locationWhereFilters.subnet = Sequelize.literal(`subnet::text ILIKE '%${value}%'`)
				delete whereFilters.subnet
			}
		} catch (error) {
			console.log('hola')
		}

		if ('typeOfSiteId' in whereFilters) {
			locationWhereFilters.typeOfSiteId = whereFilters.typeOfSiteId
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

		// Re-assign the modified where clauses
		options.where = whereFilters
		locationInclude.where = locationWhereFilters

		// --- Order Transformation ---
		options.order = this.transformOrder(options.order)

		return options
	}

	/**
	 * Transforms a simple order format into a nested format for Sequelize.
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

		// The Sequelize `Order` type from the library allows for these nested arrays automatically,
		// so we can leverage that without creating a new complex type if the direct `Order` type is sufficient.
		// However, if we want to be very specific about the *structure* we are building:
		const transformedOrder: (string | string[])[] = (order as Array<[string, string]>).map(([field, direction]) => {
			const mappedPath = orderMap[field]
			if (mappedPath) {
				// For nested paths, append the direction to the path array
				return [...mappedPath, direction]
			} else {
				// For top-level fields, keep it as [field, direction]
				return [field, direction]
			}
		})

		// The `Order` type from Sequelize's `index.d.ts` is a union that includes `Array<string | OrderItem>`,
		// where OrderItem can be `[string, string]`, `[string, Order]` or `[Model, string]` etc.
		// So `Array<string[]>` or `Array<[string, string]>` fits into `Order`.
		return transformedOrder as Order // Cast back to Order to satisfy the return type
	}
}
