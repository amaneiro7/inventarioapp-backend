import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { TypeOfSiteList } from '../../../../Location/TypeOfSite/domain/TypeOfSiteList'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { Op } from 'sequelize'
import { type ComputerDashboardRepository } from '../../domain/ComputerDashboardRepository'
import { StatusList } from '../../../Status/domain/StatusList'
import { LocationModel } from '../../../../Location/Location/infrastructure/sequelize/LocationSchema'
import { EmployeeModel } from '../../../../employee/Employee/infrastructure/sequelize/EmployeeSchema'

export class SequelizeComputerDashboardRepository implements ComputerDashboardRepository {
	private readonly cacheKey: string = 'dashboard'
	constructor(private readonly cache: CacheService) {}

	async countTotalAgencies(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-totalAgency-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				return await LocationModel.count({
					where: {
						typeOfSiteId: TypeOfSiteList.AGENCIA
					}
				})
			}
		})
	}

	async countTotalHDD(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-hdd-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
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
				})
				const hddCapacityMap = new Map()
				result.forEach((item: any) => {
					const { hddCapacityName, hddTypeName, count } = item
					const countAsNumber = Number(count)
					const hddCapacityNameWithGB = `${hddCapacityName} GB`

					if (!hddCapacityMap.has(hddCapacityNameWithGB)) {
						hddCapacityMap.set(hddCapacityNameWithGB, {
							name: hddCapacityNameWithGB,
							count: 0,
							hddType: new Map()
						})
					}
					const hddCapacity = hddCapacityMap.get(hddCapacityNameWithGB)
					hddCapacity.count += countAsNumber

					if (!hddCapacity.hddType.has(hddTypeName)) {
						hddCapacity.hddType.set(hddTypeName, {
							name: hddTypeName,
							count: countAsNumber
						})
					} else {
						hddCapacity.hddType.get(hddTypeName).count += countAsNumber
					}
				})

				// convertir los mapas a arrays
				const transformedData = Array.from(hddCapacityMap.values()).map((hddCapacity: any) => ({
					...hddCapacity,
					hddType: Array.from(hddCapacity.hddType.values())
				}))

				return transformedData
			}
		})
	}
	async countActiveEmployees(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-activeEmployees-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				return await EmployeeModel.count({
					where: {
						isStillWorking: true
					}
				})
			}
		})
	}

	async countTotal(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-total-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				return await DeviceModel.count({
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
							attributes: [],
							where: {
								[Op.not]: {
									id: StatusList.DESINCORPORADO
								}
							}
						}
					]
				})
			}
		})
	}
	async countByStatus(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-status-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
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
				})
				return result
					.map((status: any) => ({ name: status.name, count: Number(status.count) }))
					.sort((a, b) => b.count - a.count)
			}
		})
	}
	async countByCategory(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-category-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
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
				})
				return result.reduce((acc: any[], category: any) => {
					const categoryIndex = acc.findIndex(c => c.name === category.name)

					if (categoryIndex === -1) {
						acc.push({
							name: category.name,
							count: Number(category.count),
							typeOfSite: [
								{
									name: category.typeOfSiteName,
									count: Number(category.count)
								}
							]
						})
					} else {
						acc[categoryIndex].count += Number(category.count)
						acc[categoryIndex].typeOfSite.push({
							name: category.typeOfSiteName,
							count: Number(category.count)
						})
					}

					return acc
				}, [])
			}
		})
	}

	async countByBrand(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-brand-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
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
				})

				const brandMap = new Map()
				result.forEach((item: any) => {
					const { brandName, modelName, typeOfSiteName, categoryName, count } = item
					const countAsNumber = Number(count)

					if (!brandMap.has(brandName)) {
						brandMap.set(brandName, {
							name: brandName,
							count: 0,
							model: new Map()
						})
					}
					const brand = brandMap.get(brandName)
					brand.count += countAsNumber

					if (!brand.model.has(modelName)) {
						brand.model.set(modelName, {
							name: modelName,
							category: categoryName,
							count: 0,
							typeOfSite: new Map()
						})
					}

					const model = brand.model.get(modelName)
					model.count += countAsNumber

					if (!model.typeOfSite.has(typeOfSiteName)) {
						model.typeOfSite.set(typeOfSiteName, {
							name: typeOfSiteName,
							count: countAsNumber
						})
					} else {
						model.typeOfSite.get(typeOfSiteName).count += countAsNumber
					}
				})

				// convertir los mapas a arrays
				const transformedData = Array.from(brandMap.values()).map((brand: any) => ({
					...brand,
					model: Array.from(brand.model.values()).map((model: any) => ({
						...model,
						typeOfSite: Array.from(model.typeOfSite.values())
					}))
				}))

				return transformedData
			}
		})
	}
	async countByRegion(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-region-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
					attributes: [
						[sequelize.col('location.name'), 'locationName'],
						[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
						[sequelize.col('location.site.name'), 'siteName'],
						[sequelize.col('location.site.city.name'), 'cityName'],
						[sequelize.col('location.site.city.state.name'), 'stateName'],
						[sequelize.col('location.site.city.state.region.name'), 'regionName'],
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
															attributes: []
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
						'location.site.city.state.region.name'
					],
					order: [
						[sequelize.col('location.site.city.state.region.name'), 'ASC'],
						[sequelize.col('location.site.city.state.name'), 'ASC'],
						[sequelize.col('location.site.city.name'), 'ASC'],
						[sequelize.col('location.site.name'), 'ASC'],
						[sequelize.col('location.name'), 'ASC']
					],
					raw: true
				})
				const regionMap = new Map()
				result.forEach((item: any) => {
					const { regionName, stateName, cityName, siteName, locationName, typeOfSiteName, count } = item
					const countNumber = Number(count) // Convertir a número entero

					if (!regionMap.has(regionName)) {
						regionMap.set(regionName, {
							name: regionName,
							count: 0,
							states: new Map()
						})
					}

					const region = regionMap.get(regionName)
					region.count += countNumber

					if (!region.states.has(stateName)) {
						region.states.set(stateName, {
							name: stateName,
							count: 0,
							cities: new Map()
						})
					}

					const state = region.states.get(stateName)
					state.count += countNumber

					if (!state.cities.has(cityName)) {
						state.cities.set(cityName, {
							name: cityName,
							count: 0,
							sites: new Map()
						})
					}

					const city = state.cities.get(cityName)
					city.count += countNumber

					if (!city.sites.has(siteName)) {
						city.sites.set(siteName, {
							name: siteName,
							count: 0,
							locations: new Map()
						})
					}
					const site = city.sites.get(siteName)
					site.count += countNumber

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
				const transformedData = Array.from(regionMap.values()).map((region: any) => ({
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

				return transformedData
			}
		})
	}

	async countTotalOperatingSystem(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-os-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
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
				})
				const operatingSystemMap = new Map()
				result.forEach((item: any) => {
					const { osName, arqName, count } = item
					const countAsNumber = Number(count)

					if (!operatingSystemMap.has(osName)) {
						operatingSystemMap.set(osName, {
							name: osName,
							count: 0,
							arq: new Map()
						})
					}
					const operatingSystem = operatingSystemMap.get(osName)
					operatingSystem.count += countAsNumber

					if (!operatingSystem.arq.has(arqName)) {
						operatingSystem.arq.set(arqName, {
							name: arqName,
							count: countAsNumber
						})
					} else {
						operatingSystem.arq.get(arqName).count += countAsNumber
					}
				})

				// convertir los mapas a arrays
				const transformedData = Array.from(operatingSystemMap.values()).map((operatingSystem: any) => ({
					...operatingSystem,
					arq: Array.from(operatingSystem.arq.values())
				}))

				return transformedData
			}
		})
	}
}
