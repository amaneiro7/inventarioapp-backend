import { JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { DeviceComputer } from '../../../Features/Computer/domain/Computer'
import { ComputerHardDriveCapacity } from '../../../Features/Computer/domain/ComputerHardDriveCapacity'
import { ComputerHardDriveType } from '../../../Features/Computer/domain/ComputerHardDriveType'
import { ComputerMemoryRam } from '../../../Features/Computer/domain/ComputerMemoryRam'
import { ComputerName } from '../../../Features/Computer/domain/ComputerName'
import { ComputerOperatingSystem } from '../../../Features/Computer/domain/ComputerOperatingSystem'
import { ComputerOperatingSystemArq } from '../../../Features/Computer/domain/ComputerOperatingSystemArq'
import { ComputerProcessor } from '../../../Features/Computer/domain/ComputerProcessor'
import { IPAddress } from '../../../Features/Computer/domain/IPAddress'
import { MACAddress } from '../../../Features/Computer/domain/MACAddress'
import { DeviceHardDrive } from '../../../Features/HardDrive/HardDrive/domain/HardDrive'
import { HardDriveHealth } from '../../../Features/HardDrive/HardDrive/domain/HardDriveHealth'
import { HDDCapacity } from '../../../Features/HardDrive/HardDrive/domain/HDDCapacity'
import { HDDType } from '../../../Features/HardDrive/HardDrive/domain/HDDType'
import { HistoryCreator } from '../../../History/application/HistoryCreator'
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError'
import { Device } from '../domain/Device'
import { DeviceActivo } from '../domain/DeviceActivo'
import { DeviceDoesNotExistError } from '../domain/DeviceDoesNotExistError'
import { DeviceEmployee } from '../domain/DeviceEmployee'
import { DeviceId } from '../domain/DeviceId'
import { DeviceLocation } from '../domain/DeviceLocation'
import { DeviceModelSeries } from '../domain/DeviceModelSeries'
import { DeviceObservation } from '../domain/DeviceObservation'
import { DeviceRepository } from '../domain/DeviceRepository'
import { DeviceSerial } from '../domain/DeviceSerial'
import { DeviceStatus } from '../domain/DeviceStatus'
import { DeviceStocknumber } from '../domain/DeviceStock'

import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityRepository } from '../../../Features/HardDrive/HardDriveCapacity/domain/HardDriveCapacityRepository'
import { type HardDriveTypeRepository } from '../../../Features/HardDrive/HardDriveType/domain/HardDriveTypeRepository'
import { type OperatingSystemRepository } from '../../../Features/OperatingSystem/OperatingSystem/domain/OperatingSystemRepository'
import { type OperatingSystemArqRepository } from '../../../Features/OperatingSystem/OperatingSystemArq/domain/OperatingSystemArqRepository'
import { type ProcessorRepository } from '../../../Features/Processor/Processor/domain/ProcessorRepository'
import { type DevicesApiResponse } from '../infrastructure/sequelize/DeviceResponse'
import { type HistoryRepository } from '../../../History/domain/HistoryRepository'
import { type ModelSeriesRepository } from '../../../ModelSeries/ModelSeries/domain/ModelSeriesRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type StatusRepository } from '../../Status/domain/StatusRepository'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { DeviceParams } from '../domain/Device.dto'
import { DeviceComputerPrimitives } from '../../../Features/Computer/domain/Computer.dto'
import { DeviceHardDrivePrimitives } from '../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'

export class DeviceUpdater {
	constructor(
		private readonly deviceRepository: DeviceRepository,
		private readonly processorRepository: ProcessorRepository,
		private readonly hardDriveCapacityRepository: HardDriveCapacityRepository,
		private readonly hardDriveTypeRepository: HardDriveTypeRepository,
		private readonly operatingSystemVersionRepository: OperatingSystemRepository,
		private readonly operatingSystemArqRepository: OperatingSystemArqRepository,
		private readonly historyRepository: HistoryRepository,
		private readonly statusRepository: StatusRepository,
		private readonly locationRepository: LocationRepository,
		private readonly employeeRepository: EmployeeRepository,
		private readonly modelSeriesRepository: ModelSeriesRepository
	) {}
	async run({
		id,
		params,
		user
	}: {
		id: Primitives<DeviceId>
		params: Partial<DeviceParams>
		user?: JwtPayloadUser
	}): Promise<void> {
		// Extraemos el id del device a actualizar
		const deviceId = new DeviceId(id).value

		// Buscamos el device en la base de datos
		const device = await this.deviceRepository.searchById(deviceId)

		// Si el device no existe, lanzamos una excepcion
		if (!device) {
			throw new DeviceDoesNotExistError(id)
		}

		// Creamos una instancia de la entidad Device a partir de los datos obtenidos
		let deviceEntity
		let oldDeviceEntity
		if (
			DeviceComputer.isComputerCategory({ categoryId: device.categoryId })
		) {
			// Si el device es de tipo computadora, obtenemos los datos de la tabla computer
			const { computer } = device as unknown as DevicesApiResponse
			if (!computer) {
				throw new InvalidArgumentError('Computer does not exist')
			}
			deviceEntity = DeviceComputer.fromPrimitives({
				id: device.id,
				serial: device.serial,
				activo: device.activo,
				statusId: device.statusId,
				categoryId: device.categoryId,
				brandId: device.brandId,
				modelId: device.modelId,
				stockNumber: device.stockNumber,
				employeeId: device.employeeId,
				locationId: device.locationId,
				observation: device.observation,
				computerName: computer.computerName,
				processorId: computer.processorId,
				memoryRam: computer.memoryRam,
				memoryRamCapacity: computer.memoryRamCapacity,
				hardDriveCapacityId: computer.hardDriveCapacityId,
				hardDriveTypeId: computer.hardDriveTypeId,
				operatingSystemId: computer.operatingSystemId,
				operatingSystemArqId: computer.operatingSystemArqId,
				macAddress: computer.macAddress,
				ipAddress: computer.ipAddress
			})
			oldDeviceEntity = structuredClone(deviceEntity.toPrimitives())
			// Actualizamos los campos principales del device
			await this.updateMainDevice({ params, deviceEntity })

			// Extraemos los parametros de la clase Computer
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
			} = params as Partial<DeviceComputerPrimitives>

			// Actualizamos los campos de la clase Computer
			await ComputerName.updateComputerNameField({
				repository: this.deviceRepository,
				computerName,
				entity: deviceEntity
			})
			await ComputerMemoryRam.updateMemoryRam({
				entity: deviceEntity,
				memoryRam
			})
			await ComputerProcessor.updateProcessorField({
				repository: this.processorRepository,
				processor: processorId,
				entity: deviceEntity
			})
			await ComputerHardDriveCapacity.updateHardDriveCapacityField({
				repository: this.hardDriveCapacityRepository,
				entity: deviceEntity,
				hardDriveCapacity: hardDriveCapacityId
			})
			await ComputerHardDriveType.updateHardDriveTypeField({
				repository: this.hardDriveTypeRepository,
				hardDriveType: hardDriveTypeId,
				entity: deviceEntity
			})
			await ComputerOperatingSystem.updateOperatingSystemField({
				repository: this.operatingSystemVersionRepository,
				operatingSystem: operatingSystemId,
				entity: deviceEntity
			})
			await ComputerOperatingSystemArq.updateOperatingSystemArqField({
				repository: this.operatingSystemArqRepository,
				operatingSystemArq: operatingSystemArqId,
				entity: deviceEntity
			})
			await IPAddress.updateIPAddressField({
				ipAddress,
				entity: deviceEntity
			})
			await MACAddress.updateMACAddressField({
				macAddress,
				entity: deviceEntity
			})
		} else if (
			DeviceHardDrive.isHardDriveCategory({
				categoryId: device.categoryId
			})
		) {
			// Si el device es de tipo hard drive, obtenemos los datos de la tabla hard_drive
			const { hardDrive } = device as unknown as DevicesApiResponse
			if (!hardDrive) {
				throw new InvalidArgumentError('HardDrive does not exist')
			}
			deviceEntity = DeviceHardDrive.fromPrimitives({
				id: device.id,
				serial: device.serial,
				activo: device.activo,
				statusId: device.statusId,
				categoryId: device.categoryId,
				brandId: device.brandId,
				modelId: device.modelId,
				employeeId: device.employeeId,
				locationId: device.locationId,
				observation: device.observation,
				stockNumber: device.stockNumber,
				hardDriveCapacityId: hardDrive.hardDriveCapacityId,
				hardDriveTypeId: hardDrive.hardDriveTypeId,
				health: hardDrive.health
			})

			oldDeviceEntity = structuredClone(deviceEntity.toPrimitives())

			// Extraemos los parametros de la clase HardDrive
			const { hardDriveCapacityId, hardDriveTypeId, health } =
				params as DeviceHardDrivePrimitives

			// Actualizamos los campos principales del device
			await this.updateMainDevice({ params, deviceEntity })

			// Actualizamos los campos de la clase HardDrive
			await HDDCapacity.updateHardDriveCapacityField({
				repository: this.hardDriveCapacityRepository,
				entity: deviceEntity,
				hardDriveCapacity: hardDriveCapacityId
			})
			await HDDType.updateHardDriveTypeField({
				repository: this.hardDriveTypeRepository,
				hardDriveType: hardDriveTypeId,
				entity: deviceEntity
			})
			await HardDriveHealth.updateHealthField({
				health,
				entity: deviceEntity
			})
		} else {
			// Si el device no es de tipo computadora o hard drive, lo creamos como una instancia de la clase Device
			deviceEntity = Device.fromPrimitives(device)
			oldDeviceEntity = structuredClone(deviceEntity.toPrimitives())

			// Actualizamos los campos principales del device
			await this.updateMainDevice({ params, deviceEntity })
		}
		// Guardamos los cambios en la base de datos
		await this.deviceRepository
			.save(deviceEntity.toPrimitives())
			.then(() => {
				if (!user?.sub) {
					throw new InvalidArgumentError('user is required')
				}
				new HistoryCreator(this.historyRepository).run({
					deviceId: deviceEntity.idValue,
					userId: user?.sub,
					employeeId: deviceEntity.employeeeValue,
					action: 'UPDATE',
					newData: deviceEntity.toPrimitives(),
					oldData: oldDeviceEntity,
					createdAt: new Date()
				})
			})
	}

	/**
	 * Actualiza los campos principales del device
	 * @param params Parametros a actualizar
	 * @param deviceEntity Entidad del device
	 */
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
		await DeviceActivo.updateActivoField({
			repository: this.deviceRepository,
			activo,
			entity: deviceEntity
		})
		await DeviceSerial.updateSerialField({
			repository: this.deviceRepository,
			serial,
			entity: deviceEntity
		})
		await DeviceLocation.updateLocationField({
			repository: this.locationRepository,
			location: locationId,
			entity: deviceEntity
		})
		await DeviceObservation.updateObservationField({
			observation,
			entity: deviceEntity
		})
		await DeviceStocknumber.updateStockNumberField({
			stockNumber,
			entity: deviceEntity
		})
		await DeviceEmployee.updateEmployeeField({
			repository: this.employeeRepository,
			employee: employeeId,
			entity: deviceEntity
		})
		await DeviceModelSeries.updateModelField({
			repository: this.modelSeriesRepository,
			modelSeries: modelId,
			category: categoryId,
			brand: brandId,
			entity: deviceEntity
		})
	}
}
