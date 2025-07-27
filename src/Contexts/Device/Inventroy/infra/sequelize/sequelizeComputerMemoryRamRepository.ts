import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type ComputerMemoryRamRepository } from '../../domain/ComputerMemoryRamRepositoyr'

// --- Type Definitions for Memory RAM Capacity ---

/** Represents the raw data structure returned from the Sequelize query. */
interface RawMemoryCapacityData {
	memoryRamTotal: string
	typeOfSiteName: string
	count: string | number
}

/** Represents aggregated data for a specific memory capacity (e.g., '16 Gb'). */
interface MemoryCapacityValue {
	name: string
	count: number
}

/** Represents the final aggregated data for a type of site, including memory capacity breakdowns. */
export interface AggregatedMemoryCapacityData {
	name: string
	memoryRamTotal: MemoryCapacityValue[]
}

/**
 * @class SequelizeComputerMemoryRamRepository
 * @implements {ComputerMemoryRamRepository}
 * @description Repository for fetching and processing computer memory RAM capacity data for the dashboard.
 */
export class SequelizeComputerMemoryRamRepository implements ComputerMemoryRamRepository {
	private readonly cacheKey: string = 'dashboard:computer-memoryRam'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves and transforms data about total memory RAM capacity, grouped by site.
	 * @returns {Promise<AggregatedMemoryCapacityData[]>} A promise that resolves to the aggregated data.
	 */
	async run(): Promise<AggregatedMemoryCapacityData[]> {
		return await this.cache.getCachedData<AggregatedMemoryCapacityData[]>({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('computer.memory_ram_capacity'), 'memoryRamTotal'],
						[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'category',
							attributes: [],
							where: { mainCategoryId: MainCategoryList.COMPUTER }
						},
						{ association: 'computer', attributes: [] },
						{
							association: 'location',
							required: true,
							include: [{ association: 'typeOfSite', attributes: [] }],
							attributes: []
						}
					],
					group: ['computer.memory_ram_capacity', 'location.typeOfSite.name'],
					order: [
						[sequelize.col('location.typeOfSite.name'), 'ASC'],
						[sequelize.col('computer.memory_ram_capacity'), 'DESC']
					],
					raw: true
				})) as unknown as RawMemoryCapacityData[]

				return this.transformMemoryCapacityData(result)
			}
		})
	}

	/**
	 * @private
	 * @method transformMemoryCapacityData
	 * @description Transforms raw memory capacity data into a structured, aggregated format.
	 * @param {RawMemoryCapacityData[]} rawData - The raw data from the database.
	 * @returns {AggregatedMemoryCapacityData[]} The transformed data.
	 */
	private transformMemoryCapacityData(rawData: RawMemoryCapacityData[]): AggregatedMemoryCapacityData[] {
		const typeOfSiteMap = new Map<string, Map<string, number>>()

		for (const item of rawData) {
			const { memoryRamTotal, typeOfSiteName, count } = item
			const countAsNumber = Number(count)
			const memoryRamName = memoryRamTotal !== '0' ? `${memoryRamTotal} Gb` : 'Sin Memoria'

			if (!typeOfSiteMap.has(typeOfSiteName)) {
				typeOfSiteMap.set(typeOfSiteName, new Map<string, number>())
			}

			const memoryMap = typeOfSiteMap.get(typeOfSiteName)!
			memoryMap.set(memoryRamName, (memoryMap.get(memoryRamName) || 0) + countAsNumber)
		}

		// Convert the nested maps to the final array structure
		const transformedData: AggregatedMemoryCapacityData[] = []
		for (const [siteName, memoryMap] of typeOfSiteMap.entries()) {
			const memoryRamTotals: MemoryCapacityValue[] = []
			for (const [memoryName, count] of memoryMap.entries()) {
				memoryRamTotals.push({ name: memoryName, count })
			}

			transformedData.push({
				name: siteName,
				memoryRamTotal: memoryRamTotals
			})
		}

		return transformedData
	}
}
