import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type ComputerDashboardRepository } from '../../domain/ComputerDashboardRepository'

// --- Type Definitions for Dashboard Data ---

// Raw data from countTotalHDD query
interface RawHDDData {
	hddCapacityName: string
	hddTypeName: string
	count: string | number
}

// Aggregated HDD Type Data
interface HDDTypeData {
	name: string
	count: number
}

// Aggregated HDD Capacity Data
interface AggregatedHDDData {
	name: string
	count: number
	hddType: HDDTypeData[]
}

// Raw data from countByStatus query
interface RawStatusCountData {
	name: string
	count: string | number
}

// Raw data from countByBrand query
interface RawBrandCountData {
	categoryName: string
	brandName: string
	modelName: string
	typeOfSiteName: string
	count: string | number
}

// Aggregated TypeOfSite Data
interface TypeOfSiteAggregatedData {
	name: string
	count: number
}

// Aggregated Model Data
interface ModelAggregatedData {
	name: string
	category: string
	count: number
	typeOfSite: TypeOfSiteAggregatedData[]
}

// Aggregated Brand Data
interface AggregatedBrandData {
	name: string
	count: number
	model: ModelAggregatedData[]
}

/**
 * @class SequelizeComputerDashboardRepository
 * @implements {ComputerDashboardRepository}
 * @description Concrete implementation of the ComputerDashboardRepository using Sequelize.
 * Provides various aggregated dashboard data for computer devices, utilizing caching for performance.
 */
export class SequelizeComputerDashboardRepository implements ComputerDashboardRepository {
	private readonly cacheKey: string = 'dashboard'
	constructor(private readonly cache: CacheService) {}

	/**
	 * @method countTotalHDD
	 * @description Counts the total number of computers grouped by HDD capacity and type.
	 * @returns {Promise<AggregatedHDDData[]>} A promise that resolves to an array of aggregated HDD data.
	 */
	async countTotalHDD(): Promise<AggregatedHDDData[]> {
		return await this.cache.getCachedData<AggregatedHDDData[]>({
			cacheKey: `computer-hdd-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
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
								{
									association: 'hardDriveCapacity',
									required: true,
									attributes: []
								},
								{
									association: 'hardDriveType',
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
					group: ['computer.hardDriveCapacity.name', 'computer.hardDriveType.name'],
					order: [[sequelize.col('computer.hardDriveCapacity.name'), 'ASC']],
					raw: true
				})) as RawHDDData[]

				const hddCapacityMap = result.reduce((acc, item) => {
					const { hddCapacityName, hddTypeName, count } = item
					const countAsNumber = Number(count)
					const hddCapacityNameWithGB = `${hddCapacityName} GB`

					let capacityEntry = acc.get(hddCapacityNameWithGB)
					if (!capacityEntry) {
						capacityEntry = {
							name: hddCapacityNameWithGB,
							count: 0,
							hddType: []
						}
						acc.set(hddCapacityNameWithGB, capacityEntry)
					}

					capacityEntry.count += countAsNumber

					const existingType = capacityEntry.hddType.find(type => type.name === hddTypeName)
					if (existingType) {
						existingType.count += countAsNumber
					} else {
						capacityEntry.hddType.push({ name: hddTypeName, count: countAsNumber })
					}

					return acc
				}, new Map<string, AggregatedHDDData>())

				// Convert the Map to an array and sort hddType entries
				const transformedData = Array.from(hddCapacityMap.values()).map(hddCapacity => ({
					...hddCapacity,
					hddType: hddCapacity.hddType.sort((a, b) => a.name.localeCompare(b.name))
				}))

				return transformedData.sort((a, b) => a.name.localeCompare(b.name))
			}
		})
	}

	/**
	 * @method countByStatus
	 * @description Counts the number of computers grouped by their status.
	 * @returns {Promise<Array<{ name: string; count: number }>>} A promise that resolves to an array of status counts.
	 */
	async countByStatus(): Promise<Array<{ name: string; count: number }>> {
		return await this.cache.getCachedData<Array<{ name: string; count: number }>>({
			cacheKey: `computer-status-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('status.name'), 'name'],
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
							association: 'status',
							attributes: []
						}
					],
					group: ['status.name'],
					order: [[sequelize.col('status.name'), 'ASC']],
					raw: true
				})) as RawStatusCountData[]
				return result
					.map(status => ({ name: status.name, count: Number(status.count) }))
					.sort((a, b) => b.count - a.count)
			}
		})
	}

	/**
	 * @method countByBrand
	 * @description Counts the number of computers grouped by brand, model, and type of site.
	 * @returns {Promise<AggregatedBrandData[]>} A promise that resolves to an array of aggregated brand data.
	 */
	async countByBrand(): Promise<AggregatedBrandData[]> {
		return await this.cache.getCachedData<AggregatedBrandData[]>({
			cacheKey: `computer-brand-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('category.name'), 'categoryName'],
						[sequelize.col('brand.name'), 'brandName'],
						[sequelize.col('model.name'), 'modelName'],
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
							association: 'brand',
							attributes: []
						},
						{
							association: 'model',
							attributes: []
						},
						{
							association: 'location',
							attributes: [],
							include: [{ association: 'typeOfSite', attributes: [] }]
						}
					],
					group: ['category.name', 'brand.name', 'model.name', 'location.typeOfSite.name'],
					order: [
						[sequelize.col('brand.name'), 'ASC'],
						[sequelize.col('model.name'), 'ASC']
					],
					raw: true
				})) as RawBrandCountData[]

				const brandMap = result.reduce((acc, item) => {
					const { brandName, modelName, typeOfSiteName, categoryName, count } = item
					const countAsNumber = Number(count)

					let brandEntry = acc.get(brandName)
					if (!brandEntry) {
						brandEntry = {
							name: brandName,
							count: 0,
							model: []
						}
						acc.set(brandName, brandEntry)
					}

					brandEntry.count += countAsNumber

					let modelEntry = brandEntry.model.find(m => m.name === modelName)
					if (!modelEntry) {
						modelEntry = {
							name: modelName,
							category: categoryName,
							count: 0,
							typeOfSite: []
						}
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

				// Convert maps to arrays and sort
				const transformedData = Array.from(brandMap.values()).map(brand => ({
					...brand,
					model: brand.model.map(model => ({
						...model,
						typeOfSite: model.typeOfSite.sort((a, b) => a.name.localeCompare(b.name))
					})).sort((a, b) => a.name.localeCompare(b.name))
				}))

				return transformedData.sort((a, b) => a.name.localeCompare(b.name))
			}
		})
	}
}

