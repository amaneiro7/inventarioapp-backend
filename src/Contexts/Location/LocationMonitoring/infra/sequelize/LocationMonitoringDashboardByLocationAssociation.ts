import { Op, type FindOptions, type IncludeOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

/**
 * A utility class to build the complex Sequelize FindOptions for the
 * Location Monitoring Dashboard by Location.
 */
export class LocationMonitoringDashboardByLocationAssociation {
	/**
	 * Constructs a dynamic FindOptions object for Sequelize based on the provided criteria.
	 *
	 * @param criteria The criteria object containing filters.
	 * @param options The base FindOptions to be modified.
	 * @returns A fully configured FindOptions object.
	 */
	static buildDashboardFindOptions(criteria: Criteria, options: FindOptions): FindOptions {
		// Define the nested include structure using named variables for clarity and type safety.
		const administrativeRegionInclude: IncludeOptions = { association: 'administrativeRegion', required: true, attributes: [] }
		const regionInclude: IncludeOptions = { association: 'region', required: true, attributes: [], include: [administrativeRegionInclude] }
		const stateInclude: IncludeOptions = { association: 'state', required: true, attributes: [], include: [regionInclude] }
		const cityInclude: IncludeOptions = { association: 'city', required: true, attributes: [], include: [stateInclude] }
		const siteInclude: IncludeOptions = { association: 'site', required: true, attributes: [], include: [cityInclude] }
		const typeOfSiteInclude: IncludeOptions = { association: 'typeOfSite', attributes: [] }

		const locationInclude: IncludeOptions = {
			association: 'location',
			required: true,
			where: {
				locationStatusId: LocationStatusOptions.OPERATIONAL,
				subnet: { [Op.ne]: null }
			},
			attributes: [],
			include: [typeOfSiteInclude, siteInclude]
		}

		// Configure the main options object
		options.attributes = [
			[sequelize.col('status'), 'statusName'],
			[sequelize.col('location.site.city.state.region.administrativeRegion.name'), 'admRegionName'],
			[sequelize.col('location.site.name'), 'siteName'],
			[sequelize.col('location.name'), 'locationName'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		]
		options.include = [locationInclude]

		// CRITICAL FIX: The GROUP BY clause must match the non-aggregated columns.
		options.group = [
			sequelize.col('status'),
			sequelize.col('location.site.city.state.region.administrativeRegion.name'),
			sequelize.col('location.site.name'),
			sequelize.col('location.name')
		]
		options.raw = true

		// --- Dynamic Filter Application ---
		if (!criteria.searchValueInArray('status')) {
			options.where = { ...options.where, status: { [Op.ne]: MonitoringStatuses.NOTAVAILABLE } }
		}

		const whereFilters = options.where ?? {}
		const locationWhereFilters = locationInclude.where ?? {}

		if ('name' in whereFilters) {
			locationWhereFilters.name = whereFilters.name
			delete whereFilters.name
		}

		if ('subnet' in whereFilters) {
			const subnet = whereFilters.subnet as string
			locationWhereFilters.subnet = { [Op.iLike]: `%${subnet}%` }
			delete whereFilters.subnet
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

		if ('regionId' in whereFilters) {
			regionInclude.where = { id: whereFilters.regionId }
			delete whereFilters.regionId
		}

		if ('administrativeRegionId' in whereFilters) {
			administrativeRegionInclude.where = { id: whereFilters.administrativeRegionId }
			delete whereFilters.administrativeRegionId
		}

		options.where = whereFilters
		locationInclude.where = locationWhereFilters

		// Add ordering for consistent results
		options.order = [
			['admRegionName', 'ASC'],
			['siteName', 'ASC'],
			['locationName', 'ASC']
		]

		return options
	}
}
