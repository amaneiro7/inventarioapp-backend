import { DeviceModel } from '../../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { ComputerCountBrandDashboardAssociation } from './ComputerCountBrandDashboardAssociation'
import type { RawBrandCountData, AggregatedBrandData } from './types'
import type { Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import type { ResponseDB } from '../../../../../Shared/domain/ResponseType'

/**
 * @function fetchAndAggregateBrandData
 * @description Fetches and aggregates device data by brand, with optional filtering by location.
 * @param {criteria} Criteria - The main category to filter (e.g., COMPUTER).
 * @returns {Promise<AggregatedBrandData[]>} A promise that resolves to the aggregated brand data.
 */
export async function fetchAndAggregateBrandData(criteria: Criteria): Promise<ResponseDB<AggregatedBrandData>> {
	const options = ComputerCountBrandDashboardAssociation.buildDashboardFindOptions(criteria, { raw: true })

	const { count, rows } = await DeviceModel.findAndCountAll(options)
	const result = rows.map(row => row.get({ plain: true })) as unknown as RawBrandCountData[]

	return {
		total: count,
		data: transformBrandData(result)
	}
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
