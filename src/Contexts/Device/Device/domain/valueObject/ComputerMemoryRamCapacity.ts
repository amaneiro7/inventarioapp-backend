import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { MemoryRamCapacity } from '../../../../Features/MemoryRam/MemoryRamCapacity/MemoryRamCapacity'
import { type DeviceStatus } from '../DeviceStatus'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents the memory RAM capacity of a computer.
 */
export class ComputerMemoryRamCapacity extends MemoryRamCapacity {
	constructor(value: Primitives<ComputerMemoryRamCapacity>, status: Primitives<DeviceStatus>) {
		super(value)
		this.deviceIsInUse(value, status)
	}

	private deviceIsInUse(memoryRam: Primitives<ComputerMemoryRamCapacity>, status: Primitives<DeviceStatus>): void {
		const isInUse =
			status === StatusOptions.INUSE ||
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.JORNADA ||
			status === StatusOptions.GUARDIA

		if (isInUse && memoryRam === 0) {
			throw new InvalidArgumentError('La memoria RAM no puede ser 0 si la computadora está en uso.')
		}
	}
}
