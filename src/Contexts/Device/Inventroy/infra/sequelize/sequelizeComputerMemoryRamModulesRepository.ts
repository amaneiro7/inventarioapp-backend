import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type ComputerMemoryRamModulesRepository } from '../../domain/ComputerMemoryRamModulesRepository'

// --- Type Definitions for Memory RAM Modules ---

/** Represents the raw data structure returned from the Sequelize query. */
interface RawMemoryModuleData {
	memoryRam: string[]
	typeOfSiteName: string
	memoryRamTypeName: string | null
	memoryRamLaptopTypeName: string | null
	count: string | number
}

/** Represents aggregated data for a specific memory value (e.g., '8 Gb'). */
interface MemoryRamValue {
	name: string
	count: number
}

/** Represents aggregated data for a memory type (e.g., 'DDR4'), including its values. */
interface MemoryRamType {
	name: string
	memoryRamValues: MemoryRamValue[]
}

/** Represents the final aggregated data for a type of site, including memory types. */
export interface AggregatedMemoryModuleData {
	name: string
	memoryRamType: MemoryRamType[]
}

/**
 * @class SequelizeComputerMemoryRamModulesRepository
 * @implements {ComputerMemoryRamModulesRepository}
 * @description Repository for fetching and processing computer memory RAM module data for the dashboard.
 */
export class SequelizeComputerMemoryRamModulesRepository implements ComputerMemoryRamModulesRepository {
	private readonly cacheKey: string = 'dashboard:computer-memoryRamModules'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves and transforms data about memory RAM modules, grouped by site and memory type.
	 * @returns {Promise<AggregatedMemoryModuleData[]>} A promise that resolves to the aggregated data.
	 */
	async run(): Promise<AggregatedMemoryModuleData[]> {
		return await this.cache.getCachedData<AggregatedMemoryModuleData[]>({
			cacheKey: this.cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('computer.memory_ram'), 'memoryRam'],
						[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
						[sequelize.col('model.modelComputer.memoryRamType.name'), 'memoryRamTypeName'],
						[sequelize.col('model.modelLaptop.memoryRamType.name'), 'memoryRamLaptopTypeName'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'category',
							attributes: [],
							where: {
								mainCategoryId: MainCategoryList.COMPUTER
							}
						},
						{ association: 'computer', attributes: [] },
						{
							association: 'model',
							attributes: [],
							include: [
								{
									association: 'modelComputer',
									attributes: [],
									include: [{ association: 'memoryRamType', attributes: [] }]
								},
								{
									association: 'modelLaptop',
									attributes: [],
									include: [{ association: 'memoryRamType', attributes: [] }]
								}
							]
						},
						{
							association: 'location',
							required: true,
							include: [{ association: 'typeOfSite', attributes: [] }],
							attributes: []
						}
					],
					group: [
						'computer.memory_ram',
						'location.typeOfSite.name',
						'model.modelComputer.memoryRamType.name',
						'model.modelLaptop.memoryRamType.name'
					],
					order: [
						[sequelize.col('location.typeOfSite.name'), 'ASC'],
						[sequelize.col('computer.memory_ram'), 'DESC']
					],
					raw: true
				})) as unknown as RawMemoryModuleData[]

				return this.transformMemoryModuleData(result)
			}
		})
	}

	/**
	 * @private
	 * @method transformMemoryModuleData
	 * @description Transforms raw memory module data into a structured, aggregated format.
	 * @param {RawMemoryModuleData[]} rawData - The raw data from the database.
	 * @returns {AggregatedMemoryModuleData[]} The transformed and sorted data.
	 */
	private transformMemoryModuleData(rawData: RawMemoryModuleData[]): AggregatedMemoryModuleData[] {
		const typeOfSiteMap = new Map<string, AggregatedMemoryModuleData>()

		for (const item of rawData) {
			const { typeOfSiteName, memoryRam, memoryRamTypeName, memoryRamLaptopTypeName, count } = item
			const countAsNumber = Number(count)
			const finalMemoryRamTypeName = memoryRamTypeName ?? memoryRamLaptopTypeName ?? 'Unknown'

			// Ensure typeOfSite entry exists
			if (!typeOfSiteMap.has(typeOfSiteName)) {
				typeOfSiteMap.set(typeOfSiteName, { name: typeOfSiteName, memoryRamType: [] })
			}
			const typeOfSiteEntry = typeOfSiteMap.get(typeOfSiteName)!

			// Find or create memoryType entry
			let memoryTypeEntry = typeOfSiteEntry.memoryRamType.find(mt => mt.name === finalMemoryRamTypeName)
			if (!memoryTypeEntry) {
				memoryTypeEntry = { name: finalMemoryRamTypeName, memoryRamValues: [] }
				typeOfSiteEntry.memoryRamType.push(memoryTypeEntry)
			}

			// Process each memory module in the array
			for (const ramValue of memoryRam) {
				if (ramValue === '0') continue

				const ramValueName = this.formatRamValue(ramValue)
				const existingRamValue = memoryTypeEntry.memoryRamValues.find(rv => rv.name === ramValueName)

				if (existingRamValue) {
					existingRamValue.count += countAsNumber
				} else {
					memoryTypeEntry.memoryRamValues.push({ name: ramValueName, count: countAsNumber })
				}
			}
		}

		// Convert map to array and sort everything
		const transformedData = Array.from(typeOfSiteMap.values())
		for (const typeOfSite of transformedData) {
			typeOfSite.memoryRamType.sort((a, b) => a.name.localeCompare(b.name))
			for (const memoryType of typeOfSite.memoryRamType) {
				memoryType.memoryRamValues.sort((a, b) => {
					const numA = parseFloat(a.name)
					const numB = parseFloat(b.name)
					if (a.name.includes('Gb') && b.name.includes('Mb')) return -1
					if (a.name.includes('Mb') && b.name.includes('Gb')) return 1
					return numB - numA
				})
			}
		}
		return transformedData
	}

	/**
	 * @private
	 * @method formatRamValue
	 * @description Formats a raw RAM value string into a human-readable format (e.g., '8 Gb', '512 Mb').
	 * @param {string} ramValue - The raw RAM value (e.g., '8', '0.5').
	 * @returns {string} The formatted string.
	 */
	private formatRamValue(ramValue: string): string {
		const meagabytesValues: Record<string, string> = {
			'0.125': '128 Mb',
			'0.25': '256 Mb',
			'0.5': '512 Mb'
		}
		return meagabytesValues[ramValue] ?? `${ramValue} Gb`
	}
}
