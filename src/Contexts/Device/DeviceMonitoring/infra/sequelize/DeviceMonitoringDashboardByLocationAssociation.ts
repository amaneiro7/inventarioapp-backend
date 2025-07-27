import { Op, type FindOptions, type IncludeOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

/**
 * A utility class to build the complex Sequelize FindOptions for the
 * Device Monitoring Dashboard by Location.
 */
export class DeviceMonitoringDashboardByLocationAssociation {
	/**
	 * Constructs a dynamic and complex FindOptions object for Sequelize based on the provided criteria.
	 * This method builds a deeply nested query to join multiple tables and aggregate device counts
	 * by their location hierarchy and status.
	 *
	 * @param criteria The criteria object containing filters.
	 * @param options The base FindOptions to be modified.
	 * @returns A fully configured FindOptions object ready for a Sequelize query.
	 */
	static buildDashboardFindOptions(criteria: Criteria, options: FindOptions): FindOptions {
		// Define the nested include structure using named variables for clarity and type safety.
		// This avoids brittle, index-based access (e.g., include[0].include[1]) and `as any` casts.

		// Level 5 (Deepest)
		const administrativeRegionInclude: IncludeOptions = {
			association: 'administrativeRegion',
			required: true,
			attributes: []
		}

		// Level 4
		const regionInclude: IncludeOptions = {
			association: 'region',
			required: true,
			attributes: [],
			include: [administrativeRegionInclude]
		}

		// Level 3
		const stateInclude: IncludeOptions = {
			association: 'state',
			required: true,
			attributes: [],
			include: [regionInclude]
		}

		// Level 2
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
		const typeOfSiteInclude: IncludeOptions = {
			association: 'typeOfSite',
			attributes: []
		}

		// Level 1
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
		const employeeInclude: IncludeOptions = {
			association: 'employee',
			attributes: [],
			include: [{ association: 'vicepresidenciaEjecutiva', attributes: [] }]
		}

		// Level 0 (Root)
		const deviceInclude: IncludeOptions = {
			association: 'device',
			where: { statusId: StatusOptions.INUSE },
			required: true,
			include: [computerInclude, locationInclude, employeeInclude]
		}

		// Configure the main options object
		options.attributes = [
			[sequelize.col('status'), 'statusName'],
			[sequelize.col('device.location.site.city.state.region.administrativeRegion.name'), 'admRegionName'],
			[sequelize.col('device.location.site.name'), 'siteName'],
			[sequelize.col('device.location.name'), 'locationName'],
			[sequelize.col('device.employee.vicepresidenciaEjecutiva.name'), 'vpeName'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		]
		options.include = [deviceInclude]

		// CRITICAL FIX: The GROUP BY clause must match the non-aggregated columns in attributes.
		// The original `device.id` was incorrect and prevented proper counting.
		options.group = [
			sequelize.col('status'),
			sequelize.col('device.id'),
			sequelize.col('device.location.site.city.state.region.administrativeRegion.name'),
			sequelize.col('device.location.site.name'),
			sequelize.col('device.location.name'),
			sequelize.col('device.employee.vicepresidenciaEjecutiva.name')
		]

		options.raw = true

		// --- Dynamic Filter Application ---
		// This section dynamically adds WHERE clauses to the appropriate include objects.

		if (!criteria.searchValueInArray('status')) {
			options.where = {
				...options.where,
				status: { [Op.ne]: MonitoringStatuses.NOTAVAILABLE }
			}
		}

		const whereFilters = options.where ?? {}

		// Filter by computer name
		if ('computerName' in whereFilters) {
			computerInclude.where = { ...computerInclude.where, computerName: whereFilters.computerName }
			delete whereFilters.computerName
		}

		// Filter by IP address (using safe iLike operator)
		if ('ipAddress' in whereFilters) {
			const ipAddress = whereFilters.ipAddress as string
			computerInclude.where = {
				...computerInclude.where,
				ipAddress: { [Op.iLike]: `%${ipAddress}%` }
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

		// Set the final, cleaned-up where clause
		options.where = whereFilters

		// Add ordering for consistent results
		options.order = [
			['admRegionName', 'ASC'],
			['siteName', 'ASC'],
			['locationName', 'ASC']
		]

		return options
	}
}
