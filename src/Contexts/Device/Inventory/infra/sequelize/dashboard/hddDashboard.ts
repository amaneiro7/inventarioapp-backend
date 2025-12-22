import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { type RawHDDData, type AggregatedHDDData } from './types'

/**
 * @function fetchAndAggregateHDDData
 * @description Fetches and aggregates HDD data from the database. This method is called when the cache is empty.
 * @returns {Promise<AggregatedHDDData[]>} A promise that resolves to the aggregated HDD data.
 */
export async function fetchAndAggregateHDDData(): Promise<AggregatedHDDData[]> {
	const result = (await DeviceModel.findAll({
		attributes: [
			[sequelize.col('computer.hardDriveCapacity.name'), 'hddCapacityName'],
			[sequelize.col('computer.hardDriveType.name'), 'hddTypeName'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		],
		include: [
			{
				association: 'computer',
				attributes: [],
				required: true,
				include: [
					{ association: 'hardDriveCapacity', required: true, attributes: [] },
					{ association: 'hardDriveType', required: true, attributes: [] }
				]
			},
			{
				association: 'category',
				attributes: [],
				where: { mainCategoryId: MainCategoryList.COMPUTER }
			}
		],
		group: ['computer.hardDriveCapacity.name', 'computer.hardDriveType.name'],
		order: [[sequelize.col('computer.hardDriveCapacity.name'), 'ASC']],
		raw: true
	})) as unknown as RawHDDData[]

	return transformHDDData(result)
}

/**
 * @function transformHDDData
 * @description Transforms the raw HDD data into a structured format for the dashboard.
 * @param {RawHDDData[]} rawData - The raw data from the database.
 * @returns {AggregatedHDDData[]} The transformed and sorted HDD data.
 */
function transformHDDData(rawData: RawHDDData[]): AggregatedHDDData[] {
	const hddCapacityMap = new Map<string, AggregatedHDDData>()

	for (const item of rawData) {
		const { hddCapacityName, hddTypeName, count } = item
		const countAsNumber = Number(count)
		const hddCapacityNameWithGB = `${hddCapacityName} GB`

		// Ensure capacity entry exists
		if (!hddCapacityMap.has(hddCapacityNameWithGB)) {
			hddCapacityMap.set(hddCapacityNameWithGB, { name: hddCapacityNameWithGB, count: 0, hddType: [] })
		}
		const capacityEntry = hddCapacityMap.get(hddCapacityNameWithGB)!
		capacityEntry.count += countAsNumber

		// Find or create HDD type entry
		const existingType = capacityEntry.hddType.find(type => type.name === hddTypeName)
		if (existingType) {
			existingType.count += countAsNumber
		} else {
			capacityEntry.hddType.push({ name: hddTypeName, count: countAsNumber })
		}
	}

	// Convert map to array and sort nested structures
	const transformedData = Array.from(hddCapacityMap.values())
	for (const hddCapacity of transformedData) {
		hddCapacity.hddType.sort((a, b) => a.name.localeCompare(b.name))
	}

	return transformedData.sort((a, b) => a.name.localeCompare(b.name))
}
