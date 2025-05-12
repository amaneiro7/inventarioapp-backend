import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { TypeOfSiteList } from '../../../../Location/TypeOfSite/domain/TypeOfSiteList'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { Op } from 'sequelize'
import { type CountOSByRegionRepository } from '../../domain/CountOSByRegionRepository'

export class SequelizeCountOSByRegionRepository implements CountOSByRegionRepository {
	private readonly cacheKey: string = 'dashboard'
	constructor(private readonly cache: CacheService) {}

	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-osByRegion-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
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
							attributes: [],
							include: [
								{
									association: 'operatingSystem',
									attributes: []
								}
							]
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
				})
				const operatingSystemMap = new Map()
				result.forEach((item: any) => {
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
					const countNumber = Number(count) // Convertir a número entero

					if (!operatingSystemMap.has(operatingSystemName)) {
						operatingSystemMap.set(operatingSystemName, {
							name: operatingSystemName,
							count: 0,
							typeOfSiteCount: {},
							administrativeRegion: new Map()
						})
					}

					const operatingSystem = operatingSystemMap.get(operatingSystemName)
					operatingSystem.count += countNumber
					operatingSystem.typeOfSiteCount![typeOfSiteName] =
						(operatingSystem.typeOfSiteCount![typeOfSiteName] || 0) + countNumber

					if (!operatingSystem.administrativeRegion.has(administrativeRegionName)) {
						operatingSystem.administrativeRegion.set(administrativeRegionName, {
							name: administrativeRegionName,
							count: 0,
							typeOfSiteCount: {},
							region: new Map()
						})
					}

					const administrativeRegion = operatingSystem.administrativeRegion.get(administrativeRegionName)
					administrativeRegion.count += countNumber
					administrativeRegion.typeOfSiteCount![typeOfSiteName] =
						(administrativeRegion.typeOfSiteCount![typeOfSiteName] || 0) + countNumber

					if (!administrativeRegion.region.has(regionName)) {
						administrativeRegion.region.set(regionName, {
							name: regionName,
							count: 0,
							typeOfSiteCount: {},
							states: new Map()
						})
					}

					const region = administrativeRegion.region.get(regionName)
					region.count += countNumber
					region.typeOfSiteCount![typeOfSiteName] =
						(region.typeOfSiteCount![typeOfSiteName] || 0) + countNumber

					if (!region.states.has(stateName)) {
						region.states.set(stateName, {
							name: stateName,
							count: 0,
							typeOfSiteCount: {},
							cities: new Map()
						})
					}

					const state = region.states.get(stateName)
					state.count += countNumber
					state.typeOfSiteCount![typeOfSiteName] = (state.typeOfSiteCount![typeOfSiteName] || 0) + countNumber

					if (!state.cities.has(cityName)) {
						state.cities.set(cityName, {
							name: cityName,
							count: 0,
							typeOfSiteCount: {},
							sites: new Map()
						})
					}

					const city = state.cities.get(cityName)
					city.count += countNumber
					city.typeOfSiteCount![typeOfSiteName] = (city.typeOfSiteCount![typeOfSiteName] || 0) + countNumber

					if (!city.sites.has(siteName)) {
						city.sites.set(siteName, {
							name: siteName,
							count: 0,
							typeOfSiteCount: {},
							locations: new Map()
						})
					}
					const site = city.sites.get(siteName)
					site.count += countNumber
					site.typeOfSiteCount![typeOfSiteName] = (site.typeOfSiteCount![typeOfSiteName] || 0) + countNumber

					if (!site.locations.has(locationName)) {
						site.locations.set(locationName, {
							name: locationName,
							typeOfSite: typeOfSiteName,
							count: countNumber
						})
					} else {
						site.locations.get(locationName).count += countNumber
					}
				})

				// Convertir los mapas a arrays
				const transformedData = Array.from(operatingSystemMap.values()).map((operatingSystem: any) => ({
					...operatingSystem,
					administrativeRegion: Array.from(operatingSystem.administrativeRegion.values()).map(
						(administrativeRegion: any) => ({
							...administrativeRegion,
							region: Array.from(administrativeRegion.region.values()).map((region: any) => ({
								...region,
								states: Array.from(region.states.values()).map((state: any) => ({
									...state,
									cities: Array.from(state.cities.values()).map((city: any) => ({
										...city,
										sites: Array.from(city.sites.values()).map((site: any) => ({
											...site,
											locations: Array.from(site.locations.values())
										}))
									}))
								}))
							}))
						})
					)
				}))

				return transformedData
			}
		})
	}
}
