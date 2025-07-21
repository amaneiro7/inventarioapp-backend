import { HardDriveTypeId } from '../../HardDrive/HardDriveType/domain/HardDriveTypeId'
import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ComputerHardDriveCapacity } from './ComputerHardDriveCapacity'
import { type HardDriveTypeRepository } from '../../HardDrive/HardDriveType/domain/HardDriveTypeRepository'
import { type DeviceComputer } from './Computer'

/**
 * Represents the hard drive type of a computer, which can be null.
 */
export class ComputerHardDriveType extends AcceptedNullValueObject<Primitives<HardDriveTypeId>> {
	/**
	 * Creates an instance of ComputerHardDriveType.
	 * @param value - The ID of the hard drive type, or null.
	 * @param hardDriveCapacity - The capacity of the hard drive.
	 */
	constructor(
		readonly value: Primitives<HardDriveTypeId> | null,
		readonly hardDriveCapacity: Primitives<ComputerHardDriveCapacity>
	) {
		super(value)
		this.ensureIfHardDriveisNullHardDriveTypeIsNullAsWell(this.value, this.hardDriveCapacity)
		this.ensureIsValidHardDriveTypeId(value)
	}

	/**
	 * Converts the hard drive type to its primitive value.
	 * @returns The hard drive type ID or null.
	 */
	toPrimitives(): Primitives<HardDriveTypeId> | null {
		return this.value
	}

	private ensureIsValidHardDriveTypeId(id: Primitives<HardDriveTypeId> | null): void {
		if (!this.isValid(id)) {
			throw new InvalidArgumentError('HardDriveTypeId is required')
		}
	}

	private ensureIfHardDriveisNullHardDriveTypeIsNullAsWell(
		hardDriveType: Primitives<ComputerHardDriveType>,
		hardDriveCapacity: Primitives<ComputerHardDriveCapacity>
	): void {
		if (hardDriveCapacity !== null && hardDriveType === null) {
			throw new InvalidArgumentError('HardDrive Type cannot be null if hdd capacity has a value')
		}
		if (hardDriveCapacity === null && hardDriveType !== null) {
			throw new InvalidArgumentError('Hard Drive type cannot have a value if hdd capacity is null')
		}
	}

	private isValid(id: Primitives<HardDriveTypeId> | null): boolean {
		if (id === null) return true
		const hardDriveTypeId = new HardDriveTypeId(id)
		return hardDriveTypeId instanceof HardDriveTypeId
	}

	static async updateHardDriveTypeField({
		repository,
		hardDriveType,
		entity
	}: {
		repository: HardDriveTypeRepository
		hardDriveType?: Primitives<ComputerHardDriveType>
		entity: DeviceComputer
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor de la capacidad del Disco Duro no realiza ninguna acción
		if (hardDriveType === undefined) {
			return
		}
		// Verifica que si el valor actual y el nuevo valor son iguales no realice ningún cambio
		if (entity.hardDriveTypeValue === hardDriveType) {
			return
		}
		// Verifica que el valor de la capacidad del Disco Duro exista en la base de datos, si no existe lanza un error {@link EmployeeDoesNotExistError} con el valor de la capacidad del Disco Duro pasado
		await HardDriveTypeId.ensureHardDriveTypeExit({
			repository,
			hardDriveType
		})
		// Actualiza el campo valor de la capacidad del Disco Duro de la entidad {@link Device} con el nuevo valor de la capacidad del Disco Duro
		const hardDriveCapacity = entity.hardDriveCapacityValue
		entity.updateHardDriveType(hardDriveType, hardDriveCapacity)
	}
}
