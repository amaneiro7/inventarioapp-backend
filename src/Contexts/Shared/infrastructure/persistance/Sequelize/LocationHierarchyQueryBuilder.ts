import { type IncludeOptions, type WhereOptions } from 'sequelize'

/**
 * @class LocationHierarchyQueryBuilder
 * @description A builder class to construct the common, deeply nested Sequelize 'include' options
 * for the geographical location hierarchy (Site -> City -> State -> Region -> AdmRegion).
 * It also provides a centralized way to apply filters to this hierarchy.
 */
export class LocationHierarchyQueryBuilder {
	// These properties hold the state of the include objects, allowing filters to be added.
	public readonly administrativeRegionInclude: IncludeOptions = {
		association: 'administrativeRegion',
		required: true,
		attributes: []
	}
	public readonly regionInclude: IncludeOptions = {
		association: 'region',
		required: true,
		include: [this.administrativeRegionInclude]
	}
	public readonly stateInclude: IncludeOptions = {
		association: 'state',
		required: true,
		include: [this.regionInclude]
	}
	public readonly cityInclude: IncludeOptions = { association: 'city', required: true, include: [this.stateInclude] }
	public readonly siteInclude: IncludeOptions = { association: 'site', required: true, include: [this.cityInclude] }
	public readonly typeOfSiteInclude: IncludeOptions = { association: 'typeOfSite', attributes: [] }

	/**
	 * Returns the top-level include options for the hierarchy.
	 * @returns {IncludeOptions[]} An array containing the site and typeOfSite includes.
	 */
	public getIncludes(): IncludeOptions[] {
		return [this.typeOfSiteInclude, this.siteInclude]
	}

	/**
	 * Applies a set of where filters to the correct levels of the location hierarchy.
	 * @param {WhereOptions} whereFilters - An object containing filter keys and values that will be destructured.
	 */
	public applyFilters(whereFilters: WhereOptions): void {
		if ('siteId' in whereFilters) {
			this.siteInclude.where = { id: whereFilters.siteId }
			delete whereFilters.siteId
		}
		if ('cityId' in whereFilters) {
			this.cityInclude.where = { id: whereFilters.cityId }
			delete whereFilters.cityId
		}
		if ('stateId' in whereFilters) {
			this.stateInclude.where = { id: whereFilters.stateId }
			delete whereFilters.stateId
		}
		if ('stateName' in whereFilters) {
			this.stateInclude.where = { ...this.stateInclude.where, name: whereFilters.stateName }
			delete whereFilters.stateName
		}
		if ('regionId' in whereFilters) {
			this.regionInclude.where = { id: whereFilters.regionId }
			delete whereFilters.regionId
		}
		if ('administrativeRegionId' in whereFilters) {
			this.administrativeRegionInclude.where = { id: whereFilters.administrativeRegionId }
			delete whereFilters.administrativeRegionId
		}
	}
}
