import { Op } from 'sequelize'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { TypeOfSiteList } from '../../../../Location/TypeOfSite/domain/TypeOfSiteList'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type CountOSByRegionRepository } from '../../domain/CountOSByRegionRepository'

// --- Type Definitions for OS by Region Data ---

/** Represents the raw, flat data structure returned from the Sequelize query. */
interface RawOSByRegionData {
	operatingSystemName: string
	administrativeRegionName: string
	regionName: string
	stateName: string
	cityName: string
	siteName: string
	locationName: string
	typeOfSiteName: string
	count: string | number
}

/** A generic interface for a geographical entity with nested children, specific to OS data. */
interface OSGeoEntity {
	name: string
	count: number
	typeOfSiteCount: Record<string, number>
}

// Specific types for each level of the geographical hierarchy for OS data
export type OSLocationData = { name: string; typeOfSite: string; count: number }
export type OSSiteData = OSGeoEntity & {
	locations: OSLocationData[]
}
export type OSCityData = OSGeoEntity & {
	sites: OSSiteData[]
}
export type OSStateData = OSGeoEntity & {
	cities: OSCityData[]
}
export type OSRegionData = OSGeoEntity & {
	states: OSStateData[]
}
export type OSAdministrativeRegionData = OSGeoEntity & {
	regions: OSRegionData[]
}

/** Represents the final aggregated data for an Operating System, including a breakdown by region. */
export interface AggregatedOSByRegionData {
	name: string
	count: number
	typeOfSiteCount: Record<string, number>
	administrativeRegion: OSAdministrativeRegionData[]
}

/**
 * @class SequelizeCountOSByRegionRepository
 * @implements {CountOSByRegionRepository}
 * @description Repository for fetching and processing OS counts grouped by geographical region.
 */

/** Represents the final aggregated data for an Operating System, including a breakdown by region. */
export interface AggregatedOSByRegionData {
	name: string
	count: number
	typeOfSiteCount: Record<string, number>
	administrativeRegion: OSAdministrativeRegionData[]
}

/**
 * @class SequelizeCountOSByRegionRepository
 * @implements {CountOSByRegionRepository}
 * @description Repository for fetching and processing OS counts grouped by geographical region.
 */
export class SequelizeCountOSByRegionRepository implements CountOSByRegionRepository {
	private readonly cacheKey: string = 'devices:dashboard:computer-osByRegion'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves and transforms data about OS counts by region.
	 * @returns {Promise<AggregatedOSByRegionData[]>} A promise that resolves to the aggregated data.
	 */
	async run(): Promise<AggregatedOSByRegionData[]> {
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const result = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('computer.operatingSystem.name'), 'operatingSystemName'],
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
							where: {
								mainCategoryId: MainCategoryList.COMPUTER
							}
						},
						{
							association: 'computer',
							required: true,
							attributes: [],
							where: { operatingSystemId: { [Op.ne]: null } },
							include: [{ association: 'operatingSystem', required: true, attributes: [] }]
						},
						{
							association: 'location',
							required: true,
							include: [
								{
									association: 'typeOfSite',
									attributes: [],
									where: {
										[Op.or]: [{ id: TypeOfSiteList.AGENCIA }, { id: TypeOfSiteList.TORRE }]
									}
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
						'computer.operatingSystem.name',
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
				})) as unknown as RawOSByRegionData[]

				return await this.transformOSByRegionData(result)
			}
		})
	}

	/**
	 * @private
	 * @method transformOSByRegionData
	 * @description Transforms the deeply nested raw OS by region data into a structured, hierarchical format.
	 * @param {RawOSByRegionData[]} rawData - The raw data from the database.
	 * @returns {AggregatedOSByRegionData[]} The transformed data.
	 */

	private async transformOSByRegionData(rawData: RawOSByRegionData[]): Promise<AggregatedOSByRegionData[]> {
		const osMap = new Map<string, AggregatedOSByRegionData>()

		for (const item of rawData) {
			const {
				administrativeRegionName,
				regionName,
				stateName,
				cityName,
				siteName,
				locationName,
				typeOfSiteName,
				operatingSystemName,
				count
			} = item
			const countAsNumber = Number(count)

			let unifiedOsName = operatingSystemName
			if (operatingSystemName.startsWith('Windows 10')) {
				unifiedOsName = 'Windows 10'
			} else if (operatingSystemName.startsWith('Windows 11')) {
				unifiedOsName = 'Windows 11'
			}

			// Operating System Level
			if (!osMap.has(unifiedOsName)) {
				osMap.set(unifiedOsName, {
					name: unifiedOsName,
					count: 0,
					typeOfSiteCount: {},
					administrativeRegion: []
				})
			}
			const osEntry = osMap.get(unifiedOsName)!
			osEntry.count += countAsNumber
			osEntry.typeOfSiteCount[typeOfSiteName] = (osEntry.typeOfSiteCount[typeOfSiteName] ?? 0) + countAsNumber

			// Administrative Region Level
			let adminRegionEntry = osEntry.administrativeRegion.find(c => c.name === administrativeRegionName)
			if (!adminRegionEntry) {
				adminRegionEntry = {
					name: administrativeRegionName,
					count: 0,
					typeOfSiteCount: {},
					regions: []
				}
				osEntry.administrativeRegion.push(adminRegionEntry)
			}
			adminRegionEntry.count += countAsNumber
			adminRegionEntry.typeOfSiteCount[typeOfSiteName] =
				(adminRegionEntry.typeOfSiteCount[typeOfSiteName] ?? 0) + countAsNumber

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
				(regionEntry.typeOfSiteCount[typeOfSiteName] ?? 0) + countAsNumber

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
				(stateEntry.typeOfSiteCount[typeOfSiteName] ?? 0) + countAsNumber

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
			cityEntry.typeOfSiteCount[typeOfSiteName] = (cityEntry.typeOfSiteCount[typeOfSiteName] ?? 0) + countAsNumber

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
			siteEntry.typeOfSiteCount[typeOfSiteName] = (siteEntry.typeOfSiteCount[typeOfSiteName] ?? 0) + countAsNumber

			//locations Level
			siteEntry.locations.push({
				name: locationName,
				typeOfSite: typeOfSiteName,
				count: countAsNumber
			})
		}

		return Array.from(osMap.values())
	}
}
