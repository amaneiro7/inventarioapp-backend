import { type Order, type FindOptions, type IncludeOptions, Op } from 'sequelize'
import type { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
/**
 * @class EmployeeAssociation
 * @description A utility class to build complex Sequelize query options for the Employee model.
 * It handles the dynamic construction of deeply nested includes and applies filters and order clauses to them.
 */
export class EmployeeAssociation {
	/**
	 * @static
	 * @method convertFilter
	 * @description Modifies a Sequelize FindOptions object to include Employee associations.
	 * @param {Criteria} criteria The criteria object.
	 * @param {FindOptions} options The base Sequelize options object to be modified.
	 * @returns {FindOptions} The enhanced Sequelize FindOptions object with includes and nested filters.
	 */ static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where } // Clone to avoid direct mutation

		// ------------------- 1. INCLUDES DEFINITION -------------------
		// Define all possible associations that can be included in the query.
		// These are later referenced by the filter configuration.
		const unidadInclude: IncludeOptions = {
			association: 'unidad',
			attributes: ['id', 'name']
		}

		const cargoInclude: IncludeOptions = {
			association: 'cargo',
			attributes: ['id', 'name']
		}

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
		const locationInclude: IncludeOptions = {
			association: 'location',
			include: [siteInclude]
		}
		const deviceInclude: IncludeOptions = {
			association: 'devices',
			include: [
				'category',
				'brand',
				'model',
				{
					association: 'computer',
					attributes: ['computerName', 'macAddress', 'ipAddress', 'memoryRam', 'memoryRamCapacity'],
					include: [
						'operatingSystem',
						'processor',
						'hardDriveType',
						'hardDriveCapacity',
						'operatingSystemArq'
					]
				}
			],
			separate: true
		}
		options.include = [unidadInclude, cargoInclude, locationInclude, deviceInclude]

		// Poder filtrar por ubicacion - por sitio
		if ('siteId' in whereFilters) {
			locationInclude.required = true
			siteInclude.where = {
				id: whereFilters.siteId
			}
			delete whereFilters?.siteId
		}

		// Poder filtrar por ciudad
		if ('cityId' in whereFilters) {
			locationInclude.required = true
			cityInclude.where = {
				id: whereFilters.cityId
			}

			delete whereFilters?.cityId
		}

		// Poder filtrar por estado
		if ('stateId' in whereFilters) {
			locationInclude.required = true
			stateInclude.where = {
				id: whereFilters.stateId
			}

			delete whereFilters?.stateId
		}

		// Poder filtrar por region
		if ('regionId' in whereFilters) {
			locationInclude.required = true
			regionInclude.where = {
				id: whereFilters.regionId
			}

			delete whereFilters?.regionId
		}
		// Poder filtrar por region administrativa
		if ('administrativeRegionId' in whereFilters) {
			locationInclude.required = true
			administrativeRegionInclude.where = {
				id: whereFilters.administrativeRegionId
			}

			delete whereFilters?.administrativeRegionId
		}

		//Filtrar por unidad (jerárquicamente)
		if ('unidadId' in whereFilters) {
			// Hacemos que la inclusión de la unidad sea requerida para aplicar el filtro.
			unidadInclude.required = true
			const unidadIdFilter = whereFilters.unidadId as { [key: symbol]: string }
			const targetUnidadId = unidadIdFilter[Object.getOwnPropertySymbols(unidadIdFilter)[0]]

			// Implementación de búsqueda jerárquica recursiva:
			// Esto busca el ID de la unidad y todos sus descendientes (sub-niveles)
			unidadInclude.where = {
				id: {
					[Op.in]: sequelize.literal(`(
						WITH RECURSIVE subordinates AS (
							SELECT id FROM unidades WHERE id = '${targetUnidadId}'
							UNION
							SELECT u.id FROM unidades u
							INNER JOIN subordinates s ON s.id = u.parent_id
						)
						SELECT id FROM subordinates
					)`)
				}
			}
			delete whereFilters?.unidadId
		}

		// Re-assign the modified where clauses back to the options.
		options.where = whereFilters

		// --- 3. Order Transformation ---
		// The `transformOrder` method correctly maps frontend field names (e.g., 'cityId')
		// to the nested Sequelize structure required for sorting on associated tables.
		options.order = this.transformOrder(options.order)
		return options
	}

	private static transformOrder(order: Order | undefined): Order | undefined {
		if (!order || !Array.isArray(order) || order.length === 0) return undefined

		const orderMap: Record<string, string[]> = {
			cargoId: ['cargo', 'name'],
			unidadId: ['unidad', 'name'],
			locationId: ['location', 'name'],
			cityId: ['location', 'site', 'city', 'name'],
			stateId: ['location', 'site', 'city', 'state', 'name'],
			regionId: ['location', 'site', 'city', 'state', 'region', 'name'],
			administrativeRegionId: ['location', 'site', 'city', 'state', 'region', 'administrativeRegion', 'name']
		}
		const transformedOrder = (order as Array<[string, string]>).map(([field, direction]) => {
			const mappedPath = orderMap[field]
			// If a mapping exists, use the nested path. Otherwise, use the original field name.
			return mappedPath ? [...mappedPath, direction] : [field, direction]
		})

		return transformedOrder as Order
	}
}
