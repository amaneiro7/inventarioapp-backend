import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { DeviceComputer } from '../../../Features/Computer/domain/Computer'
import { ComputerHardDriveCapacity } from '../domain/valueObject/ComputerHardDriveCapacity'
import { ComputerHardDriveType } from '../domain/valueObject/ComputerHardDriveType'
import { ComputerMemoryRam } from '../domain/valueObject/ComputerMemoryRam'
import { ComputerName } from '../domain/valueObject/ComputerName'
import { ComputerOperatingSystem } from '../domain/valueObject/ComputerOperatingSystem'
import { ComputerOperatingSystemArq } from '../domain/valueObject/ComputerOperatingSystemArq'
import { ComputerProcessor } from '../domain/valueObject/ComputerProcessor'
import { IPAddress } from '../domain/valueObject/DeviceIPAddress'
import { MACAddress } from '../domain/valueObject/MACAddress'
import { DeviceHardDrive } from '../../../Features/HardDrive/HardDrive/domain/HardDrive'
import { HardDriveHealth } from '../domain/valueObject/HardDriveHealth'
import { HDDCapacity } from '../../../Features/HardDrive/HardDrive/domain/HDDCapacity'
import { HDDType } from '../../../Features/HardDrive/HardDrive/domain/HDDType'
import { HistoryCreator } from '../../../History/application/HistoryCreator'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { Device } from '../domain/entity/Device'
import { DeviceDoesNotExistError } from '../domain/errors/DeviceDoesNotExistError'
import { DeviceId } from '../domain/valueObject/DeviceId'
import { DeviceModelSeries } from '../domain/DeviceModelSeries'
import { DeviceRepository } from '../domain/repository/DeviceRepository'
import { DeviceSerial } from '../domain/valueObject/DeviceSerial'

import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityRepository } from '../../../Features/HardDrive/HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { type HardDriveTypeRepository } from '../../../Features/HardDrive/HardDriveType/domain/repository/HardDriveTypeRepository'
import { type OperatingSystemRepository } from '../../../Features/OperatingSystem/OperatingSystem/domain/repository/OperatingSystemRepository'
import { type OperatingSystemArqRepository } from '../../../Features/OperatingSystem/OperatingSystemArq/domain/repository/OperatingSystemArqRepository'
import { type ProcessorRepository } from '../../../Features/Processor/domain/repository/ProcessorRepository'

import { type HistoryRepository } from '../../../History/domain/HistoryRepository'
import { type ModelSeriesRepository } from '../../../ModelSeries/ModelSeries/domain/repository/ModelSeriesRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type StatusRepository } from '../../Status/domain/repository/StatusRepository'
import { type LocationRepository } from '../../../Location/Location/domain/repository/LocationRepository'
import { DeviceDto, type DeviceParams } from '../domain/dto/Device.dto'
import { type DeviceComputerPrimitives } from '../../../Features/Computer/domain/Computer.dto'
import { type DeviceHardDrivePrimitives } from '../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'
import { DeviceConsistencyValidator } from '../domain/service/DeviceConsistencyValidator'
import { DeviceActivoUniquenessChecker } from '../domain/service/DeviceActivoUniquenessChecker'
import { StatusExistenceChecker } from '../../Status/domain/service/StatusExistanceChecker'
import { EmployeeExistenceChecker } from '../../../employee/Employee/domain/service/EmployeeExistanceChecker'
import { LocationExistenceChecker } from '../../../Location/Location/domain/service/LocationExistanceChecker'

export class DeviceUpdater {
	private readonly deviceRepository: DeviceRepository
	private readonly processorRepository: ProcessorRepository
	private readonly hardDriveCapacityRepository: HardDriveCapacityRepository
	private readonly hardDriveTypeRepository: HardDriveTypeRepository
	private readonly operatingSystemRepository: OperatingSystemRepository
	private readonly operatingSystemArqRepository: OperatingSystemArqRepository
	private readonly historyRepository: HistoryRepository
	private readonly statusRepository: StatusRepository
	private readonly locationRepository: LocationRepository
	private readonly employeeRepository: EmployeeRepository
	private readonly modelSeriesRepository: ModelSeriesRepository
	private readonly deviceConsistencyValidator = new DeviceConsistencyValidator()

	constructor(dependencies: {
		deviceRepository: DeviceRepository
		processorRepository: ProcessorRepository
		hardDriveCapacityRepository: HardDriveCapacityRepository
		hardDriveTypeRepository: HardDriveTypeRepository
		operatingSystemRepository: OperatingSystemRepository
		operatingSystemArqRepository: OperatingSystemArqRepository
		historyRepository: HistoryRepository
		statusRepository: StatusRepository
		locationRepository: LocationRepository
		employeeRepository: EmployeeRepository
		modelSeriesRepository: ModelSeriesRepository
	}) {
		this.deviceRepository = dependencies.deviceRepository
		this.processorRepository = dependencies.processorRepository
		this.hardDriveCapacityRepository = dependencies.hardDriveCapacityRepository
		this.hardDriveTypeRepository = dependencies.hardDriveTypeRepository
		this.operatingSystemRepository = dependencies.operatingSystemRepository
		this.operatingSystemArqRepository = dependencies.operatingSystemArqRepository
		this.historyRepository = dependencies.historyRepository
		this.statusRepository = dependencies.statusRepository
		this.locationRepository = dependencies.locationRepository
		this.employeeRepository = dependencies.employeeRepository
		this.modelSeriesRepository = dependencies.modelSeriesRepository
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
		const deviceId = new DeviceId(id).value
		const device = await this.deviceRepository.findById(deviceId)

		if (!device) {
			throw new DeviceDoesNotExistError(id)
		}

		const { deviceEntity, oldDeviceEntity } = this.createDeviceEntity(device)

		await this.updateDeviceFields(deviceEntity, params)

		const devicePrimitives = deviceEntity.toPrimitives()
		await this.deviceRepository.save(devicePrimitives)

		if (user?.sub) {
			await new HistoryCreator({ historyRepository: this.historyRepository }).run({
				deviceId: deviceEntity.idValue,
				userId: user.sub,
				employeeId: deviceEntity.employeeValue,
				action: 'UPDATE',
				newData: devicePrimitives as unknown as Record<string, unknown>,
				oldData: oldDeviceEntity as unknown as Record<string, unknown>,
				createdAt: new Date()
			})
		}
	}

	private createDeviceEntity(device: DeviceDto) {
		let deviceEntity: Device
		if (DeviceComputer.isComputerCategory({ categoryId: device.categoryId })) {
			const { computer } = device
			if (!computer) throw new InvalidArgumentError('Computer data does not exist for this device')
			deviceEntity = DeviceComputer.fromPrimitives({ ...device, ...computer })
		} else if (DeviceHardDrive.isHardDriveCategory({ categoryId: device.categoryId })) {
			const { hardDrive } = device
			if (!hardDrive) throw new InvalidArgumentError('Hard drive data does not exist for this device')
			deviceEntity = DeviceHardDrive.fromPrimitives({ ...device, ...hardDrive })
		} else {
			deviceEntity = Device.fromPrimitives(device)
		}
		return { deviceEntity, oldDeviceEntity: structuredClone(deviceEntity.toPrimitives()) }
	}

	private async updateDeviceFields(entity: Device, params: Partial<DeviceParams>) {
		await this.updateMainDevice({ params, deviceEntity: entity })

		if (entity instanceof DeviceComputer) {
			await this.updateComputerFields(entity, params as Partial<DeviceComputerPrimitives>)
		} else if (entity instanceof DeviceHardDrive) {
			await this.updateHardDriveFields(entity, params as Partial<DeviceHardDrivePrimitives>)
		}
	}

	private async updateComputerFields(entity: DeviceComputer, params: Partial<DeviceComputerPrimitives>) {
		const {
			computerName,
			processorId,
			operatingSystemArqId,
			operatingSystemId,
			hardDriveCapacityId,
			hardDriveTypeId,
			memoryRam,
			ipAddress,
			macAddress
		} = params
		await Promise.all([
			ComputerName.updateComputerNameField({ repository: this.deviceRepository, computerName, entity }),
			ComputerMemoryRam.updateMemoryRam({ entity, memoryRam }),
			ComputerProcessor.updateProcessorField({
				repository: this.processorRepository,
				processor: processorId,
				entity
			}),
			ComputerHardDriveCapacity.updateHardDriveCapacityField({
				repository: this.hardDriveCapacityRepository,
				entity,
				hardDriveCapacity: hardDriveCapacityId
			}),
			ComputerOperatingSystem.updateOperatingSystemField({
				repository: this.operatingSystemRepository,
				operatingSystem: operatingSystemId,
				entity
			}),
			IPAddress.updateIPAddressField({ ipAddress, entity }),
			MACAddress.updateMACAddressField({ macAddress, entity })
		])
		await ComputerHardDriveType.updateHardDriveTypeField({
			repository: this.hardDriveTypeRepository,
			hardDriveType: hardDriveTypeId,
			entity
		})
		await ComputerOperatingSystemArq.updateOperatingSystemArqField({
			repository: this.operatingSystemArqRepository,
			operatingSystemArq: operatingSystemArqId,
			entity
		})
	}

	private async updateHardDriveFields(entity: DeviceHardDrive, params: Partial<DeviceHardDrivePrimitives>) {
		const { hardDriveCapacityId, hardDriveTypeId, health } = params
		await Promise.all([
			HDDCapacity.updateHardDriveCapacityField({
				repository: this.hardDriveCapacityRepository,
				entity,
				hardDriveCapacity: hardDriveCapacityId
			}),
			HDDType.updateHardDriveTypeField({
				repository: this.hardDriveTypeRepository,
				hardDriveType: hardDriveTypeId,
				entity
			}),
			HardDriveHealth.updateHealthField({ health, entity })
		])
	}

	private async updateMainDevice({
		params,
		deviceEntity
	}: {
		params: Partial<DeviceParams>
		deviceEntity: Device
	}): Promise<void> {
		const {
			serial,
			activo,
			statusId,
			categoryId,
			brandId,
			modelId,
			employeeId,
			locationId,
			observation,
			stockNumber
		} = params

		// 1. Validaciones de Infraestructura (Existencia y Unicidad)
		if (statusId && statusId !== deviceEntity.statusValue) {
			const statusChecker = new StatusExistenceChecker(this.statusRepository)
			await statusChecker.ensureExist(statusId)
		}

		if (activo && activo !== deviceEntity.activoValue) {
			const activoChecker = new DeviceActivoUniquenessChecker(this.deviceRepository)
			await activoChecker.ensureUnique(activo, deviceEntity.idValue)
		}

		if (serial && serial !== deviceEntity.serialValue) {
			await DeviceSerial.ensureSerialDoesNotExit({ repository: this.deviceRepository, serial })
		}

		if (employeeId && employeeId !== deviceEntity.employeeeValue) {
			const employeeChecker = new EmployeeExistenceChecker(this.employeeRepository)
			await employeeChecker.ensureExist(employeeId)
		}

		// 2. Obtención de Contexto (Datos necesarios para el Validator)
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

		let generic = null
		if (modelId && modelId !== deviceEntity.modelSeriesValue) {
			const modelData = await DeviceModelSeries.ensureModelSeriesExit({
				repository: this.modelSeriesRepository,
				modelSeries: modelId,
				category: categoryId,
				brand: brandId
			})
			generic = modelData.generic
		} else {
			const modelData = await this.modelSeriesRepository.findById(deviceEntity.modelSeriesValue)
			generic = modelData?.generic ?? null
		}

		// 3. Actualización de Dominio (Síncrona y Pura)
		deviceEntity.update(params, { typeOfSite, generic }, this.deviceConsistencyValidator)
	}
}
