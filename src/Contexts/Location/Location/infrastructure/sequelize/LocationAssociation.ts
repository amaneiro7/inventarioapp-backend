import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type FindOptions, type IncludeOptions } from 'sequelize'

export class LocationAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where } // Clone to avoid direct mutation

		// ------------------- 1. INCLUDES DEFINITION -------------------
		// Define all possible associations that can be included in the query.
		// These are later referenced by the filter configuration.
		const administrativeRegionInclude: IncludeOptions = {
			association: 'administrativeRegion',
			required: true
		}
		const regionInclude: IncludeOptions = {
			association: 'region',
			required: true,
			include: [administrativeRegionInclude]
		}
		const stateInclude: IncludeOptions = { association: 'state', required: true, include: [regionInclude] }
		const cityInclude: IncludeOptions = { association: 'city', required: true, include: [stateInclude] }
		const siteInclude: IncludeOptions = { association: 'site', required: true, include: [cityInclude] }
		const typeOfSiteInclude: IncludeOptions = { association: 'typeOfSite' }
		const locationStatusInclude: IncludeOptions = { association: 'locationStatus' }

		options.include = [siteInclude, typeOfSiteInclude, locationStatusInclude]
		// Poder filtrar por direccion
		if ('subnet' in whereFilters) {
			const subnetFilter = whereFilters.subnet as { [key: symbol]: string }
			const subnetValue = subnetFilter[Object.getOwnPropertySymbols(subnetFilter)[0]]

			whereFilters.subnet = sequelize.literal(`subnet::text ILIKE '%${subnetValue}%'`)
		}

		// Poder filtrar por ciudad
		if ('cityId' in whereFilters) {
			cityInclude.where = {
				id: whereFilters.cityId
			}

			delete whereFilters.cityId
		}
		// Poder filtrar por estado
		if ('stateId' in whereFilters) {
			stateInclude.where = {
				id: whereFilters.stateId
			}

			delete whereFilters.stateId
		}
		// Poder filtrar por region
		if ('regionId' in whereFilters) {
			regionInclude.where = {
				id: whereFilters.regionId
			}

			delete whereFilters.regionId
		}
		// Poder filtrar por region Administrativa
		if ('administrativeRegionId' in whereFilters) {
			administrativeRegionInclude.where = {
				id: whereFilters.administrativeRegionId
			}

			delete whereFilters.administrativeRegionId
		}

		return options
	}
}
