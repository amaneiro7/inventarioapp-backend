import { Op } from 'sequelize'
import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { StatusOptions } from '../../../../Status/domain/StatusOptions'
import { MainCategoryList } from '../../../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { type RawBrandCountData, type AggregatedBrandData } from './types'

/**
 * @function fetchAndAggregateBrandData
 * @description Fetches and aggregates computer data by brand from the database.
 * @returns {Promise<AggregatedBrandData[]>} A promise that resolves to the aggregated brand data.
 */
export async function fetchAndAggregateBrandData(): Promise<AggregatedBrandData[]> {
	const result = (await DeviceModel.findAll({
		attributes: [
			'serial',
			[sequelize.col('category.name'), 'categoryName'],
			[sequelize.col('brand.name'), 'brandName'],
			[sequelize.col('model.name'), 'modelName'],
			[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		],
		where: {
			statusId: {
				[Op.ne]: StatusOptions.DESINCORPORADO
			}
		},
		include: [
			{
				association: 'category',
				attributes: [],
				where: { mainCategoryId: MainCategoryList.COMPUTER }
			},
			{ association: 'brand', attributes: [] },
			{ association: 'model', attributes: [] },
			{
				association: 'location',
				attributes: [],
				include: [{ association: 'typeOfSite', attributes: [] }]
			}
		],
		group: ['serial', 'category.name', 'brand.name', 'model.name', 'location.typeOfSite.name'],
		order: [
			[sequelize.col('brand.name'), 'ASC'],
			[sequelize.col('model.name'), 'ASC']
		],
		raw: true
	})) as unknown as RawBrandCountData[]

	return transformBrandData(result)
}

/**
 * @function transformBrandData
 * @description Transforms raw brand data into a structured format for the dashboard.
 * @param {RawBrandCountData[]} rawData - The raw data from the database.
 * @returns {AggregatedBrandData[]} The transformed and sorted brand data.
 */
function transformBrandData(rawData: RawBrandCountData[]): AggregatedBrandData[] {
	const brandMap = new Map<string, AggregatedBrandData>()

	for (const item of rawData) {
		const { brandName, modelName, typeOfSiteName, categoryName, count } = item
		const countAsNumber = Number(count)

		// Ensure brand entry exists
		if (!brandMap.has(brandName)) {
			brandMap.set(brandName, { name: brandName, count: 0, model: [] })
		}
		const brandEntry = brandMap.get(brandName)!
		brandEntry.count += countAsNumber

		// Find or create model entry
		let modelEntry = brandEntry.model.find(m => m.name === modelName)
		if (!modelEntry) {
			modelEntry = { name: modelName, category: categoryName, count: 0, typeOfSite: [] }
			brandEntry.model.push(modelEntry)
		}
		modelEntry.count += countAsNumber

		// Find or create typeOfSite entry
		const existingTypeOfSite = modelEntry.typeOfSite.find(ts => ts.name === typeOfSiteName)
		if (existingTypeOfSite) {
			existingTypeOfSite.count += countAsNumber
		} else {
			modelEntry.typeOfSite.push({ name: typeOfSiteName, count: countAsNumber })
		}
	}

	// Convert map to array and sort nested structures
	const transformedData = Array.from(brandMap.values()).map(brand => {
		brand.model.sort((a, b) => a.name.localeCompare(b.name))
		for (const model of brand.model) {
			model.typeOfSite.sort((a, b) => a.name.localeCompare(b.name))
		}
		return brand
	})

	return transformedData.sort((a, b) => a.name.localeCompare(b.name))
}
