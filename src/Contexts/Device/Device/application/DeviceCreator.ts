import { JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { ComputerValidation } from '../../../Features/Computer/application/ComputerValidation'
import { DeviceComputer } from '../../../Features/Computer/domain/Computer'
import { HardDriveValidation } from '../../../Features/HardDrive/HardDrive/application/HardDriveValidation'
import { DeviceHardDrive } from '../../../Features/HardDrive/HardDrive/domain/HardDrive'
import { MFP } from '../../../Features/MFP/domain/MFP'
import { HistoryCreator } from '../../../History/application/HistoryCreator'
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError'
import { Device } from '../domain/Device'
import { DeviceActivo } from '../domain/DeviceActivo'
import { DeviceEmployee } from '../domain/DeviceEmployee'
import { DeviceLocation } from '../domain/DeviceLocation'
import { DeviceModelSeries } from '../domain/DeviceModelSeries'
import { DeviceSerial } from '../domain/DeviceSerial'
import { DeviceStatus } from '../domain/DeviceStatus'

import { type DeviceRepository } from '../domain/DeviceRepository'
import { type ModelSeriesRepository } from '../../../ModelSeries/ModelSeries/domain/ModelSeriesRepository'
import { type StatusRepository } from '../../Status/domain/StatusRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type HistoryRepository } from '../../../History/domain/HistoryRepository'
import { type DeviceParams } from '../domain/Device.dto'
import { type DeviceComputerParams } from '../../../Features/Computer/domain/Computer.dto'
import { type DeviceHardDriveParams } from '../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'
import { type DeviceMFPParams } from '../../../Features/MFP/domain/MFP.dto'

export class DeviceCreator {
	constructor(
		private readonly deviceRepository: DeviceRepository,
		private readonly modelSeriesRepository: ModelSeriesRepository,
		private readonly statusRepository: StatusRepository,
		private readonly employeeRepository: EmployeeRepository,
		private readonly locationRepository: LocationRepository,
		private readonly historyRepository: HistoryRepository,
		private readonly computerValidation: ComputerValidation,
		private readonly hardDriveValidation: HardDriveValidation
	) {}

	async run({ params, user }: { params: DeviceParams; user?: JwtPayloadUser }): Promise<void> {
		const { categoryId } = params
		let device

		// Si es computadora
		if (DeviceComputer.isComputerCategory({ categoryId })) {
			device = await this.computerValidation.run(params as DeviceComputerParams)
		}
		// Si es Disco Duro
		else if (DeviceHardDrive.isHardDriveCategory({ categoryId })) {
			device = await this.hardDriveValidation.run(params as DeviceHardDriveParams)
		}
		// Si es Impresora Multifuncional
		else if (MFP.isMFPCategory({ categoryId })) {
			device = MFP.create(params as DeviceMFPParams)
		}
		// Si es otro
		else {
			device = Device.create(params)
		}
		const { generic } = await DeviceModelSeries.ensureModelSeriesExit({
			repository: this.modelSeriesRepository,
			modelSeries: params.modelId,
			brand: params.brandId,
			category: categoryId
		})
		await Promise.all([
			DeviceActivo.ensureActivoDoesNotExit({
				repository: this.deviceRepository,
				activo: params.activo
			}),
			DeviceStatus.ensureStatusExit({
				repository: this.statusRepository,
				status: params.statusId
			}),
			DeviceEmployee.ensureEmployeeExit({
				repository: this.employeeRepository,
				employee: params.employeeId
			}),
			DeviceLocation.ensureLocationExit({
				repository: this.locationRepository,
				location: params.locationId,
				status: params.statusId
			}),
			DeviceSerial.ensureSerialDoesNotExit({
				repository: this.deviceRepository,
				serial: params.serial
			}),
			DeviceSerial.isSerialCanBeNull({
				generic: generic,
				serial: params.serial
			})
		])
		const devicePrimitives = device.toPrimitives()

		try {
			await this.deviceRepository.save(devicePrimitives)
			if (!user?.sub) {
				throw new InvalidArgumentError('user is required')
			}

			await new HistoryCreator(this.historyRepository).run({
				deviceId: device.idValue,
				userId: user?.sub,
				employeeId: device.employeeeValue,
				action: 'CREATE',
				newData: device.toPrimitives(),
				oldData: {},
				createdAt: new Date()
			})
		} catch (error) {
			throw new Error('Error al guardar el dispositivo o crear el historial')
		}
	}
}
