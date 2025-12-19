/* eslint-disable @typescript-eslint/no-explicit-any */
import { History } from '../domain/History'
import { GetAllBaseService } from '../../Shared/methods/getAll.abstract'
import { type ResponseService } from '../../Shared/domain/ResponseType'
import { type HistoryDto } from '../domain/History.dto'
import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type HistoryRepository } from '../domain/HistoryRepository'
import { type StatusRepository } from '../../Device/Status/domain/StatusRepository'
import { type CategoryRepository } from '../../Category/Category/domain/CategoryRepository'
import { type BrandRepository } from '../../Brand/domain/repository/BrandRepository'
import { type EmployeeRepository } from '../../employee/Employee/domain/Repository/EmployeeRepository'
import { type ModelSeriesRepository } from '../../ModelSeries/ModelSeries/domain/ModelSeriesRepository'
import { type HardDriveTypeRepository } from '../../Features/HardDrive/HardDriveType/domain/HardDriveTypeRepository'
import { type HardDriveCapacityRepository } from '../../Features/HardDrive/HardDriveCapacity/domain/HardDriveCapacityRepository'
import { type OperatingSystemRepository } from '../../Features/OperatingSystem/OperatingSystem/domain/OperatingSystemRepository'
import { type OperatingSystemArqRepository } from '../../Features/OperatingSystem/OperatingSystemArq/domain/OperatingSystemArqRepository'
import { type LocationRepository } from '../../Location/Location/domain/LocationRepository'
import { type ProcessorRepository } from '../../Features/Processor/Processor/domain/ProcessorRepository'

/**
 * @description Service to find all history records, enriching them with related entity names.
 * This service is optimized to prevent N+1 query problems by fetching related data in bulk.
 */
export class HistoryFinderAll extends GetAllBaseService<HistoryDto> {
	private readonly historyRepository: HistoryRepository
	private readonly statusRepository: StatusRepository
	private readonly employeeRepository: EmployeeRepository
	private readonly brandRepository: BrandRepository
	private readonly categoryRepository: CategoryRepository
	private readonly modelSeriesRepository: ModelSeriesRepository
	private readonly hardDriveTypeRepository: HardDriveTypeRepository
	private readonly hardDriveCapacityRepository: HardDriveCapacityRepository
	private readonly operatingSystemRepository: OperatingSystemRepository
	private readonly operatingSystemArqRepository: OperatingSystemArqRepository
	private readonly locationRepository: LocationRepository
	private readonly processorRepository: ProcessorRepository
	constructor({
		historyRepository,
		statusRepository,
		employeeRepository,
		brandRepository,
		categoryRepository,
		modelSeriesRepository,
		hardDriveTypeRepository,
		hardDriveCapacityRepository,
		operatingSystemRepository,
		operatingSystemArqRepository,
		locationRepository,
		processorRepository
	}: {
		historyRepository: HistoryRepository
		statusRepository: StatusRepository
		employeeRepository: EmployeeRepository
		brandRepository: BrandRepository
		categoryRepository: CategoryRepository
		modelSeriesRepository: ModelSeriesRepository
		hardDriveTypeRepository: HardDriveTypeRepository
		hardDriveCapacityRepository: HardDriveCapacityRepository
		operatingSystemRepository: OperatingSystemRepository
		operatingSystemArqRepository: OperatingSystemArqRepository
		locationRepository: LocationRepository
		processorRepository: ProcessorRepository
	}) {
		super()
		this.historyRepository = historyRepository
		this.statusRepository = statusRepository
		this.employeeRepository = employeeRepository
		this.brandRepository = brandRepository
		this.categoryRepository = categoryRepository
		this.modelSeriesRepository = modelSeriesRepository
		this.hardDriveTypeRepository = hardDriveTypeRepository
		this.hardDriveCapacityRepository = hardDriveCapacityRepository
		this.operatingSystemRepository = operatingSystemRepository
		this.operatingSystemArqRepository = operatingSystemArqRepository
		this.locationRepository = locationRepository
		this.processorRepository = processorRepository
	}

	/**
	 * @description Executes the history search and enrichment.
	 * @param {Criteria} criteria - The criteria for filtering and pagination.
	 * @returns {Promise<ResponseService<HistoryDto>>} A paginated response of enriched history DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<HistoryDto>> {
		const { data, total } = await this.historyRepository.searchAll(criteria)

		if (data.length === 0) {
			return this.response({ data: [], total: 0, pageNumber: criteria.pageNumber, pageSize: criteria.pageSize })
		}

		const entityIds = this.collectEntityIds(data)
		const namesMap = await this.fetchEntityNames(entityIds)

		const mappedData = this.mapHistoryData(data, namesMap)

		return this.response({
			data: mappedData,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}

	private collectEntityIds(data: HistoryDto[]): Record<string, Set<string>> {
		const ids: Record<string, Set<string>> = {
			status: new Set<string>(),
			category: new Set<string>(),
			brand: new Set<string>(),
			model: new Set<string>(),
			employee: new Set<string>(),
			hardDriveType: new Set<string>(),
			hardDriveCapacity: new Set<string>(),
			operatingSystem: new Set<string>(),
			operatingSystemArq: new Set<string>(),
			location: new Set<string>(),
			processor: new Set<string>()
		}

		for (const item of data) {
			const cambios = History.compararDatos(item.newData, item.oldData)
			for (const key in cambios) {
				const { oldValue, newValue } = cambios[key]
				this.addIdToSet(ids, key, oldValue as string | null)
				this.addIdToSet(ids, key, newValue as string | null)
			}
		}
		return ids
	}

	private addIdToSet(ids: Record<string, Set<string>>, key: string, value: string | null) {
		if (value && key.endsWith('Id')) {
			const type = key.slice(0, -2)
			if (ids[type]) {
				ids[type].add(value)
			}
		}
	}

	private async fetchEntityNames(ids: Record<string, Set<string>>): Promise<Record<string, Map<string, string>>> {
		const [statuses, categories, brands, models, employees, hddTypes, hddCaps, os, osArqs, locations, processors] =
			await Promise.all([
				this.fetchNames(this.statusRepository, Array.from(ids.status)),
				this.fetchNames(this.categoryRepository, Array.from(ids.category)),
				this.fetchNames(this.brandRepository, Array.from(ids.brand)),
				this.fetchNames(this.modelSeriesRepository, Array.from(ids.model)),
				this.fetchNames(this.employeeRepository, Array.from(ids.employee), 'userName'),
				this.fetchNames(this.hardDriveTypeRepository, Array.from(ids.hardDriveType)),
				this.fetchNames(this.hardDriveCapacityRepository, Array.from(ids.hardDriveCapacity), 'name', ' Gb'),
				this.fetchNames(this.operatingSystemRepository, Array.from(ids.operatingSystem)),
				this.fetchNames(this.operatingSystemArqRepository, Array.from(ids.operatingSystemArq)),
				this.fetchNames(this.locationRepository, Array.from(ids.location)),
				this.fetchNames(this.processorRepository, Array.from(ids.processor))
			])

		return {
			status: statuses,
			category: categories,
			brand: brands,
			model: models,
			employee: employees,
			hardDriveType: hddTypes,
			hardDriveCapacity: hddCaps,
			operatingSystem: os,
			operatingSystemArq: osArqs,
			location: locations,
			processor: processors
		}
	}

	private async fetchNames(
		repository: any,
		ids: string[],
		nameField = 'name',
		suffix = ''
	): Promise<Map<string, string>> {
		if (ids.length === 0) return new Map()
		const results = await Promise.all(ids.map(id => repository.findById(id)))
		const map = new Map<string, string>()
		for (const item of results) {
			if (item) {
				map.set(item.id, `${item[nameField]}${suffix}`)
			}
		}
		return map
	}

	private mapHistoryData(data: HistoryDto[], namesMap: Record<string, Map<string, string>>): HistoryDto[] {
		return data.map(item => {
			const cambios = History.compararDatos(item.newData, item.oldData)
			const enrichedCambios: Record<string, { oldValue: unknown; newValue: unknown }> = {}

			for (const key in cambios) {
				const { oldValue, newValue } = cambios[key]
				const type = key.endsWith('Id') ? key.slice(0, -2) : key

				const nameMap = namesMap[type]
				enrichedCambios[key] = {
					oldValue: nameMap?.get(oldValue as string) ?? oldValue,
					newValue: nameMap?.get(newValue as string) ?? newValue
				}
			}

			if (enrichedCambios.memoryRamCapacity) {
				const oldVal = Number(enrichedCambios.memoryRamCapacity.oldValue)
				const newVal = Number(enrichedCambios.memoryRamCapacity.newValue)
				if (oldVal === newVal) {
					delete enrichedCambios.memoryRamCapacity
				}
			}

			delete enrichedCambios.id

			return {
				...item,
				cambios: enrichedCambios
			}
		})
	}
}
