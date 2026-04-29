import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import type { FindOptions, IncludeOptions } from 'sequelize'
import type { Criteria } from '../../../../../Shared/domain/criteria/Criteria'

export class ComputerCountBrandDashboardAssociation {
	static buildDashboardFindOptions(criteria: Criteria, options: FindOptions): FindOptions {
		const mainCategoryInclude: IncludeOptions = {
			association: 'mainCategory',
			attributes: []
		}
		const categoryInclude: IncludeOptions = {
			association: 'category',
			attributes: [],
			include: [mainCategoryInclude]
		}

		const brandInclude: IncludeOptions = { association: 'brand', attributes: [] }
		const modelInclude: IncludeOptions = { association: 'model', attributes: [] }
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
			include: [regionInclude],
			attributes: []
		}
		const cityInclude: IncludeOptions = {
			association: 'city',
			required: true,
			include: [stateInclude],
			attributes: []
		}
		const siteInclude: IncludeOptions = {
			association: 'site',
			required: true,
			include: [cityInclude],
			attributes: []
		}
		const typeOfSiteInclude: IncludeOptions = { association: 'typeOfSite', attributes: [] }
		const locationInclude: IncludeOptions = {
			association: 'location',
			attributes: [],
			include: [typeOfSiteInclude, siteInclude]
		}

		options.include = [categoryInclude, brandInclude, modelInclude, locationInclude]

		options.attributes = [
			[sequelize.col('brand.name'), 'brandName'],
			[sequelize.col('model.name'), 'modelName'],
			[sequelize.col('category.name'), 'categoryName'],
			[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		]

		options.group = ['brand.name', 'model.name', 'category.name', 'location.typeOfSite.name']
		options.raw = true
		const whereFilters = { ...options.where } // Clone to avoid direct mutation
		// Poder filtrar por main category
		if ('mainCategoryId' in whereFilters) {
			categoryInclude.required = true
			mainCategoryInclude.where = {
				id: whereFilters.mainCategoryId
			}
			delete whereFilters.mainCategoryId
		}
		// Poder filtrar por main category
		if ('modelName' in whereFilters) {
			modelInclude.where = {
				...(modelInclude.where || {}),
				name: whereFilters.modelName
			}
			delete whereFilters.modelName
		}

		// Poder filtrar por ubicacion - Tipo de sitio
		if ('typeOfSiteId' in whereFilters) {
			locationInclude.required = true
			typeOfSiteInclude.where = {
				id: whereFilters.typeOfSiteId
			}
			delete whereFilters.typeOfSiteId
		}
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

		// Re-assign the modified where clauses back to the options.
		options.where = whereFilters
		options.order = [
			[sequelize.col('brand.name'), 'ASC'],
			[sequelize.col('model.name'), 'ASC']
		]

		return options
	}
}
