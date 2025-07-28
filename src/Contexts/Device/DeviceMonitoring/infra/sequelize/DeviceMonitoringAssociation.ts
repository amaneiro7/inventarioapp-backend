import { Op, type FindOptions, type IncludeOptions, type Order } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

/**
 * A utility class to build the complex Sequelize FindOptions for general device monitoring searches.
 */
export class DeviceMonitoringAssociation {
	/**
	 * Constructs a dynamic and complex FindOptions object for Sequelize based on the provided criteria.
	 * This method is used for fetching detailed device monitoring lists with multiple joins.
	 *
	 * @param criteria The criteria object containing filters and ordering.
	 * @param options The base FindOptions to be modified.
	 * @returns A fully configured FindOptions object.
	 */
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		// Define the nested include structure using named variables for clarity and type safety.
		const administrativeRegionInclude: IncludeOptions = { association: 'administrativeRegion', required: true }
		const regionInclude: IncludeOptions = {
			association: 'region',
			required: true,
			include: [administrativeRegionInclude]
		}
		const stateInclude: IncludeOptions = { association: 'state', required: true, include: [regionInclude] }
		const cityInclude: IncludeOptions = { association: 'city', required: true, include: [stateInclude] }
		const siteInclude: IncludeOptions = { association: 'site', required: true, include: [cityInclude] }
		const typeOfSiteInclude: IncludeOptions = { association: 'typeOfSite' }

		const computerInclude: IncludeOptions = {
			association: 'computer',
			where: { ipAddress: { [Op.ne]: null } },
			required: true,
			attributes: ['computerName', 'ipAddress']
		}
		const locationInclude: IncludeOptions = {
			association: 'location',
			required: true,
			include: [typeOfSiteInclude, siteInclude]
		}
		const employeeInclude: IncludeOptions = {
			association: 'employee',
			attributes: ['userName', 'name', 'lastName', 'email'],
			include: [
				{ association: 'directiva', attributes: ['name'] },
				{ association: 'vicepresidenciaEjecutiva', attributes: ['name'] },
				{ association: 'vicepresidencia', attributes: ['name'] },
				{ association: 'departamento', attributes: ['name'] },
				{ association: 'cargo', attributes: ['name'] }
			]
		}

		const deviceInclude: IncludeOptions = {
			association: 'device',
			where: { statusId: StatusOptions.INUSE },
			include: [computerInclude, locationInclude, employeeInclude]
		}

		options.include = [deviceInclude]

		// --- Dynamic Filter Application ---
		if (!criteria.searchValueInArray('status')) {
			options.where = { ...options.where, status: { [Op.ne]: MonitoringStatuses.NOTAVAILABLE } }
		}

		const whereFilters = options.where ?? {}

		if ('computerName' in whereFilters) {
			computerInclude.where = { ...computerInclude.where, computerName: whereFilters.computerName }
			delete whereFilters.computerName
		}

		if ('ipAddress' in whereFilters) {
			const subnetFilter = whereFilters.ipAddress as { [key: symbol]: string }
			const ipAddressValue = subnetFilter[Object.getOwnPropertySymbols(subnetFilter)[0]]

			computerInclude.where = {
				...computerInclude.where,
				ipAddress: sequelize.literal(`ip_address::text ILIKE '%${ipAddressValue}%'`)
			}
			delete whereFilters.ipAddress
		}

		if ('locationName' in whereFilters) {
			locationInclude.where = { ...locationInclude.where, name: whereFilters.locationName }
			delete whereFilters.locationName
		}

		// Location-based filters
		if ('typeOfSiteId' in whereFilters) {
			locationInclude.where = { ...locationInclude.where, typeOfSiteId: whereFilters.typeOfSiteId }
			delete whereFilters.typeOfSiteId
		}
		if ('locationId' in whereFilters) {
			deviceInclude.where = { ...deviceInclude.where, locationId: whereFilters.locationId }
			delete whereFilters.locationId
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
		if ('regionId' in whereFilters) {
			regionInclude.where = { id: whereFilters.regionId }
			delete whereFilters.regionId
		}
		if ('administrativeRegionId' in whereFilters) {
			administrativeRegionInclude.where = { id: whereFilters.administrativeRegionId }
			delete whereFilters.administrativeRegionId
		}

		options.where = whereFilters

		// --- Order Transformation ---
		// The `transformOrder` method correctly maps frontend field names to the nested Sequelize structure.
		options.order = this.transformOrder(options.order)

		return options
	}

	/**
	 * Transforms a simple order format (e.g., ['locationId', 'ASC']) into a nested format
	 * that Sequelize can use for ordering on associated tables.
	 *
	 * @param order The order configuration from the criteria.
	 * @returns A Sequelize-compatible nested order configuration.
	 */
	private static transformOrder(order: Order | undefined): Order | undefined {
		if (!order || !Array.isArray(order) || order.length === 0) return undefined

		// This map defines the path to the sortable field within the nested include structure.
		const orderMap: Record<string, string[]> = {
			locationId: ['device', 'location', 'name'],
			cityId: ['device', 'location', 'site', 'city', 'name'],
			stateId: ['device', 'location', 'site', 'city', 'state', 'name'],
			regionId: ['device', 'location', 'site', 'city', 'state', 'region', 'name'],
			administrativeRegionId: [
				'device',
				'location',
				'site',
				'city',
				'state',
				'region',
				'administrativeRegion',
				'name'
			],
			ipAddress: ['device', 'computer', 'ipAddress'],
			computerName: ['device', 'computer', 'computerName'],
			status: ['status'],
			id: ['id']
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
