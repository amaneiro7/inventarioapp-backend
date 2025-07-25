import { type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class SiteAssociation {
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where }
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

		options.include = [cityInclude]

		// Poder filtrar por estado
		if ('stateId' in whereFilters) {
			stateInclude.where = {
				id: whereFilters.stateId
			}

			delete whereFilters?.stateId
		}

		// Poder filtrar por region
		if ('regionId' in whereFilters) {
			regionInclude.where = {
				id: whereFilters.regionId
			}

			delete whereFilters?.regionId
		}
		// Poder filtrar por region administrativa
		if ('administrativeRegionId' in whereFilters) {
			administrativeRegionInclude.where = {
				id: whereFilters.administrativeRegionId
			}

			delete whereFilters?.administrativeRegionId
		}

		// Re-assign the modified where clauses back to the options.
		options.where = whereFilters
		return options
	}
}
