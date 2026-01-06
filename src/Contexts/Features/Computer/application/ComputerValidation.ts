import { HardDriveCapacityId } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacityId'
import { DeviceComputer } from '../domain/Computer'
import { ComputerName } from '../domain/ComputerName'
import { ComputerOperatingSystem } from '../domain/ComputerOperatingSystem'
import { ComputerOperatingSystemArq } from '../domain/ComputerOperatingSystemArq'
import { ComputerProcessor } from '../domain/ComputerProcessor'
import { HardDriveTypeId } from '../../HardDrive/HardDriveType/domain/HardDriveTypeId'
import { type HardDriveTypeRepository } from '../../HardDrive/HardDriveType/domain/HardDriveTypeRepository'
import { type DeviceRepository } from '../../../Device/Device/domain/DeviceRepository'
import { type OperatingSystemRepository } from '../../OperatingSystem/OperatingSystem/domain/repository/OperatingSystemRepository'
import { type HardDriveCapacityRepository } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacityRepository'
import { type OperatingSystemArqRepository } from '../../OperatingSystem/OperatingSystemArq/domain/repository/OperatingSystemArqRepository'
import { type ProcessorRepository } from '../../Processor/domain/repository/ProcessorRepository'
import { type DeviceComputerParams } from '../domain/Computer.dto'

/**
 * @description A validation service for creating computer devices.
 * It ensures that all related entities (processor, hard drive, OS, etc.) exist before creating a new computer.
 */
export class ComputerValidation {
	private readonly deviceRepository: DeviceRepository
	private readonly processorRepository: ProcessorRepository
	private readonly hardDriveCapacityRepository: HardDriveCapacityRepository
	private readonly hardDriveTypeRepository: HardDriveTypeRepository
	private readonly operatingSystemRepository: OperatingSystemRepository
	private readonly operatingSystemArqRepository: OperatingSystemArqRepository

	constructor(dependencies: {
		deviceRepository: DeviceRepository
		processorRepository: ProcessorRepository
		hardDriveCapacityRepository: HardDriveCapacityRepository
		hardDriveTypeRepository: HardDriveTypeRepository
		operatingSystemRepository: OperatingSystemRepository
		operatingSystemArqRepository: OperatingSystemArqRepository
	}) {
		this.deviceRepository = dependencies.deviceRepository
		this.processorRepository = dependencies.processorRepository
		this.hardDriveCapacityRepository = dependencies.hardDriveCapacityRepository
		this.hardDriveTypeRepository = dependencies.hardDriveTypeRepository
		this.operatingSystemRepository = dependencies.operatingSystemRepository
		this.operatingSystemArqRepository = dependencies.operatingSystemArqRepository
	}

	/**
	 * @description Executes the validation process and creates a new `DeviceComputer` instance if valid.
	 * @param {DeviceComputerParams} params The parameters for the new computer.
	 * @returns {Promise<DeviceComputer>} A promise that resolves to a new `DeviceComputer` instance.
	 */
	async run(params: DeviceComputerParams): Promise<DeviceComputer> {
		await this.ensureValidation(params)
		return DeviceComputer.create(params)
	}

	/**
	 * @private
	 * @description Ensures all related entities exist by running validation checks in parallel.
	 * @param {DeviceComputerParams} params The parameters to validate.
	 */
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
