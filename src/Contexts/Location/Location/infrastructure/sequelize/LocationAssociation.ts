import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type FindOptions, type IncludeOptions } from 'sequelize'

/**
 * A utility class for handling associations in Location queries.
 */
export class LocationAssociation {
	/**
	 * Converts filter criteria into Sequelize FindOptions.
	 *
	 * @param {Criteria} criteria - The criteria to convert.
	 * @param {FindOptions} options - The initial find options.
	 * @returns {FindOptions} The updated find options with associations.
	 */
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
		const ispLinkInclude: IncludeOptions = {
			association: 'ispLinks',
			attributes: ['id', 'name'],
			through: { attributes: [] } // Exclude attributes from the join table
		}

		// ------------------- 2. CONFIGURACIÓN DE FILTROS -------------------
		// Para cada posible filtro, verificamos si está presente en los whereFilters.
		// Si lo está, configuramos el include correspondiente y eliminamos el filtro del where principal.
		// Esto asegura que los filtros se apliquen correctamente a través de las asociaciones.

		options.include = [siteInclude, typeOfSiteInclude, locationStatusInclude, ispLinkInclude]

		if ('ispLinkId' in whereFilters) {
			ispLinkInclude.where = { id: whereFilters.ispLinkId }
			delete whereFilters.ispLinkId
		}

		// Configuración de filtros para asociaciones anidadas (ejemplo: city -> state -> region -> administrativeRegion)
		if ('administrativeRegionId' in whereFilters) {
			administrativeRegionInclude.where = {
				id: whereFilters.administrativeRegionId
			}

			delete whereFilters.administrativeRegionId
		}
		if ('regionId' in whereFilters) {
			regionInclude.where = {
				id: whereFilters.regionId
			}

			delete whereFilters.regionId
		}
		if ('stateId' in whereFilters) {
			stateInclude.where = {
				id: whereFilters.stateId
			}

			delete whereFilters.stateId
		}
		if ('cityId' in whereFilters) {
			cityInclude.where = {
				id: whereFilters.cityId
			}

			delete whereFilters.cityId
		}

		// Poder filtrar por direccion
		if ('subnet' in whereFilters) {
			const subnetFilter = whereFilters.subnet as { [key: symbol]: string }
			const subnetValue = subnetFilter[Object.getOwnPropertySymbols(subnetFilter)[0]]

			whereFilters.subnet = sequelize.literal(`subnet::text ILIKE '%${subnetValue}%'`)
		}

		options.where = whereFilters

		return options
	}
}
