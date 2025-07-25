import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { OperatingSystemId } from '../../OperatingSystem/OperatingSystem/domain/OperatingSystemId'
import { StatusOptions } from '../../../Device/Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { OperatingSystemDoesNotExistError } from '../../OperatingSystem/OperatingSystem/domain/OperatingSystemDoesNotExist'
import { type DeviceStatus } from '../../../Device/Device/domain/DeviceStatus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemRepository } from '../../OperatingSystem/OperatingSystem/domain/OperatingSystemRepository'
import { type DeviceComputer } from './Computer'
import { type ComputerHardDriveCapacity } from './ComputerHardDriveCapacity'

/**
 * Represents the operating system of a computer, which can be null.
 */
export class ComputerOperatingSystem extends AcceptedNullValueObject<Primitives<OperatingSystemId>> {
	/**
	 * Creates an instance of ComputerOperatingSystem.
	 * @param value - The ID of the operating system, or null.
	 * @param hardDriveCapacity - The capacity of the hard drive.
	 * @param status - The status of the device.
	 */
	constructor(
		readonly value: Primitives<OperatingSystemId> | null,
		readonly hardDriveCapacity: Primitives<ComputerHardDriveCapacity>,
		readonly status: Primitives<DeviceStatus>
	) {
		super(value)
		this.ensureIfHardDriveisNullOperatingSystemIsNullAsWell(this.value, this.hardDriveCapacity)
		this.ensureIfStatusIsInUseOperatingSystemMustHaveAValue(this.value, this.status)
		this.ensureIsValidOperatingSystemId(value)
	}

	/**
	 * Converts the operating system to its primitive value.
	 * @returns The operating system ID or null.
	 */
	toPrimitives(): Primitives<ComputerOperatingSystem> {
		return this.value
	}

	private ensureIsValidOperatingSystemId(id: Primitives<ComputerOperatingSystem>): void {
		if (!this.isValid(id)) {
			throw new InvalidArgumentError('Operating System is required')
		}
	}

	private ensureIfHardDriveisNullOperatingSystemIsNullAsWell(
		operatingSystem: Primitives<ComputerOperatingSystem>,
		hardDriveCapacity: Primitives<ComputerHardDriveCapacity>
	): void {
		if (hardDriveCapacity === null && operatingSystem !== null) {
			throw new InvalidArgumentError('You cannot have operating system if you dont have hard drive')
		}
	}

	private ensureIfStatusIsInUseOperatingSystemMustHaveAValue(
		operatingSystem: Primitives<ComputerOperatingSystem>,
		status: Primitives<DeviceStatus>
	): void {
		if (
			(status === StatusOptions.INUSE ||
				status === StatusOptions.PRESTAMO ||
				status === StatusOptions.CONTINGENCIA ||
				status === StatusOptions.JORNADA ||
				status === StatusOptions.GUARDIA) &&
			operatingSystem === null
		) {
			throw new InvalidArgumentError('If computer is in use, required an operaing system')
		}

		if (
			(status === StatusOptions.INALMACEN ||
				status === StatusOptions.PORDESINCORPORAR ||
				status === StatusOptions.DESINCORPORADO) &&
			operatingSystem !== null
		) {
			throw new InvalidArgumentError('If computer is not use, cannot have an operaing system')
		}
	}

	private isValid(id: Primitives<ComputerOperatingSystem>): boolean {
		if (id === null) return true
		const operatingSystemId = new OperatingSystemId(id)
		return operatingSystemId instanceof OperatingSystemId
	}

	static async updateOperatingSystemField({
		repository,
		operatingSystem,
		entity
	}: {
		repository: OperatingSystemRepository
		operatingSystem?: Primitives<ComputerOperatingSystem>
		entity: DeviceComputer
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor del Sistema Operativo no realiza ninguna acción
		if (operatingSystem === undefined) {
			return
		}
		// Verifica que si el valor actual y el nuevo valor son iguales no realice ningún cambio
		if (entity.operatingSystemValue === operatingSystem) {
			return
		}
		// Verifica que el valor del Sistema Operativo exista en la base de datos, si no existe lanza un error {@link EmployeeDoesNotExistError} con el valor del Sistema Operativo pasado
		await ComputerOperatingSystem.ensureOperatingSystemExit({
			repository,
			operatingSystem
		})
		// Actualiza el campo valor del Sistema Operativo de la entidad {@link Device} con el nuevo valor del Sistema Operativo
		const hardDriveCapacity = entity.hardDriveCapacityValue
		const status = entity.statusValue
		entity.updateOperatingSystem(operatingSystem, hardDriveCapacity, status)
	}

	static async ensureOperatingSystemExit({
		repository,
		operatingSystem
	}: {
		repository: OperatingSystemRepository
		operatingSystem: Primitives<ComputerOperatingSystem>
	}): Promise<void> {
		// If the valor del Sistema Operativo is null, it does not exist, so we don't need to do any verification
		if (operatingSystem === null) {
			return
		}
		// Searches for a device with the given valor del Sistema Operativo in the database
		const deviceWithOperatingSystem = await repository.searchById(operatingSystem)
		// If a device with the given valor del Sistema Operativo exists, it means that it already exists in the database,
		// so we need to throw a {@link DeviceAlreadyExistError} with the given valor del Sistema Operativo
		if (deviceWithOperatingSystem === null) {
			throw new OperatingSystemDoesNotExistError(operatingSystem)
		}
	}
}
