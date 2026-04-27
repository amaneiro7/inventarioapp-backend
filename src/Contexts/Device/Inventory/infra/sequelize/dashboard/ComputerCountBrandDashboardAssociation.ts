import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import type { FindOptions, IncludeOptions } from 'sequelize'
import type { Criteria } from '../../../../../Shared/domain/criteria/Criteria'

export class ComputerCountBrandDashboardAssociation {
	static buildDashboardFindOptions(criteria: Criteria, options: FindOptions): FindOptions {
		const categoryInclude: IncludeOptions = {
			association: 'category',
			attributes: []
		}

		const brandInclude: IncludeOptions = { association: 'brand', attributes: [] }
		const modelInclude: IncludeOptions = { association: 'model', attributes: [] }
		const locationInclude: IncludeOptions = {
			association: 'location',
			attributes: [],
			include: [{ association: 'typeOfSite', attributes: [] }]
		}

		options.include = [categoryInclude, brandInclude, modelInclude, locationInclude]

		options.attributes = [
			[sequelize.col('brand.name'), 'brandName'],
			[sequelize.col('model.name'), 'modelName'],
			[sequelize.col('category.name'), 'categoryName'],
			[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
			[sequelize.fn('COUNT', sequelize.col('device.id')), 'count']
		]

		options.group = ['brand.name', 'model.name', 'category.name', 'location.typeOfSite.name']
		options.raw = true

		return options
	}
}
