import { HardDriveCapacityId } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacityId'
import { DeviceComputer } from '../domain/Computer'
import { ComputerName } from '../domain/ComputerName'
import { ComputerOperatingSystem } from '../domain/ComputerOperatingSystem'
import { ComputerOperatingSystemArq } from '../domain/ComputerOperatingSystemArq'
import { ComputerProcessor } from '../domain/ComputerProcessor'
import { HardDriveTypeId } from '../../HardDrive/HardDriveType/domain/HardDriveTypeId'

import { type HardDriveTypeRepository } from '../../HardDrive/HardDriveType/domain/HardDriveTypeRepository'
import { type DeviceRepository } from '../../../Device/Device/domain/DeviceRepository'
import { type OperatingSystemRepository } from '../../OperatingSystem/OperatingSystem/domain/OperatingSystemRepository'
import { type HardDriveCapacityRepository } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacityRepository'
import { type OperatingSystemArqRepository } from '../../OperatingSystem/OperatingSystemArq/domain/OperatingSystemArqRepository'
import { type ProcessorRepository } from '../../Processor/Processor/domain/ProcessorRepository'
import { type DeviceComputerParams } from '../domain/Computer.dto'

export class ComputerValidation {
	private readonly deviceRepository: DeviceRepository
	private readonly processorRepository: ProcessorRepository
	private readonly hardDriveCapacityRepository: HardDriveCapacityRepository
	private readonly hardDriveTypeRepository: HardDriveTypeRepository
	private readonly operatingSystemRepository: OperatingSystemRepository
	private readonly operatingSystemArqRepository: OperatingSystemArqRepository
	constructor({
		deviceRepository,
		processorRepository,
		hardDriveCapacityRepository,
		hardDriveTypeRepository,
		operatingSystemRepository,
		operatingSystemArqRepository
	}: {
		deviceRepository: DeviceRepository
		processorRepository: ProcessorRepository
		hardDriveCapacityRepository: HardDriveCapacityRepository
		hardDriveTypeRepository: HardDriveTypeRepository
		operatingSystemRepository: OperatingSystemRepository
		operatingSystemArqRepository: OperatingSystemArqRepository
	}) {
		this.deviceRepository = deviceRepository
		this.processorRepository = processorRepository
		this.hardDriveCapacityRepository = hardDriveCapacityRepository
		this.hardDriveTypeRepository = hardDriveTypeRepository
		this.operatingSystemRepository = operatingSystemRepository
		this.operatingSystemArqRepository = operatingSystemArqRepository
	}

	async run(params: DeviceComputerParams): Promise<DeviceComputer> {
		await this.ensureValidation(params)
		return DeviceComputer.create(params)
	}

	private async ensureValidation(params: DeviceComputerParams): Promise<void> {
		await Promise.all([
			ComputerName.ensuerComputerNameDoesNotExit({
				repository: this.deviceRepository,
				computerName: params.computerName
			}),
			ComputerProcessor.ensureProcessorExit({
				repository: this.processorRepository,
				processor: params.processorId
			}),
			HardDriveCapacityId.ensureHardDriveCapacityExit({
				repository: this.hardDriveCapacityRepository,
				hardDriveCapacity: params.hardDriveCapacityId
			}),
			HardDriveTypeId.ensureHardDriveTypeExit({
				repository: this.hardDriveTypeRepository,
				hardDriveType: params.hardDriveTypeId
			}),
			ComputerOperatingSystem.ensureOperatingSystemExit({
				repository: this.operatingSystemRepository,
				operatingSystem: params.operatingSystemId
			}),
			ComputerOperatingSystemArq.ensureOperatingSystemArqExit({
				repository: this.operatingSystemArqRepository,
				operatingSystemArq: params.operatingSystemArqId
			})
		])
	}
}
