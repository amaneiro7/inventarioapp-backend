import { StatusOptions } from '../../../Device/Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { MemoryRamCapacity } from '../../MemoryRam/MemoryRamCapacity/MemoryRamCapacity'
import { type DeviceStatus } from '../../../Device/Device/domain/DeviceStatus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceComputer } from './Computer'
import { HardDriveCapacityRepository } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacityRepository'
import { ComputerHardDriveCapacity } from './ComputerHardDriveCapacity'
import { HardDriveCapacityId } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacityId'

/**
 * Represents the memory RAM capacity of a computer.
 */
export class ComputerMemoryRamCapacity extends MemoryRamCapacity {
	/**
	 * Creates an instance of ComputerMemoryRamCapacity.
	 * @param value - The memory RAM capacity value.
	 * @param status - The status of the device.
	 */
	constructor(value: Primitives<ComputerMemoryRamCapacity>, status: Primitives<DeviceStatus>) {
		super(value)

		this.deviceIsInUse(value, status)
	}

	private deviceIsInUse(memoryRam: Primitives<ComputerMemoryRamCapacity>, status: Primitives<DeviceStatus>): void {
		if (status === StatusOptions.INUSE && memoryRam === 0) {
			throw new InvalidArgumentError('Memory Ram cannot be 0 when computer is in use')
		}
	}

	static async updateMemoryRamField({
		memoryRam,
		entity
	}: {
		memoryRam?: Primitives<ComputerMemoryRamCapacity>
		entity: DeviceComputer
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor de la memoria Ram no realiza ninguna acción
		if (memoryRam === undefined) {
			return
		}
		// Verifica que si el valor del campo la memoria Ram actual y el nuevo valor la memoria Ram son iguales no realiza un cambio
		if (entity.memoryRamCapacityValue === memoryRam) {
			return
		}
		const status = entity.statusValue
		// Actualiza el campo la memoria Ram de la entidad {@link Device} con el nuevo la memoria Ram
		entity.updateMemoryRamCapacity(memoryRam, status)
	}

	static async updateHardDriveCapacityField({
		repository,
		hardDriveCapacity,
		entity
	}: {
		repository: HardDriveCapacityRepository
		hardDriveCapacity?: Primitives<ComputerHardDriveCapacity>
		entity: DeviceComputer
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor de la capacidad del Disco Duro no realiza ninguna acción
		if (hardDriveCapacity === undefined) {
			return
		}
		// Verifica que si el valor actual y el nuevo valor son iguales no realice ningún cambio
		if (entity.hardDriveCapacityValue === hardDriveCapacity) {
			return
		}
		// Verifica que el valor de la capacidad del Disco Duro exista en la base de datos, si no existe lanza un error {@link EmployeeDoesNotExistError} con el valor de la capacidad del Disco Duro pasado
		await HardDriveCapacityId.ensureHardDriveCapacityExit({
			repository,
			hardDriveCapacity
		})
		const status = entity.statusValue
		// Actualiza el campo valor de la capacidad del Disco Duro de la entidad {@link Device} con el nuevo valor de la capacidad del Disco Duro
		entity.updateHardDriveCapacity(hardDriveCapacity, status)
	}
}
