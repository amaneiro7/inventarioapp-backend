/* eslint-disable @typescript-eslint/no-explicit-any */
import { History } from '../entity/History'
import { type HistoryDto } from '../entity/History.dto'
import { type StatusRepository } from '../../../Device/Status/domain/repository/StatusRepository'
import { type CategoryRepository } from '../../../Category/Category/domain/repository/CategoryRepository'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type ModelSeriesRepository } from '../../../ModelSeries/ModelSeries/domain/repository/ModelSeriesRepository'
import { type HardDriveTypeRepository } from '../../../Features/HardDrive/HardDriveType/domain/repository/HardDriveTypeRepository'
import { type HardDriveCapacityRepository } from '../../../Features/HardDrive/HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { type OperatingSystemRepository } from '../../../Features/OperatingSystem/OperatingSystem/domain/repository/OperatingSystemRepository'
import { type OperatingSystemArqRepository } from '../../../Features/OperatingSystem/OperatingSystemArq/domain/repository/OperatingSystemArqRepository'
import { type LocationRepository } from '../../../Location/Location/domain/repository/LocationRepository'
import { type ProcessorRepository } from '../../../Features/Processor/domain/repository/ProcessorRepository'

export class HistoryEnricher {
	constructor(
		private readonly repositories: {
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
		}
	) {}

	/**
	 * @method execute
	 * @description Enriches history records by replacing IDs with readable names.
	 */
	async execute(data: HistoryDto[]): Promise<HistoryDto[]> {
		if (data.length === 0) return []

		const entityIds = this.collectEntityIds(data)
		const namesMap = await this.fetchEntityNames(entityIds)

		return this.mapHistoryData(data, namesMap)
	}

	/**
	 * @method sortAndFormat
	 * @description Sorts by date (desc) and adds a formatted date string for the frontend.
	 */
	sortAndFormat(history: any[]): any[] {
		if (!Array.isArray(history)) return []
		return history
			.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
			.map(record => ({
				...record,
				formattedDate: new Date(record.createdAt).toLocaleString('es-VE', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				})
			}))
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
		const {
			statusRepository,
			categoryRepository,
			brandRepository,
			modelSeriesRepository,
			employeeRepository,
			hardDriveTypeRepository,
			hardDriveCapacityRepository,
			operatingSystemRepository,
			operatingSystemArqRepository,
			locationRepository,
			processorRepository
		} = this.repositories

		const [statuses, categories, brands, models, employees, hddTypes, hddCaps, os, osArqs, locations, processors] =
			await Promise.all([
				this.fetchNames(statusRepository, Array.from(ids.status)),
				this.fetchNames(categoryRepository, Array.from(ids.category)),
				this.fetchNames(brandRepository, Array.from(ids.brand)),
				this.fetchNames(modelSeriesRepository, Array.from(ids.model)),
				this.fetchNames(employeeRepository, Array.from(ids.employee), 'userName'),
				this.fetchNames(hardDriveTypeRepository, Array.from(ids.hardDriveType)),
				this.fetchNames(hardDriveCapacityRepository, Array.from(ids.hardDriveCapacity), 'name', ' Gb'),
				this.fetchNames(operatingSystemRepository, Array.from(ids.operatingSystem)),
				this.fetchNames(operatingSystemArqRepository, Array.from(ids.operatingSystemArq)),
				this.fetchNames(locationRepository, Array.from(ids.location)),
				this.fetchNames(processorRepository, Array.from(ids.processor))
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

		let results: any[] = []

		// OPTIMIZATION: Use findByIds if available to avoid N+1 queries
		if (typeof repository.findByIds === 'function') {
			try {
				results = await repository.findByIds(ids)
			} catch {
				// Fallback in case of error or unexpected implementation
				results = (await Promise.all(ids.map((id: string) => repository.findById(id)))).filter(Boolean)
			}
		} else {
			// Fallback for repositories without findByIds
			results = (await Promise.all(ids.map((id: string) => repository.findById(id)))).filter(Boolean)
		}

		const map = new Map<string, string>()
		for (const item of results) {
			if (item) {
				// Handle both DTOs and Entities (assuming they have the nameField)
				const val = item[nameField]
				map.set(item.id, `${val}${suffix}`)
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
