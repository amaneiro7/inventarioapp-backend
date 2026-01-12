import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { Device } from '../domain/entity/Device'
import { DeviceDoesNotExistError } from '../domain/errors/DeviceDoesNotExistError'
import { DeviceId } from '../domain/valueObject/DeviceId'
import { DeviceConsistencyValidator } from '../domain/service/DeviceConsistencyValidator'
import { DeviceActivoUniquenessChecker } from '../domain/service/DeviceActivoUniquenessChecker'
import { StatusExistenceChecker } from '../../Status/domain/service/StatusExistanceChecker'
import { EmployeeExistenceChecker } from '../../../employee/Employee/domain/service/EmployeeExistanceChecker'
import { LocationExistenceChecker } from '../../../Location/Location/domain/service/LocationExistanceChecker'
import { ComputerNameUniquenessChecker } from '../domain/service/ComputerNameUniquenessChecker'
import { ProcessorExistenceChecker } from '../../../Features/Processor/domain/service/ProcessorExistanceChecker'
import { HardDriveCapacityExistenceChecker } from '../../../Features/HardDrive/HardDriveCapacity/domain/service/HardDriveCapacityExistanceChecker'
import { HardDriveTypeExistenceChecker } from '../../../Features/HardDrive/HardDriveType/domain/service/HardDriveTypeExistanceChecker'
import { OperatingSystemExistenceChecker } from '../../../Features/OperatingSystem/OperatingSystem/domain/service/OperatingSystemExistanceChecker'
import { OperatingSystemArqExistenceChecker } from '../../../Features/OperatingSystem/OperatingSystemArq/domain/service/OperatingSystemArqExistanceChecker'
import { DeviceFactory } from '../domain/entity/DeviceFactory'
import { DeviceComputer } from '../domain/entity/Computer'
import { DeviceHardDrive } from '../domain/entity/HardDrive'
import { DeviceSerialUniquenessChecker } from '../domain/service/DeviceSerialUniquenessChecker'
import { ModelSeriesExistenceChecker } from '../../../ModelSeries/ModelSeries/domain/service/ModelSeriesExistanceChecker'
import { type JwtPayloadUser } from '../../../Auth/domain/service/GenerateToken'
import { type DeviceRepository } from '../domain/repository/DeviceRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityRepository } from '../../../Features/HardDrive/HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { type HardDriveTypeRepository } from '../../../Features/HardDrive/HardDriveType/domain/repository/HardDriveTypeRepository'
import { type OperatingSystemRepository } from '../../../Features/OperatingSystem/OperatingSystem/domain/repository/OperatingSystemRepository'
import { type OperatingSystemArqRepository } from '../../../Features/OperatingSystem/OperatingSystemArq/domain/repository/OperatingSystemArqRepository'
import { type ProcessorRepository } from '../../../Features/Processor/domain/repository/ProcessorRepository'
import { type ModelSeriesRepository } from '../../../ModelSeries/ModelSeries/domain/repository/ModelSeriesRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type StatusRepository } from '../../Status/domain/repository/StatusRepository'
import { type LocationRepository } from '../../../Location/Location/domain/repository/LocationRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type TypeOfSiteId } from '../../../Location/TypeOfSite/domain/valueObject/TypeOfSiteId'
import { type Generic } from '../../../ModelSeries/ModelSeries/domain/valueObject/Generic'
import { type DeviceParams } from '../domain/dto/Device.dto'
import { type DeviceComputerParams } from '../domain/dto/Computer.dto'
import { type DeviceHardDriveParams } from '../domain/dto/HardDrive.dto'

export class DeviceUpdater {
	private readonly deviceRepository: DeviceRepository
	private readonly processorRepository: ProcessorRepository
	private readonly hardDriveCapacityRepository: HardDriveCapacityRepository
	private readonly hardDriveTypeRepository: HardDriveTypeRepository
	private readonly operatingSystemRepository: OperatingSystemRepository
	private readonly operatingSystemArqRepository: OperatingSystemArqRepository
	private readonly statusRepository: StatusRepository
	private readonly locationRepository: LocationRepository
	private readonly employeeRepository: EmployeeRepository
	private readonly modelSeriesRepository: ModelSeriesRepository
	private readonly eventBus: EventBus
	private readonly deviceConsistencyValidator = new DeviceConsistencyValidator()

	constructor({
		deviceRepository,
		employeeRepository,
		hardDriveCapacityRepository,
		hardDriveTypeRepository,
		operatingSystemRepository,
		operatingSystemArqRepository,
		processorRepository,
		statusRepository,
		locationRepository,
		modelSeriesRepository,
		eventBus
	}: {
		deviceRepository: DeviceRepository
		processorRepository: ProcessorRepository
		hardDriveCapacityRepository: HardDriveCapacityRepository
		hardDriveTypeRepository: HardDriveTypeRepository
		operatingSystemRepository: OperatingSystemRepository
		operatingSystemArqRepository: OperatingSystemArqRepository
		statusRepository: StatusRepository
		locationRepository: LocationRepository
		employeeRepository: EmployeeRepository
		modelSeriesRepository: ModelSeriesRepository
		eventBus: EventBus
	}) {
		this.deviceRepository = deviceRepository
		this.processorRepository = processorRepository
		this.hardDriveCapacityRepository = hardDriveCapacityRepository
		this.hardDriveTypeRepository = hardDriveTypeRepository
		this.operatingSystemRepository = operatingSystemRepository
		this.operatingSystemArqRepository = operatingSystemArqRepository
		this.statusRepository = statusRepository
		this.locationRepository = locationRepository
		this.employeeRepository = employeeRepository
		this.modelSeriesRepository = modelSeriesRepository
		this.eventBus = eventBus
	}

	async run({
		id,
		params,
		user
	}: {
		id: Primitives<DeviceId>
		params: Partial<DeviceParams>
		user?: JwtPayloadUser
	}): Promise<void> {
		if (!user?.sub) {
			throw new InvalidArgumentError('User is required to perform this action.')
		}
		const deviceId = new DeviceId(id).value
		const device = await this.deviceRepository.findById(deviceId)

		if (!device) {
			throw new DeviceDoesNotExistError(id)
		}

		const deviceEntity = await DeviceFactory.fromPrimitives(device)
		const validations: Promise<void>[] = []

		// 1. Validar campos base (si cambiaron)
		this.validateBaseFields(deviceEntity, params, validations)

		// 2. Validar campos específicos (si cambiaron)
		if (deviceEntity instanceof DeviceComputer) {
			this.validateComputerFields(deviceEntity, params as Partial<DeviceComputerParams>, validations)
		} else if (deviceEntity instanceof DeviceHardDrive) {
			this.validateHardDriveFields(deviceEntity, params as Partial<DeviceHardDriveParams>, validations)
		}

		// 3. Ejecutar validaciones y obtener contexto en paralelo
		const [context] = await Promise.all([this.getValidationContext(deviceEntity, params), Promise.all(validations)])

		// 4. Actualizar entidad (Síncrono y Puro)
		const oldDeviceEntity = structuredClone(deviceEntity.toPrimitives())
		const changes = deviceEntity.update(params, context, this.deviceConsistencyValidator)

		if (changes.length > 0) {
			deviceEntity.registerUpdateEvent({
				changes,
				newEntity: deviceEntity.toPrimitives(),
				oldEntity: oldDeviceEntity
			})
			await this.deviceRepository.save(deviceEntity.toPrimitives())
			const events = deviceEntity.pullDomainEvents()
			events.forEach(event => Object.assign(event, { userId: user.sub }))
			await this.eventBus.publish(events)
		}
	}

	private validateBaseFields(
		deviceEntity: Device,
		params: Partial<DeviceParams>,
		validations: Promise<void>[]
	): void {
		const { serial, activo, statusId, employeeId } = params

		// 1. Validaciones de Infraestructura (Existencia y Unicidad)
		if (statusId && statusId !== deviceEntity.statusValue) {
			const statusChecker = new StatusExistenceChecker(this.statusRepository)
			validations.push(statusChecker.ensureExist(statusId))
		}

		if (activo && activo !== deviceEntity.activoValue) {
			const activoChecker = new DeviceActivoUniquenessChecker(this.deviceRepository)
			validations.push(activoChecker.ensureUnique(activo, deviceEntity.idValue))
		}

		if (serial && serial !== deviceEntity.serialValue) {
			const deviceChecker = new DeviceSerialUniquenessChecker(this.deviceRepository)
			validations.push(
				deviceChecker.ensureUnique({
					serial,
					brandId: deviceEntity.brandValue,
					categoryId: deviceEntity.categoryValue,
					excludeId: deviceEntity.idValue
				})
			)
		}

		if (employeeId && employeeId !== deviceEntity.employeeValue) {
			const employeeChecker = new EmployeeExistenceChecker(this.employeeRepository)
			validations.push(employeeChecker.ensureExist(employeeId))
		}
	}

	private validateComputerFields(
		entity: DeviceComputer,
		params: Partial<DeviceComputerParams>,
		validations: Promise<void>[]
	): void {
		if (params.computerName && params.computerName !== entity.computerNameValue) {
			const checker = new ComputerNameUniquenessChecker(this.deviceRepository)
			validations.push(checker.ensureUnique(params.computerName))
		}
		if (params.processorId && params.processorId !== entity.processorValue) {
			const checker = new ProcessorExistenceChecker(this.processorRepository)
			validations.push(checker.ensureExist(params.processorId))
		}
		if (params.hardDriveCapacityId && params.hardDriveCapacityId !== entity.hardDriveCapacityValue) {
			const checker = new HardDriveCapacityExistenceChecker(this.hardDriveCapacityRepository)
			validations.push(checker.ensureExist(params.hardDriveCapacityId))
		}
		if (params.hardDriveTypeId && params.hardDriveTypeId !== entity.hardDriveTypeValue) {
			const checker = new HardDriveTypeExistenceChecker(this.hardDriveTypeRepository)
			validations.push(checker.ensureExist(params.hardDriveTypeId))
		}
		if (params.operatingSystemId && params.operatingSystemId !== entity.operatingSystemValue) {
			const checker = new OperatingSystemExistenceChecker(this.operatingSystemRepository)
			validations.push(checker.ensureExist(params.operatingSystemId))
		}
		if (params.operatingSystemArqId && params.operatingSystemArqId !== entity.operatingSystemArqValue) {
			const checker = new OperatingSystemArqExistenceChecker(this.operatingSystemArqRepository)
			validations.push(checker.ensureExist(params.operatingSystemArqId))
		}
	}

	private validateHardDriveFields(
		entity: DeviceHardDrive,
		params: Partial<DeviceHardDriveParams>,
		validations: Promise<void>[]
	): void {
		if (params.hardDriveCapacityId && params.hardDriveCapacityId !== entity.hardDriveCapacityValue) {
			const checker = new HardDriveCapacityExistenceChecker(this.hardDriveCapacityRepository)
			validations.push(checker.ensureExist(params.hardDriveCapacityId))
		}
		if (params.hardDriveTypeId && params.hardDriveTypeId !== entity.hardDriveTypeValue) {
			const checker = new HardDriveTypeExistenceChecker(this.hardDriveTypeRepository)
			validations.push(checker.ensureExist(params.hardDriveTypeId))
		}
	}

	private async getValidationContext(
		deviceEntity: Device,
		params: Partial<DeviceParams>
	): Promise<{ typeOfSite: Primitives<TypeOfSiteId> | null; generic: Primitives<Generic> }> {
		const { locationId, modelId, categoryId, brandId } = params
		let typeOfSite = null
		if (locationId && locationId !== deviceEntity.locationValue) {
			const locationChecker = new LocationExistenceChecker(this.locationRepository)
			await locationChecker.ensureExist(locationId)
			const location = await this.locationRepository.findById(locationId)
			typeOfSite = location?.typeOfSiteId ?? null
		} else if (deviceEntity.locationValue) {
			// Si no cambia la ubicación, necesitamos el typeOfSite actual para validar consistencia
			const location = await this.locationRepository.findById(deviceEntity.locationValue)
			typeOfSite = location?.typeOfSiteId ?? null
		}

		let generic: boolean = true
		if (modelId && modelId !== deviceEntity.modelSeriesValue) {
			const modelSeriesChecker = new ModelSeriesExistenceChecker(this.modelSeriesRepository)

			const modelData = await modelSeriesChecker.ensureExist({
				modelSeriesId: modelId,
				brandId,
				categoryId
			})
			generic = modelData?.generic ?? true
		} else {
			const modelData = await this.modelSeriesRepository.findById(deviceEntity.modelSeriesValue)
			generic = modelData?.generic ?? true
		}

		return { typeOfSite, generic }
	}
}
