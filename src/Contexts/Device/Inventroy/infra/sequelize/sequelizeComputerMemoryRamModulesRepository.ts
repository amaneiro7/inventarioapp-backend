import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type ComputerMemoryRamModulesRepository } from '../../domain/ComputerMemoryRamModulesRepository'

export class SequelizeComputerMemoryRamModulesRepository implements ComputerMemoryRamModulesRepository {
	private readonly cacheKey: string = 'dashboard'
	constructor(private readonly cache: CacheService) {}

	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-memoryRamModules-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				// Query the database to get memory RAM module data
				const result = await DeviceModel.findAll({
					attributes: [
						[sequelize.col('computer.memory_ram'), 'memoryRam'],
						[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
						[sequelize.col('model.modelComputer.memoryRamType.name'), 'memoryRamTypeName'],
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
							association: 'model',
							attributes: [],
							include: [
								{
									association: 'modelComputer',
									attributes: [],
									include: [
										{
											association: 'memoryRamType',
											attributes: []
										}
									]
								}
							]
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
					group: [
						'computer.memory_ram',
						'location.typeOfSite.name',
						'model.modelComputer.memoryRamType.name'
					],
					order: [
						[sequelize.col('location.typeOfSite.name'), 'ASC'],
						[sequelize.col('computer.memory_ram'), 'DESC']
					],
					raw: true
				})
				// Map to organize data by type of site
				const typeOfSiteMap = new Map()
				// Process each result item
				result.forEach((item: any) => {
					const { typeOfSiteName, memoryRam, memoryRamTypeName, count } = item
					const countAsNumber = Number(count)
					// Initialize map entry if it doesn't exist
					if (!typeOfSiteMap.has(typeOfSiteName)) {
						typeOfSiteMap.set(typeOfSiteName, {
							name: typeOfSiteName,
							memoryRamType: []
						})
					}
					const typeOfSite = typeOfSiteMap.get(typeOfSiteName)
					let memoryType = typeOfSite.memoryRamType.find((mt: any) => mt.name === memoryRamTypeName)
					// Initialize memory type entry if it doesn't exist
					if (!memoryType) {
						memoryType = { name: memoryRamTypeName, memoryRamValues: [] }
						typeOfSite.memoryRamType.push(memoryType)
					}
					// Count occurrences of each memory RAM value
					const memoryCounts: { [value: string]: number } = {}
					memoryRam
						.filter((val: any) => val !== '0')
						.forEach((val: any) => {
							memoryCounts[val] = (memoryCounts[val] || 0) + 1
						})
					// Update memory RAM values with counts
					for (const memoryValue in memoryCounts) {
						const meagBytesValues: Record<string, string> = {
							'0.125': '128 Mb',
							'0.25': '256 Mb',
							'0.5': '512 Mb'
						}
						const ramValueName = meagBytesValues[memoryValue] ?? `${memoryValue} Gb`
						const individualMemoryCount = memoryCounts[memoryValue]
						const totalCountForThisMemory = countAsNumber * individualMemoryCount

						let existingRamValue = memoryType.memoryRamValues.find((rv: any) => rv.name === ramValueName)

						if (existingRamValue) {
							existingRamValue.count += totalCountForThisMemory
						} else {
							memoryType.memoryRamValues.push({ name: ramValueName, count: totalCountForThisMemory })
						}
					}
				})
				// Convert maps to arrays and sort them
				return Array.from(typeOfSiteMap.values()).map(typeOfSite => ({
					...typeOfSite,
					memoryRamType: typeOfSite.memoryRamType
						.map((mt: any) => ({
							...mt,
							memoryRamValues: mt.memoryRamValues.sort(
								(a: any, b: any) =>
									Number(b.name.replace(/ Gb| Mb/, '')) - Number(a.name.replace(/ Gb| Mb/, '')) ||
									(b.name.includes('Mb') ? -1 : a.name.includes('Mb') ? 1 : 0) // Priorizar Gb si los números son iguales
							)
						}))
						.sort((a: any, b: any) => a.name.localeCompare(b.name))
				}))
			}
		})
	}
}
