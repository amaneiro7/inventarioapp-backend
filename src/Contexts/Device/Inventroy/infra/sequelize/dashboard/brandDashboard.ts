import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../../Category/MainCategory/domain/MainCategory'
import { type RawBrandCountData, type AggregatedBrandData } from './types'
import { Op } from 'sequelize'
import { StatusOptions } from '../../../../Status/domain/StatusOptions'

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
	const brandMap = rawData.reduce((acc, item) => {
		const { brandName, modelName, typeOfSiteName, categoryName, count } = item
		const countAsNumber = Number(count)

		let brandEntry = acc.get(brandName)
		if (!brandEntry) {
			brandEntry = { name: brandName, count: 0, model: [] }
			acc.set(brandName, brandEntry)
		}

		brandEntry.count += countAsNumber
		let modelEntry = brandEntry.model.find(m => m.name === modelName)
		if (!modelEntry) {
			modelEntry = { name: modelName, category: categoryName, count: 0, typeOfSite: [] }
			brandEntry.model.push(modelEntry)
		}

		modelEntry.count += countAsNumber
		const existingTypeOfSite = modelEntry.typeOfSite.find(ts => ts.name === typeOfSiteName)
		if (existingTypeOfSite) {
			existingTypeOfSite.count += countAsNumber
		} else {
			modelEntry.typeOfSite.push({ name: typeOfSiteName, count: countAsNumber })
		}

		return acc
	}, new Map<string, AggregatedBrandData>())

	const transformedData = Array.from(brandMap.values()).map(brand => ({
		...brand,
		model: brand.model
			.map(model => ({
				...model,
				typeOfSite: model.typeOfSite.sort((a, b) => a.name.localeCompare(b.name))
			}))
			.sort((a, b) => a.name.localeCompare(b.name))
	}))

	return transformedData.sort((a, b) => a.name.localeCompare(b.name))
}
