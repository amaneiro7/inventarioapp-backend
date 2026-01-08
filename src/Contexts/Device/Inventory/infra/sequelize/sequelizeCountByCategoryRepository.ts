import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { CountByCategoryRepository } from '../../domain/CountByCategoryRepository'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'

// --- Type Definitions for Category Data ---

/** Represents the raw data structure returned from the Sequelize query. */
interface RawCategoryData {
	name: string
	typeOfSiteName: string
	count: string | number
}

/** Represents aggregated data for a type of site within a category. */
interface TypeOfSiteData {
	name: string
	count: number
}

/** Represents the final aggregated data for a category, including a breakdown by site type. */
export interface AggregatedCategoryData {
	name: string
	count: number
	typeOfSite: TypeOfSiteData[]
}

/**
 * @class SequelizeCountByCategoryRepository
 * @implements {CountByCategoryRepository}
 * @description Repository for fetching and processing device counts grouped by category for the dashboard.
 */
export class SequelizeCountByCategoryRepository implements CountByCategoryRepository {
	private readonly cacheKey: string = 'dashboard:computer-category'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves and transforms data about device counts by category and site type.
	 * @returns {Promise<AggregatedCategoryData[]>} A promise that resolves to the aggregated data.
	 */
	async run(): Promise<AggregatedCategoryData[]> {
		return await this.cache.getCachedData<AggregatedCategoryData[]>({
			cacheKey: this.cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('category.name'), 'name'],
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
							association: 'location',
							required: true,
							include: [{ association: 'typeOfSite', attributes: [] }],
							attributes: []
						}
					],
					group: ['category.name', 'location.typeOfSite.name'],
					order: [
						[sequelize.col('category.name'), 'ASC'],
						[sequelize.col('location.typeOfSite.name'), 'ASC']
					],
					raw: true
				})) as unknown as RawCategoryData[]

				return this.transformCategoryData(result)
			}
		})
	}

	/**
	 * @private
	 * @method transformCategoryData
	 * @description Transforms raw category data into a structured, aggregated format.
	 * @param {RawCategoryData[]} rawData - The raw data from the database.
	 * @returns {AggregatedCategoryData[]} The transformed data.
	 */
	private transformCategoryData(rawData: RawCategoryData[]): AggregatedCategoryData[] {
		const categoryMap = new Map<string, AggregatedCategoryData>()

		for (const item of rawData) {
			const { name, typeOfSiteName, count } = item
			const countAsNumber = Number(count)

			if (!categoryMap.has(name)) {
				categoryMap.set(name, { name, count: 0, typeOfSite: [] })
			}

			const categoryEntry = categoryMap.get(name)!
			categoryEntry.count += countAsNumber
			categoryEntry.typeOfSite.push({ name: typeOfSiteName, count: countAsNumber })
		}

		return Array.from(categoryMap.values())
	}
}
