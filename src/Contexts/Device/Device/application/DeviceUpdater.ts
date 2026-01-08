import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { DeviceComputer } from '../../../Features/Computer/domain/Computer'
import { ComputerHardDriveCapacity } from '../domain/valueObject/ComputerHardDriveCapacity'
import { ComputerHardDriveType } from '../domain/valueObject/ComputerHardDriveType'
import { ComputerMemoryRam } from '../domain/valueObject/ComputerMemoryRam'
import { ComputerName } from '../domain/valueObject/ComputerName'
import { ComputerOperatingSystem } from '../domain/valueObject/ComputerOperatingSystem'
import { ComputerOperatingSystemArq } from '../domain/valueObject/ComputerOperatingSystemArq'
import { ComputerProcessor } from '../domain/valueObject/ComputerProcessor'
import { IPAddress } from '../domain/valueObject/IPAddress'
import { MACAddress } from '../domain/valueObject/MACAddress'
import { DeviceHardDrive } from '../../../Features/HardDrive/HardDrive/domain/HardDrive'
import { HardDriveHealth } from '../../../Features/HardDrive/HardDrive/domain/HardDriveHealth'
import { HDDCapacity } from '../../../Features/HardDrive/HardDrive/domain/HDDCapacity'
import { HDDType } from '../../../Features/HardDrive/HardDrive/domain/HDDType'
import { HistoryCreator } from '../../../History/application/HistoryCreator'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { Device } from '../domain/entity/Device'
import { DeviceActivo } from '../domain/valueObject/DeviceActivo'
import { DeviceDoesNotExistError } from '../domain/errors/DeviceDoesNotExistError'
import { DeviceEmployee } from '../domain/DeviceEmployee'
import { DeviceId } from '../domain/valueObject/DeviceId'
import { DeviceLocation } from '../domain/DeviceLocation'
import { DeviceModelSeries } from '../domain/DeviceModelSeries'
import { DeviceObservation } from '../domain/valueObject/DeviceObservation'
import { DeviceRepository } from '../domain/repository/DeviceRepository'
import { DeviceSerial } from '../domain/valueObject/DeviceSerial'
import { DeviceStatus } from '../domain/DeviceStatus'
import { DeviceStocknumber } from '../domain/valueObject/DeviceStock'

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
				employeeId: deviceEntity.employeeeValue,
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

		await DeviceStatus.updateStatusField({
			repository: this.statusRepository,
			status: statusId,
			entity: deviceEntity
		})
		await Promise.all([
			DeviceActivo.updateActivoField({ repository: this.deviceRepository, activo, entity: deviceEntity }),
			DeviceSerial.updateSerialField({ repository: this.deviceRepository, serial, entity: deviceEntity }),
			DeviceLocation.updateLocationField({
				repository: this.locationRepository,
				location: locationId,
				entity: deviceEntity
			}),
			DeviceObservation.updateObservationField({ observation, entity: deviceEntity }),
			DeviceEmployee.updateEmployeeField({
				repository: this.employeeRepository,
				employee: employeeId,
				entity: deviceEntity
			}),
			DeviceModelSeries.updateModelField({
				repository: this.modelSeriesRepository,
				modelSeries: modelId,
				category: categoryId,
				brand: brandId,
				entity: deviceEntity
			})
		])
		await DeviceStocknumber.updateStockNumberField({ stockNumber, entity: deviceEntity })
	}
}
