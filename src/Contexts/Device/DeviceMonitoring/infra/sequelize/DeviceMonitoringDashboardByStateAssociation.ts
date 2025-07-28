import { Op, type FindOptions, type IncludeOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

/**
 * A utility class to build the complex Sequelize FindOptions for the
 * Device Monitoring Dashboard by State.
 */
export class DeviceMonitoringDashboardByStateAssociation {
	/**
	 * Constructs a dynamic FindOptions object for Sequelize based on the provided criteria.
	 * This query aggregates device counts by their monitoring status and state.
	 *
	 * @param criteria The criteria object containing filters.
	 * @param options The base FindOptions to be modified.
	 * @returns A fully configured FindOptions object.
	 */
	static buildDashboardFindOptions(criteria: Criteria, options: FindOptions): FindOptions {
		// Define the nested include structure using named variables for clarity and type safety.
		const administrativeRegionInclude: IncludeOptions = {
			association: 'administrativeRegion',
			required: true,
			attributes: []
		}
		const regionInclude: IncludeOptions = {
			association: 'region',
			required: true,
			attributes: [],
			include: [administrativeRegionInclude]
		}
		const stateInclude: IncludeOptions = {
			association: 'state',
			required: true,
			attributes: [],
			include: [regionInclude]
		}
		const cityInclude: IncludeOptions = {
			association: 'city',
			required: true,
			attributes: [],
			include: [stateInclude]
		}
		const siteInclude: IncludeOptions = {
			association: 'site',
			required: true,
			attributes: [],
			include: [cityInclude]
		}
		const typeOfSiteInclude: IncludeOptions = { association: 'typeOfSite', attributes: [] }

		const computerInclude: IncludeOptions = {
			association: 'computer',
			where: { ipAddress: { [Op.ne]: null } },
			required: true,
			attributes: []
		}
		const locationInclude: IncludeOptions = {
			association: 'location',
			required: true,
			attributes: [],
			include: [typeOfSiteInclude, siteInclude]
		}

		const deviceInclude: IncludeOptions = {
			association: 'device',
			where: { statusId: StatusOptions.INUSE },
			required: true,
			attributes: [],
			include: [computerInclude, locationInclude]
		}

		// Configure the main options object
		options.attributes = [
			[sequelize.col('status'), 'statusName'],
			[sequelize.col('device.location.site.city.state.name'), 'stateName'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		]
		options.include = [deviceInclude]

		// CRITICAL FIX: The GROUP BY clause must match the non-aggregated columns.
		// The original `device.id` was incorrect and prevented proper counting.
		options.group = [sequelize.col('status'), sequelize.col('device.location.site.city.state.name')]
		options.raw = true

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

		// Add ordering for consistent results
		options.order = [[sequelize.col('device.location.site.city.state.name'), 'ASC']]

		return options
	}
}
