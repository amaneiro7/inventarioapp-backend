import { History } from '../domain/History'
import { GetAllBaseService } from '../../Shared/methods/getAll.abstract'
import { type ResponseService } from '../../Shared/domain/ResponseType'
import { type HistoryDto } from '../domain/History.dto'
import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type HistoryRepository } from '../domain/HistoryRepository'
import { type StatusRepository } from '../../Device/Status/domain/StatusRepository'
import { type CategoryRepository } from '../../Category/Category/domain/CategoryRepository'
import { type BrandRepository } from '../../Brand/domain/BrandRepository'
import { type EmployeeRepository } from '../../employee/Employee/domain/Repository/EmployeeRepository'
import { type ModelSeriesRepository } from '../../ModelSeries/ModelSeries/domain/ModelSeriesRepository'
import { type HardDriveTypeRepository } from '../../Features/HardDrive/HardDriveType/domain/HardDriveTypeRepository'
import { type HardDriveCapacityRepository } from '../../Features/HardDrive/HardDriveCapacity/domain/HardDriveCapacityRepository'
import { type OperatingSystemRepository } from '../../Features/OperatingSystem/OperatingSystem/domain/OperatingSystemRepository'
import { type OperatingSystemArqRepository } from '../../Features/OperatingSystem/OperatingSystemArq/domain/OperatingSystemArqRepository'
import { type LocationRepository } from '../../Location/Location/domain/LocationRepository'
import { type ProcessorRepository } from '../../Features/Processor/Processor/domain/ProcessorRepository'

export class HistoryFinderAll extends GetAllBaseService<HistoryDto> {
	constructor(
		private readonly historyRepository: HistoryRepository,
		private readonly statusRepository: StatusRepository,
		private readonly employeeRepository: EmployeeRepository,
		private readonly brandRepository: BrandRepository,
		private readonly categoryRepository: CategoryRepository,
		private readonly modelSeriesRepository: ModelSeriesRepository,
		private readonly hardDriveTypeRepository: HardDriveTypeRepository,
		private readonly hardDriveCapacityRepository: HardDriveCapacityRepository,
		private readonly operatingSystemRepository: OperatingSystemRepository,
		private readonly operatingSystemArqRepository: OperatingSystemArqRepository,
		private readonly locationRepository: LocationRepository,
		private readonly processorRepository: ProcessorRepository
	) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<HistoryDto>> {
		const { data, total } = await this.historyRepository.searchAll(criteria)

		const mappedData: HistoryDto[] = await Promise.all(
			data.map(async data => {
				const cambios = History.compararDatos(data.newData, data.oldData)
				// Buscar el nombre del status
				if (cambios?.statusId?.newValue) {
					const statusNew = await this.statusRepository.searchById(cambios.statusId.newValue)
					cambios.statusId.newValue = statusNew?.name
				}
				if (cambios?.statusId?.oldValue) {
					const statusOld = await this.statusRepository.searchById(cambios.statusId.oldValue)
					cambios.statusId.oldValue = statusOld?.name
				}

				// Buscar el nombre de la categoría
				if (cambios?.categoryId?.newValue) {
					const categoryNew = await this.categoryRepository.searchById(cambios.categoryId.newValue)
					cambios.categoryId.newValue = categoryNew?.name
				}
				if (cambios?.categoryId?.oldValue) {
					const categoryOld = await this.categoryRepository.searchById(cambios.categoryId.oldValue)
					cambios.categoryId.oldValue = categoryOld?.name
				}
				// Buscar el nombre de la marca
				if (cambios?.brandId?.newValue) {
					const brandNew = await this.brandRepository.searchById(cambios.brandId.newValue)
					cambios.brandId.newValue = brandNew?.name
				}
				if (cambios?.brandId?.oldValue) {
					const brandOld = await this.brandRepository.searchById(cambios.brandId.oldValue)
					cambios.brandId.oldValue = brandOld?.name
				}
				// Buscar el nombre de el modelo
				if (cambios?.modelId?.newValue) {
					const modelNew = await this.modelSeriesRepository.searchById(cambios.modelId.newValue)
					cambios.modelId.newValue = modelNew?.name
				}
				if (cambios?.modelId?.oldValue) {
					const modelOld = await this.modelSeriesRepository.searchById(cambios.modelId.oldValue)
					cambios.modelId.oldValue = modelOld?.name
				}
				// Buscar el userName del empleado
				if (cambios?.employeeId?.newValue) {
					const employeeNew = await this.employeeRepository.searchById(cambios.employeeId.newValue)
					cambios.employeeId.newValue = employeeNew?.userName
				}
				if (cambios?.employeeId?.oldValue) {
					const employeeOld = await this.employeeRepository.searchById(cambios.employeeId.oldValue)
					cambios.employeeId.oldValue = employeeOld?.userName
				}
				// Buscar el name del tipo de disco duro
				if (cambios?.hardDriveTypeId?.newValue) {
					const hardDriveTypeNew = await this.hardDriveTypeRepository.searchById(
						cambios.hardDriveTypeId.newValue
					)
					cambios.hardDriveTypeId.newValue = hardDriveTypeNew?.name
				}
				if (cambios?.hardDriveTypeId?.oldValue) {
					const hardDriveTypeOld = await this.hardDriveTypeRepository.searchById(
						cambios.hardDriveTypeId.oldValue
					)
					cambios.hardDriveTypeId.oldValue = hardDriveTypeOld?.name
				}
				// Buscar el name de la capacidad del disco duro
				if (cambios?.hardDriveCapacityId?.newValue) {
					const hardDriveCapacityNew = await this.hardDriveCapacityRepository.searchById(
						cambios.hardDriveCapacityId.newValue
					)
					cambios.hardDriveCapacityId.newValue = hardDriveCapacityNew?.name
				}
				if (cambios?.hardDriveCapacityId?.oldValue) {
					const hardDriveCapacityOld = await this.hardDriveCapacityRepository.searchById(
						cambios.hardDriveCapacityId.oldValue
					)
					cambios.hardDriveCapacityId.oldValue = `${hardDriveCapacityOld?.name} Gb`
				}
				// Buscar el name del sistema operativo
				if (cambios?.operatingSystemId?.newValue) {
					const operatingSystemNew = await this.operatingSystemRepository.searchById(
						cambios.operatingSystemId.newValue
					)
					cambios.operatingSystemId.newValue = operatingSystemNew?.name
				}
				if (cambios?.operatingSystemId?.oldValue) {
					const operatingSystemOld = await this.operatingSystemRepository.searchById(
						cambios.operatingSystemId.oldValue
					)
					cambios.operatingSystemId.oldValue = operatingSystemOld?.name
				}
				// Buscar el name de la arquitectura del sistema operativo
				if (cambios?.operatingSystemArqId?.newValue) {
					const operatingSystemArqNew = await this.operatingSystemArqRepository.searchById(
						cambios.operatingSystemArqId.newValue
					)
					cambios.operatingSystemArqId.newValue = operatingSystemArqNew?.name
				}
				if (cambios?.operatingSystemArqId?.oldValue) {
					const operatingSystemArqOld = await this.operatingSystemArqRepository.searchById(
						cambios.operatingSystemArqId.oldValue
					)
					cambios.operatingSystemArqId.oldValue = operatingSystemArqOld?.name
				}
				// Buscar el name de la ubicación
				if (cambios?.locationId?.newValue) {
					const locationNew = await this.locationRepository.searchById(cambios.locationId.newValue)
					cambios.locationId.newValue = locationNew?.name
				}
				if (cambios?.locationId?.oldValue) {
					const locationOld = await this.locationRepository.searchById(cambios.locationId.oldValue)
					cambios.locationId.oldValue = locationOld?.name
				}
				// Buscar el name del procesador
				if (cambios?.processorId?.newValue) {
					const processorNew = await this.processorRepository.searchById(cambios.processorId.newValue)
					cambios.processorId.newValue = processorNew?.name
				}
				if (cambios?.processorId?.oldValue) {
					const processorOld = await this.processorRepository.searchById(cambios.processorId.oldValue)
					cambios.processorId.oldValue = processorOld?.name
				}

				if (cambios?.id) {
					delete cambios.id
				}

				return {
					...data,
					cambios
				}
			})
		)

		return this.response({
			data: mappedData,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
