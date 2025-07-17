import { Op, type WhereOptions, type FindOptions, type IncludeOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

/**
 * A utility class to build the complex Sequelize FindOptions for the Location Monitoring Dashboard.
 */
export class LocationMonitoringDashboardAssociation {
	/**
	 * Constructs a dynamic FindOptions object for Sequelize based on the provided criteria.
	 * This query aggregates location counts by their monitoring status.
	 *
	 * @param criteria The criteria object containing filters.
	 * @param options The base FindOptions to be modified.
	 * @returns A fully configured FindOptions object.
	 */
	static buildDashboardFindOptions(criteria: Criteria, options: FindOptions): FindOptions {
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

		// Explicitly type the `where` clause for `location` to allow dynamic properties to be added later.
		const locationWhere: WhereOptions = {
			locationStatusId: LocationStatusOptions.OPERATIONAL,
			subnet: { [Op.ne]: null }
		}

		const locationInclude: IncludeOptions = {
			association: 'location',
			required: true,
			where: locationWhere,
			attributes: [], // No attributes needed, just for joining and filtering
			include: [typeOfSiteInclude, siteInclude]
		}

		// Configure the main options object
		options.attributes = [
			[sequelize.col('status'), 'statusName'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		]
		options.include = [locationInclude]

		// CRITICAL FIX: The GROUP BY clause must only contain the non-aggregated columns.
		// The original inclusion of `location.id` prevented correct counting.
		options.group = [sequelize.col('status')]
		options.raw = true

		// --- 2. Dynamic Filter Application ---
		// This section applies filters from the criteria to the correct level of the nested include structure.

		// Apply a top-level status filter if not already present in the criteria.
		if (!criteria.searchValueInArray('status')) {
			options.where = { ...options.where, status: { [Op.ne]: MonitoringStatuses.NOTAVAILABLE } }
		}

		const whereFilters = options.where ?? {}

		if ('name' in whereFilters) {
			locationWhere.name = whereFilters.name
			delete whereFilters.name
		}

		// Handle subnet filter safely using Op.iLike to prevent SQL injection.
		if ('subnet' in whereFilters) {
			const subnetFilter = whereFilters.subnet as { [key: symbol]: string }
			const subnetValue = subnetFilter[Object.getOwnPropertySymbols(subnetFilter)[0]]
			locationWhere.subnet = sequelize.literal(`subnet::text ILIKE '%${subnetValue}%'`)
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

		return options
	}
}
