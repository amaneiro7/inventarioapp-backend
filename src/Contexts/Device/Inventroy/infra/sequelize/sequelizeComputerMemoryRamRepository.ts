import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type ComputerMemoryRamRepository } from '../../domain/ComputerMemoryRamRepositoyr'

export class SequelizeComputerMemoryRamRepository implements ComputerMemoryRamRepository {
	private readonly cacheKey: string = 'dashboard'
	constructor(private readonly cache: CacheService) {}

	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-memoryRam-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
					attributes: [
						[sequelize.col('computer.memory_ram_capacity'), 'memoryRamTotal'],
						[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
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
						{
							association: 'computer',
							attributes: []
						},
						{
							association: 'location',
							required: true,
							include: [
								{
									association: 'typeOfSite',
									attributes: []
								}
							],
							attributes: []
						}
					],
					group: ['computer.memory_ram_capacity', 'location.typeOfSite.name'],
					order: [
						[sequelize.col('location.typeOfSite.name'), 'ASC'],
						[sequelize.col('computer.memory_ram_capacity'), 'DESC']
					],
					raw: true
				})

				const typeOfSiteMap = new Map()
				result.forEach((item: any) => {
					const { memoryRamTotal, typeOfSiteName, count } = item
					const countNumber = Number(count) // Convertir a número entero
					const memoryRamName = memoryRamTotal !== '0' ? `${memoryRamTotal} Gb` : 'Sin Memoria'

					if (!typeOfSiteMap.has(typeOfSiteName)) {
						typeOfSiteMap.set(typeOfSiteName, {
							name: typeOfSiteName,
							memoryRamTotal: new Map()
						})
					}

					const typeOfSite = typeOfSiteMap.get(typeOfSiteName)

					if (!typeOfSite.memoryRamTotal.has(memoryRamName)) {
						typeOfSite.memoryRamTotal.set(memoryRamName, {
							name: memoryRamName,
							count: countNumber
						})
					} else {
						typeOfSite.memoryRamTotal.get(memoryRamName).count += countNumber
					}
				})

				// Convertir los mapas a arrays
				const transformedData = Array.from(typeOfSiteMap.values()).map((typeOfSite: any) => ({
					...typeOfSite,
					memoryRamTotal: Array.from(typeOfSite.memoryRamTotal.values())
				}))

				return transformedData
			}
		})
	}
}
