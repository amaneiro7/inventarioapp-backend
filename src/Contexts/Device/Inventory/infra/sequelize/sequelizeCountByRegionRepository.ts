import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { CountByRegionRepository } from '../../domain/CountByRegionRepository'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { TypeOfSiteList } from '../../../../Location/TypeOfSite/domain/TypeOfSiteList'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { Op } from 'sequelize'

// --- Type Definitions for Region Data ---

/** Represents the raw, flat data structure returned from the Sequelize query. */
interface RawRegionData {
	administrativeRegionName: string
	regionName: string
	stateName: string
	cityName: string
	siteName: string
	locationName: string
	typeOfSiteName: string
	count: string | number
}

/** A generic interface for a geographical entity with nested children. */
interface GeoEntity {
	name: string
	count: number
	typeOfSiteCount: Record<string, number>
}

// Specific types for each level of the geographical hierarchy
export type LocationData = { name: string; typeOfSite: string; count: number }
export type SiteData = GeoEntity & { locations: LocationData[] }
export type CityData = GeoEntity & { sites: SiteData[] }
export type StateData = GeoEntity & { cities: CityData[] }
export type RegionData = GeoEntity & { states: StateData[] }
export type AdministrativeRegionData = GeoEntity & { regions: RegionData[] }

/**
 * @class SequelizeCountByRegionRepository
 * @implements {CountByRegionRepository}
 * @description Repository for fetching and processing device counts grouped by geographical region.
 */
export class SequelizeCountByRegionRepository implements CountByRegionRepository {
	private readonly cacheKey: string = 'dashboard:computer-region'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves and transforms data about device counts by region.
	 * @returns {Promise<AdministrativeRegionData[]>} A promise that resolves to the aggregated data.
	 */
	async run(): Promise<AdministrativeRegionData[]> {
		return await this.cache.getCachedData<AdministrativeRegionData[]>({
			cacheKey: this.cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('location.name'), 'locationName'],
						[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
						[sequelize.col('location.site.name'), 'siteName'],
						[sequelize.col('location.site.city.name'), 'cityName'],
						[sequelize.col('location.site.city.state.name'), 'stateName'],
						[sequelize.col('location.site.city.state.region.name'), 'regionName'],
						[
							sequelize.col('location.site.city.state.region.administrativeRegion.name'),
							'administrativeRegionName'
						],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'category',
							attributes: [],
							where: { mainCategoryId: MainCategoryList.COMPUTER }
						},
						{
							association: 'location',
							required: true,
							include: [
								{
									association: 'typeOfSite',
									attributes: [],
									where: { [Op.or]: [{ id: TypeOfSiteList.AGENCIA }, { id: TypeOfSiteList.TORRE }] }
								},
								{
									association: 'site',
									attributes: [],
									include: [
										{
											association: 'city',
											attributes: [],
											include: [
												{
													association: 'state',
													attributes: [],
													include: [
														{
															association: 'region',
															attributes: [],
															include: [
																{ association: 'administrativeRegion', attributes: [] }
															]
														}
													]
												}
											]
										}
									]
								}
							],
							attributes: []
						}
					],
					group: [
						'location.name',
						'location.typeOfSite.name',
						'location.site.name',
						'location.site.city.name',
						'location.site.city.state.name',
						'location.site.city.state.region.name',
						'location.site.city.state.region.administrativeRegion.name'
					],
					order: [
						[sequelize.col('location.site.city.state.region.administrativeRegion.name'), 'ASC'],
						[sequelize.col('location.site.city.state.region.name'), 'ASC'],
						[sequelize.col('location.site.city.state.name'), 'ASC'],
						[sequelize.col('location.site.city.name'), 'ASC'],
						[sequelize.col('location.site.name'), 'ASC'],
						[sequelize.col('location.name'), 'ASC']
					],
					raw: true
				})) as unknown as RawRegionData[]

				return this.transformRegionData(result)
			}
		})
	}

	/**
	 * @private
	 * @method transformRegionData
	 * @description Transforms the deeply nested raw region data into a structured, hierarchical format.
	 * @param {RawRegionData[]} rawData - The raw data from the database.
	 * @returns {AdministrativeRegionData[]} The transformed data.
	 */
	private transformRegionData(rawData: RawRegionData[]): AdministrativeRegionData[] {
		const adminRegionMap = new Map<string, AdministrativeRegionData>()

		for (const item of rawData) {
			const {
				administrativeRegionName,
				regionName,
				stateName,
				cityName,
				siteName,
				locationName,
				typeOfSiteName,
				count
			} = item
			const countAsNumber = Number(count)

			// Administrative Region Level
			if (!adminRegionMap.has(administrativeRegionName)) {
				adminRegionMap.set(administrativeRegionName, {
					name: administrativeRegionName,
					count: 0,
					typeOfSiteCount: {},
					regions: []
				})
			}
			const adminRegionEntry = adminRegionMap.get(administrativeRegionName)!
			adminRegionEntry.count += countAsNumber
			adminRegionEntry.typeOfSiteCount[typeOfSiteName] =
				(adminRegionEntry.typeOfSiteCount[typeOfSiteName] || 0) + countAsNumber

			// Region Level
			let regionEntry = adminRegionEntry.regions.find(c => c.name === regionName)
			if (!regionEntry) {
				regionEntry = {
					name: regionName,
					count: 0,
					typeOfSiteCount: {},
					states: []
				}
				adminRegionEntry.regions.push(regionEntry)
			}
			regionEntry.count += countAsNumber
			regionEntry.typeOfSiteCount[typeOfSiteName] =
				(regionEntry.typeOfSiteCount[typeOfSiteName] || 0) + countAsNumber

			// State Level
			let stateEntry = regionEntry.states.find(c => c.name === stateName)
			if (!stateEntry) {
				stateEntry = {
					name: stateName,
					count: 0,
					typeOfSiteCount: {},
					cities: []
				}
				regionEntry.states.push(stateEntry)
			}
			stateEntry.count += countAsNumber
			stateEntry.typeOfSiteCount[typeOfSiteName] =
				(stateEntry.typeOfSiteCount[typeOfSiteName] || 0) + countAsNumber

			// City Level
			let cityEntry = stateEntry.cities.find(c => c.name === cityName)
			if (!cityEntry) {
				cityEntry = {
					name: cityName,
					count: 0,
					typeOfSiteCount: {},
					sites: []
				}
				stateEntry.cities.push(cityEntry)
			}
			cityEntry.count += countAsNumber
			cityEntry.typeOfSiteCount[typeOfSiteName] = (cityEntry.typeOfSiteCount[typeOfSiteName] || 0) + countAsNumber

			// Site Level
			let siteEntry = cityEntry.sites.find(c => c.name === siteName)
			if (!siteEntry) {
				siteEntry = {
					name: siteName,
					count: 0,
					typeOfSiteCount: {},
					locations: []
				}
				cityEntry.sites.push(siteEntry)
			}
			siteEntry.count += countAsNumber
			siteEntry.typeOfSiteCount[typeOfSiteName] = (siteEntry.typeOfSiteCount[typeOfSiteName] || 0) + countAsNumber

			// Location Level
			siteEntry.locations.push({ name: locationName, typeOfSite: typeOfSiteName, count: countAsNumber })
		}

		return Array.from(adminRegionMap.values())
	}
}
