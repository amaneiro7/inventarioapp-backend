import { HardDriveCapacityId } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacityId'
import { DeviceComputer, type DeviceComputerPrimitives } from '../domain/Computer'
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

export class ComputerValidation {
  constructor(
    private readonly deviceRepository: DeviceRepository,
    private readonly processorRepository: ProcessorRepository,
    private readonly hardDriveCapacityRepository: HardDriveCapacityRepository,
    private readonly hardDriveTypeRepository: HardDriveTypeRepository,
    private readonly operatingSystemRepository: OperatingSystemRepository,
    private readonly operatingSystemArqRepository: OperatingSystemArqRepository,

  ) { }

  async run(params: Omit<DeviceComputerPrimitives, 'id' | 'memoryRamCapacity'>): Promise<DeviceComputer> {
    await this.ensureValidation(params)
    return DeviceComputer.create(params)
  }

  private async ensureValidation(params: Omit<DeviceComputerPrimitives, 'id' | 'memoryRamCapacity'>): Promise<void> {
    await ComputerName.ensuerComputerNameDoesNotExit({ repository: this.deviceRepository, computerName: params.computerName })
    await ComputerProcessor.ensureProcessorExit({ repository: this.processorRepository, processor: params.processorId })
    await HardDriveCapacityId.ensureHardDriveCapacityExit({ repository: this.hardDriveCapacityRepository, hardDriveCapacity: params.hardDriveCapacityId })
    await HardDriveTypeId.ensureHardDriveTypeExit({ repository: this.hardDriveTypeRepository, hardDriveType: params.hardDriveTypeId })
    await ComputerOperatingSystem.ensureOperatingSystemExit({ repository: this.operatingSystemRepository, operatingSystem: params.operatingSystemId })
    await ComputerOperatingSystemArq.ensureOperatingSystemArqExit({ repository: this.operatingSystemArqRepository, operatingSystemArq: params.operatingSystemArqId })
  }
}
