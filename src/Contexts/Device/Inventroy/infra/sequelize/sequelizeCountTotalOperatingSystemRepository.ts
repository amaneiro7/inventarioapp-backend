import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { CountTotalOperatingSystemRepository } from '../../domain/CountTotalOperatingSystemRepository'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'

// --- Type Definitions for OS Data ---

// Raw data from the Sequelize query
interface RawOSData {
	osName: string
	arqName: string
	count: string | number
}

// Aggregated Architecture Data
interface ArqData {
	name: string
	count: number
}

// Aggregated Operating System Data
interface AggregatedOSData {
	name: string
	count: number
	arq: ArqData[]
}

/**
 * @class SequelizeCountTotalOperatingSystemRepository
 * @implements {CountTotalOperatingSystemRepository}
 * @description Concrete implementation of the CountTotalOperatingSystemRepository using Sequelize.
 * Provides aggregated data of operating systems and their architectures for computer devices.
 * Utilizes caching for improved performance.
 */
export class SequelizeCountTotalOperatingSystemRepository implements CountTotalOperatingSystemRepository {
	private readonly cacheKey: string = 'computer-os-dashboard'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves the total count of operating systems grouped by OS name and architecture.
	 * @returns {Promise<AggregatedOSData[]>} A promise that resolves to an array of aggregated OS data.
	 */
	async run(): Promise<AggregatedOSData[]> {
		return await this.cache.getCachedData<AggregatedOSData[]>({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('computer.operatingSystem.name'), 'osName'],
						[sequelize.col('computer.operatingSystemArq.name'), 'arqName'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'computer',
							attributes: [],
							required: true,
							include: [
								{
									association: 'operatingSystem',
									required: true,
									attributes: []
								},
								{
									association: 'operatingSystemArq',
									required: true,
									attributes: []
								}
							]
						},
						{
							association: 'category',
							attributes: [],
							where: {
								mainCategoryId: MainCategoryList.COMPUTER
							}
						}
					],
					group: ['computer.operatingSystem.name', 'computer.operatingSystemArq.name'],
					order: [[sequelize.col('computer.operatingSystem.name'), 'ASC']],
					raw: true
				})) as unknown as RawOSData[]

				const operatingSystemMap = result.reduce((acc, item) => {
					const { osName, arqName, count } = item
					const countAsNumber = Number(count)

					let osEntry = acc.get(osName)
					if (!osEntry) {
						osEntry = { name: osName, count: 0, arq: [] }
						acc.set(osName, osEntry)
					}

					osEntry.count += countAsNumber

					const existingArq = osEntry.arq.find(a => a.name === arqName)
					if (existingArq) {
						existingArq.count += countAsNumber
					} else {
						osEntry.arq.push({ name: arqName, count: countAsNumber })
					}

					return acc
				}, new Map<string, AggregatedOSData>())

				// Convert the Map to an array and sort arq entries
				const transformedData = Array.from(operatingSystemMap.values()).map(os => ({
					...os,
					arq: os.arq.sort((a, b) => a.name.localeCompare(b.name))
				}))

				return transformedData.sort((a, b) => a.name.localeCompare(b.name))
			}
		})
	}
}
