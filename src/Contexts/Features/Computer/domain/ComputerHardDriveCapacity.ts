import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { HardDriveCapacityId } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacityId'
import { StatusOptions } from '../../../Device/Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceStatus } from '../../../Device/Device/domain/DeviceStatus'
import { type HardDriveCapacityRepository } from '../../HardDrive/HardDriveCapacity/domain/HardDriveCapacityRepository'
import { type DeviceComputer } from './Computer'

/**
 * Represents the hard drive capacity of a computer, which can be null.
 */
export class ComputerHardDriveCapacity extends AcceptedNullValueObject<Primitives<HardDriveCapacityId>> {
	/**
	 * Creates an instance of ComputerHardDriveCapacity.
	 * @param value - The ID of the hard drive capacity, or null.
	 * @param status - The status of the device.
	 */
	constructor(readonly value: Primitives<HardDriveCapacityId> | null, readonly status: Primitives<DeviceStatus>) {
		super(value)
		this.ensureIsValidHardDriveCapacityId(value)
		this.ensureIfStatusIsInUseHardDriveMustHaveAValue(this.value, this.status)
	}

	/**
	 * Converts the hard drive capacity to its primitive value.
	 * @returns The hard drive capacity ID or null.
	 */
	toPrimitives(): Primitives<HardDriveCapacityId> | null {
		return this.value
	}

	private ensureIfStatusIsInUseHardDriveMustHaveAValue(
		hardDriveCapacity: Primitives<ComputerHardDriveCapacity>,
		status: Primitives<DeviceStatus>
	): void {
		if (
			(status === StatusOptions.INUSE ||
				status === StatusOptions.PRESTAMO ||
				status === StatusOptions.CONTINGENCIA ||
				status === StatusOptions.JORNADA ||
				status === StatusOptions.GUARDIA) &&
			hardDriveCapacity === null
		) {
			throw new InvalidArgumentError('If computer is in use, required an hard drive')
		}
	}

	private ensureIsValidHardDriveCapacityId(id: Primitives<HardDriveCapacityId> | null): void {
		if (!this.isValid(id)) {
			throw new InvalidArgumentError('HardDrive is required')
		}
	}

	private isValid(id: Primitives<HardDriveCapacityId> | null): boolean {
		if (id === null) return true
		const hardDriveCapacityId = new HardDriveCapacityId(id)
		return hardDriveCapacityId instanceof HardDriveCapacityId
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
