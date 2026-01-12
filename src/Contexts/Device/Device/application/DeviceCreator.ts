import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { DeviceConsistencyValidator } from '../domain/service/DeviceConsistencyValidator'
import { ModelSeriesExistenceChecker } from '../../../ModelSeries/ModelSeries/domain/service/ModelSeriesExistanceChecker'
import { DeviceActivoUniquenessChecker } from '../domain/service/DeviceActivoUniquenessChecker'
import { DeviceSerialUniquenessChecker } from '../domain/service/DeviceSerialUniquenessChecker'
import { StatusExistenceChecker } from '../../Status/domain/service/StatusExistanceChecker'
import { EmployeeExistenceChecker } from '../../../employee/Employee/domain/service/EmployeeExistanceChecker'
import { LocationExistenceChecker } from '../../../Location/Location/domain/service/LocationExistanceChecker'
import { DeviceFactory } from '../domain/entity/DeviceFactory'
import { type JwtPayloadUser } from '../../../Auth/domain/service/GenerateToken'
import { type DeviceParams } from '../domain/dto/Device.dto'
import { type DeviceRepository } from '../domain/repository/DeviceRepository'
import { type ModelSeriesRepository } from '../../../ModelSeries/ModelSeries/domain/repository/ModelSeriesRepository'
import { type StatusRepository } from '../../Status/domain/repository/StatusRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/repository/LocationRepository'
import { type OperatingSystemArqRepository } from '../../../Features/OperatingSystem/OperatingSystemArq/domain/repository/OperatingSystemArqRepository'
import { type OperatingSystemRepository } from '../../../Features/OperatingSystem/OperatingSystem/domain/repository/OperatingSystemRepository'
import { type HardDriveTypeRepository } from '../../../Features/HardDrive/HardDriveType/domain/repository/HardDriveTypeRepository'
import { type HardDriveCapacityRepository } from '../../../Features/HardDrive/HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { type ProcessorRepository } from '../../../Features/Processor/domain/repository/ProcessorRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * @description Use case for creating a new Device.
 * Orchestrates the validation of dependencies (Brand, Category, Model, Employee)
 * and delegates the creation logic to the DeviceFactory.
 */
export class DeviceCreator {
	private readonly deviceRepository: DeviceRepository
	private readonly eventBus: EventBus
	private readonly deviceSerialUniquenessChecker: DeviceSerialUniquenessChecker
	private readonly deviceActivoUniquenessChecker: DeviceActivoUniquenessChecker
	private readonly statusExistenceChecker: StatusExistenceChecker
	private readonly modelSeriesExistenceChecker: ModelSeriesExistenceChecker
	private readonly employeeExistenceChecker: EmployeeExistenceChecker
	private readonly locationExistenceChecker: LocationExistenceChecker
	private readonly deviceFactory: DeviceFactory
	private readonly deviceConsistencyValidator = new DeviceConsistencyValidator()
	constructor({
		deviceRepository,
		employeeRepository,
		modelSeriesRepository,
		statusRepository,
		locationRepository,
		hardDriveCapacityRepository,
		hardDriveTypeRepository,
		operatingSystemRepository,
		operatingSystemArqRepository,
		processorRepository,
		eventBus
	}: {
		deviceRepository: DeviceRepository
		statusRepository: StatusRepository
		modelSeriesRepository: ModelSeriesRepository
		employeeRepository: EmployeeRepository
		locationRepository: LocationRepository
		processorRepository: ProcessorRepository
		hardDriveCapacityRepository: HardDriveCapacityRepository
		hardDriveTypeRepository: HardDriveTypeRepository
		operatingSystemRepository: OperatingSystemRepository
		operatingSystemArqRepository: OperatingSystemArqRepository
		eventBus: EventBus
	}) {
		this.deviceRepository = deviceRepository
		this.eventBus = eventBus
		// Inicializar Checkers
		this.deviceSerialUniquenessChecker = new DeviceSerialUniquenessChecker(deviceRepository)
		this.deviceActivoUniquenessChecker = new DeviceActivoUniquenessChecker(deviceRepository)
		this.statusExistenceChecker = new StatusExistenceChecker(statusRepository)
		this.modelSeriesExistenceChecker = new ModelSeriesExistenceChecker(modelSeriesRepository)
		this.employeeExistenceChecker = new EmployeeExistenceChecker(employeeRepository)
		this.locationExistenceChecker = new LocationExistenceChecker(locationRepository)
		// Inicializar Factory con sus dependencias
		this.deviceFactory = new DeviceFactory({
			deviceRepository,
			processorRepository,
			hardDriveCapacityRepository,
			hardDriveTypeRepository,
			operatingSystemArqRepository,
			operatingSystemRepository
		})
	}

	/**
	 * @description Executes the device creation process.
	 * @param {DeviceParams} params - The parameters for creating the device.
	 * @returns {Promise<void>}
	 */
	async run({ params, user }: { params: DeviceParams; user?: JwtPayloadUser }): Promise<void> {
		if (!user?.sub) {
			throw new InvalidArgumentError('User is required to perform this action.')
		}
		const { modelId, brandId, categoryId, activo, statusId, employeeId, locationId, serial } = params

		// 1. Validaciones Globales (Existencia y Unicidad)
		const [modelSeries, location] = await Promise.all([
			this.modelSeriesExistenceChecker.ensureExist({
				modelSeriesId: modelId,
				brandId,
				categoryId
			}),
			this.locationExistenceChecker.ensureExist(locationId),
			this.deviceSerialUniquenessChecker.ensureUnique({ serial, brandId, categoryId }),
			this.deviceActivoUniquenessChecker.ensureUnique(activo),
			this.statusExistenceChecker.ensureExist(statusId),
			this.employeeExistenceChecker.ensureExist(employeeId)
		])
		const generic = modelSeries?.generic ?? false
		const typeOfSite = location?.typeOfSiteId ?? null

		// 2. Creación del Agregado (La Factory valida componentes internos como CPU, RAM, etc.)
		const device = await this.deviceFactory.create(params)

		// 3. Validación de reglas de negocio
		this.deviceConsistencyValidator.validate({ device, generic, typeOfSite })

		// 4. Persistencia
		await this.deviceRepository.save(device.toPrimitives())

		// 5. Publicación de Eventos
		const events = device.pullDomainEvents()
		events.forEach(event => Object.assign(event, { userId: user.sub }))
		await this.eventBus.publish(events)
	}
}
