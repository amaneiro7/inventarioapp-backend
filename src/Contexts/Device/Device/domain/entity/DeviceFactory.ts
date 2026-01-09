import { Device } from './Device'
import { DeviceComputer } from './Computer'
import { DeviceHardDrive } from './HardDrive'
import { MFP } from './MFP'
import { ComputerConsistencyValidator } from '../service/ComputerConsistencyValidator'
import { ProcessorExistenceChecker } from '../../../../Features/Processor/domain/service/ProcessorExistanceChecker'
import { HardDriveCapacityExistenceChecker } from '../../../../Features/HardDrive/HardDriveCapacity/domain/service/HardDriveCapacityExistanceChecker'
import { HardDriveTypeExistenceChecker } from '../../../../Features/HardDrive/HardDriveType/domain/service/HardDriveTypeExistanceChecker'
import { OperatingSystemExistenceChecker } from '../../../../Features/OperatingSystem/OperatingSystem/domain/service/OperatingSystemExistanceChecker'
import { OperatingSystemArqExistenceChecker } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/service/OperatingSystemArqExistanceChecker'
import { ComputerNameUniquenessChecker } from '../service/ComputerNameUniquenessChecker'
import { type DeviceRepository } from '../repository/DeviceRepository'
import { type OperatingSystemArqRepository } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/repository/OperatingSystemArqRepository'
import { type OperatingSystemRepository } from '../../../../Features/OperatingSystem/OperatingSystem/domain/repository/OperatingSystemRepository'
import { type HardDriveTypeRepository } from '../../../../Features/HardDrive/HardDriveType/domain/repository/HardDriveTypeRepository'
import { type HardDriveCapacityRepository } from '../../../../Features/HardDrive/HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { type ProcessorRepository } from '../../../../Features/Processor/domain/repository/ProcessorRepository'
import { type DeviceDto, type DeviceParams } from '../dto/Device.dto'
import { type DeviceComputerParams } from '../dto/Computer.dto'
import { type DeviceHardDriveParams } from '../dto/HardDrive.dto'
import { type DeviceMFPParams } from '../dto/MFP.dto'

export class DeviceFactory {
	private readonly processorExistenceChecker: ProcessorExistenceChecker
	private readonly computerNameUniquenessChecker: ComputerNameUniquenessChecker
	private readonly hardDriveCapacityExistenceChecker: HardDriveCapacityExistenceChecker
	private readonly hardDriveTypeExistenceChecker: HardDriveTypeExistenceChecker
	private readonly operatingSystemExistenceChecker: OperatingSystemExistenceChecker
	private readonly operatingSystemArqExistenceChecker: OperatingSystemArqExistenceChecker
	private readonly computerConsistencyValidator = new ComputerConsistencyValidator()
	constructor({
		deviceRepository,
		processorRepository,
		hardDriveCapacityRepository,
		hardDriveTypeRepository,
		operatingSystemArqRepository,
		operatingSystemRepository
	}: {
		deviceRepository: DeviceRepository
		processorRepository: ProcessorRepository
		hardDriveCapacityRepository: HardDriveCapacityRepository
		hardDriveTypeRepository: HardDriveTypeRepository
		operatingSystemRepository: OperatingSystemRepository
		operatingSystemArqRepository: OperatingSystemArqRepository
	}) {
		this.computerNameUniquenessChecker = new ComputerNameUniquenessChecker(deviceRepository)
		this.processorExistenceChecker = new ProcessorExistenceChecker(processorRepository)
		this.hardDriveCapacityExistenceChecker = new HardDriveCapacityExistenceChecker(hardDriveCapacityRepository)
		this.hardDriveTypeExistenceChecker = new HardDriveTypeExistenceChecker(hardDriveTypeRepository)
		this.operatingSystemExistenceChecker = new OperatingSystemExistenceChecker(operatingSystemRepository)
		this.operatingSystemArqExistenceChecker = new OperatingSystemArqExistenceChecker(operatingSystemArqRepository)
	}

	static async fromPrimitives(primitives: DeviceDto): Promise<Device> {
		if (primitives.computer) {
			return DeviceComputer.fromPrimitives(primitives)
		}
		if (primitives.hardDrive) {
			return DeviceHardDrive.fromPrimitives(primitives)
		}
		if (primitives.mfp) {
			return MFP.fromPrimitives(primitives)
		}

		return Device.fromPrimitives(primitives)
	}

	async create(params: DeviceParams): Promise<Device> {
		const { categoryId } = params

		if (DeviceComputer.isComputerCategory({ categoryId })) {
			return this.createComputer(params as DeviceComputerParams)
		}
		if (DeviceHardDrive.isHardDriveCategory({ categoryId })) {
			return this.createHardDrive(params as DeviceHardDriveParams)
		}
		if (MFP.isMFPCategory({ categoryId })) {
			return MFP.create(params as DeviceMFPParams)
		}

		return Device.create(params)
	}

	private async createComputer(params: DeviceComputerParams): Promise<DeviceComputer> {
		await Promise.all([
			this.computerNameUniquenessChecker.ensureUnique(params?.computerName),
			this.processorExistenceChecker.ensureExist(params?.processorId),
			this.hardDriveCapacityExistenceChecker.ensureExist(params?.hardDriveCapacityId),
			this.hardDriveTypeExistenceChecker.ensureExist(params?.hardDriveTypeId),
			this.operatingSystemExistenceChecker.ensureExist(params?.operatingSystemId),
			this.operatingSystemArqExistenceChecker.ensureExist(params?.operatingSystemArqId)
		])
		const deviceComputer = DeviceComputer.create(params)
		this.computerConsistencyValidator.validate(deviceComputer)
		return deviceComputer
	}

	private async createHardDrive(params: DeviceHardDriveParams): Promise<DeviceHardDrive> {
		await Promise.all([
			this.hardDriveCapacityExistenceChecker.ensureExist(params?.hardDriveCapacityId),
			this.hardDriveTypeExistenceChecker.ensureExist(params?.hardDriveTypeId)
		])
		return DeviceHardDrive.create(params)
	}
}
