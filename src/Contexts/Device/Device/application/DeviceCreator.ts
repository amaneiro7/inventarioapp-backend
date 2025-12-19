import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { ComputerValidation } from '../../../Features/Computer/application/ComputerValidation'
import { DeviceComputer } from '../../../Features/Computer/domain/Computer'
import { HardDriveValidation } from '../../../Features/HardDrive/HardDrive/application/HardDriveValidation'
import { DeviceHardDrive } from '../../../Features/HardDrive/HardDrive/domain/HardDrive'
import { MFP } from '../../../Features/MFP/domain/MFP'
import { HistoryCreator } from '../../../History/application/HistoryCreator'
import { DeviceMonitoringCreator } from '../../DeviceMonitoring/application/DeviceMonitoringCreator'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { Device } from '../domain/Device'
import { DeviceActivo } from '../domain/DeviceActivo'
import { DeviceEmployee } from '../domain/DeviceEmployee'
import { DeviceLocation } from '../domain/DeviceLocation'
import { DeviceModelSeries } from '../domain/DeviceModelSeries'
import { DeviceSerial } from '../domain/DeviceSerial'
import { DeviceStatus } from '../domain/DeviceStatus'
import { type DeviceRepository } from '../domain/DeviceRepository'
import { type ModelSeriesRepository } from '../../../ModelSeries/ModelSeries/domain/repository/ModelSeriesRepository'
import { type StatusRepository } from '../../Status/domain/StatusRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type HistoryRepository } from '../../../History/domain/HistoryRepository'
import { type DeviceParams } from '../domain/Device.dto'
import { type DeviceComputerParams } from '../../../Features/Computer/domain/Computer.dto'
import { type DeviceHardDriveParams } from '../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'
import { type DeviceMFPParams } from '../../../Features/MFP/domain/MFP.dto'
import { type DeviceMonitoringRepository } from '../../DeviceMonitoring/domain/repository/DeviceMonitoringRepository'

/**
 * @description Use case for creating a new Device entity. It handles the creation of different device types
 * (Computer, Hard Drive, MFP, etc.) and ensures all business rules and validations are met before persistence.
 */
export class DeviceCreator {
	private readonly deviceRepository: DeviceRepository
	private readonly modelSeriesRepository: ModelSeriesRepository
	private readonly statusRepository: StatusRepository
	private readonly employeeRepository: EmployeeRepository
	private readonly locationRepository: LocationRepository
	private readonly historyRepository: HistoryRepository
	private readonly deviceMonitoringRepository: DeviceMonitoringRepository
	private readonly computerValidation: ComputerValidation
	private readonly hardDriveValidation: HardDriveValidation

	constructor(dependencies: {
		deviceRepository: DeviceRepository
		modelSeriesRepository: ModelSeriesRepository
		statusRepository: StatusRepository
		employeeRepository: EmployeeRepository
		locationRepository: LocationRepository
		historyRepository: HistoryRepository
		deviceMonitoringRepository: DeviceMonitoringRepository
		computerValidation: ComputerValidation
		hardDriveValidation: HardDriveValidation
	}) {
		this.deviceRepository = dependencies.deviceRepository
		this.modelSeriesRepository = dependencies.modelSeriesRepository
		this.statusRepository = dependencies.statusRepository
		this.employeeRepository = dependencies.employeeRepository
		this.locationRepository = dependencies.locationRepository
		this.historyRepository = dependencies.historyRepository
		this.deviceMonitoringRepository = dependencies.deviceMonitoringRepository
		this.computerValidation = dependencies.computerValidation
		this.hardDriveValidation = dependencies.hardDriveValidation
	}

	/**
	 * @description Executes the device creation process.
	 * @param {{ params: DeviceParams; user?: JwtPayloadUser }} data The data for creating the device.
	 * @returns {Promise<void>} A promise that resolves when the device is successfully created.
	 * @throws {InvalidArgumentError} If the user is not provided.
	 * @throws {Error} If there is an error during the save process.
	 */
	async run({ params, user }: { params: DeviceParams; user?: JwtPayloadUser }): Promise<void> {
		if (!user?.sub) {
			throw new InvalidArgumentError('User is required to perform this action')
		}

		const device = await this.createDeviceEntity(params)
		const { generic } = await this.validateDeviceRelations(params)

		DeviceSerial.isSerialCanBeNull({ generic, serial: params.serial })

		const devicePrimitives = device.toPrimitives()

		try {
			await this.deviceRepository.save(devicePrimitives)
			await this.createInitialHistory(device, user.sub, devicePrimitives)

			if (DeviceComputer.isComputerCategory({ categoryId: params.categoryId })) {
				await new DeviceMonitoringCreator({ deviceMonitoringRepository: this.deviceMonitoringRepository }).run({
					deviceId: devicePrimitives.id
				})
			}
		} catch (error) {
			throw new Error(
				`Error while saving the device or creating history: ${error instanceof Error ? error.message : 'Unknown error'}`
			)
		}
	}

	private async createDeviceEntity(params: DeviceParams): Promise<Device> {
		const { categoryId } = params

		if (DeviceComputer.isComputerCategory({ categoryId })) {
			return this.computerValidation.run(params as DeviceComputerParams)
		}
		if (DeviceHardDrive.isHardDriveCategory({ categoryId })) {
			return this.hardDriveValidation.run(params as DeviceHardDriveParams)
		}
		if (MFP.isMFPCategory({ categoryId })) {
			return MFP.create(params as DeviceMFPParams)
		}

		return Device.create(params)
	}

	private async validateDeviceRelations(params: DeviceParams) {
		const { modelId, brandId, categoryId, activo, statusId, employeeId, locationId, serial } = params

		const modelSeries = await DeviceModelSeries.ensureModelSeriesExit({
			repository: this.modelSeriesRepository,
			modelSeries: modelId,
			brand: brandId,
			category: categoryId
		})

		await Promise.all([
			DeviceActivo.ensureActivoDoesNotExit({ repository: this.deviceRepository, activo }),
			DeviceStatus.ensureStatusExit({ repository: this.statusRepository, status: statusId }),
			DeviceEmployee.ensureEmployeeExit({ repository: this.employeeRepository, employee: employeeId }),
			DeviceLocation.ensureLocationExit({
				repository: this.locationRepository,
				location: locationId,
				status: statusId
			}),
			DeviceSerial.ensureSerialDoesNotExit({ repository: this.deviceRepository, serial })
		])

		return { generic: modelSeries.generic }
	}

	private async createInitialHistory(
		device: Device,
		userId: string,
		devicePrimitives: ReturnType<Device['toPrimitives']>
	) {
		await new HistoryCreator({ historyRepository: this.historyRepository }).run({
			deviceId: device.idValue,
			userId,
			employeeId: device.employeeeValue,
			action: 'CREATE',
			newData: devicePrimitives as unknown as Record<string, unknown>,
			oldData: {},
			createdAt: new Date()
		})
	}
}
