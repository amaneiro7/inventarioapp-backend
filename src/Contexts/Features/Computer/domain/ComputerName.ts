import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { StatusOptions } from '../../../Device/Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type DeviceStatus } from '../../../Device/Device/domain/DeviceStatus'
import { type DeviceRepository } from '../../../Device/Device/domain/DeviceRepository'
import { type DeviceComputer } from './Computer'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * Represents the name of a computer, which can be null.
 */
export class ComputerName extends AcceptedNullValueObject<string> {
	private readonly NAME_MAX_LENGTH = 1000
	private readonly NAME_MIN_LENGTH = 3
	private readonly notLowerCase = /^[^a-z]*$/
	private readonly notSpecialCharacterOnlyGuiones = /^[A-Z0-9-]+$/

	/**
	 * Creates an instance of ComputerName.
	 * @param value - The name of the computer, or null.
	 * @param statusId - The status of the device.
	 */
	constructor(readonly value: string | null, private readonly statusId: Primitives<DeviceStatus>) {
		super(value)

		if (this.value !== null) {
			this.value = this.value.toUpperCase().trim()
		}

		this.ensureIfStatusIsInUse(this.value, this.statusId)
		this.ensureIsValid(this.value)
	}

	/**
	 * Converts the computer name to its primitive value.
	 * @returns The computer name or null.
	 */
	toPrimitives(): string | null {
		return this.value
	}

	private ensureIfStatusIsInUse(value: Primitives<ComputerName>, statusId: Primitives<DeviceStatus>): void {
		if (
			(statusId === StatusOptions.INALMACEN ||
				statusId === StatusOptions.DESINCORPORADO ||
				statusId === StatusOptions.PORDESINCORPORAR) &&
			value !== null
		) {
			throw new InvalidArgumentError('Computer name can only be established when the device is in use')
		}

		if (
			(statusId === StatusOptions.INUSE ||
				statusId === StatusOptions.PRESTAMO ||
				statusId === StatusOptions.CONTINGENCIA ||
				statusId === StatusOptions.GUARDIA ||
				statusId === StatusOptions.JORNADA) &&
			value === null
		) {
			throw new InvalidArgumentError('Computer must have a computer name')
		}
	}

	private ensureIsValid(value: string | null): void {
		if (value === null) return

		const errors: string[] = []

		if (!this.notSpecialCharacterOnlyGuiones.test(value)) {
			errors.push('Computer name cannot contain special characters other than hyphens')
		}

		if (!this.notLowerCase.test(value)) {
			errors.push('Computer name must be in uppercase')
		}

		if (value.length < this.NAME_MIN_LENGTH || value.length > this.NAME_MAX_LENGTH) {
			errors.push(`Computer name must be between ${this.NAME_MIN_LENGTH} and ${this.NAME_MAX_LENGTH} characters`)
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(errors.join(', '))
		}
	}

	static async updateComputerNameField({
		repository,
		computerName,
		entity
	}: {
		repository: DeviceRepository
		computerName?: Primitives<ComputerName>
		entity: DeviceComputer
	}): Promise<void> {
		// Si no se ha pasado un nuevo nombre de equipo no realiza ninguna acción
		if (computerName === undefined) {
			return
		}
		// Verifica que si el nombre de equipo actual y el nuevo nombre de equipo son iguales no realice una busqueda en el repositorio
		if (entity.computerNameValue === computerName) {
			return
		}
		// Verifica que el nombre de equipo no exista en la base de datos, si existe lanza un error {@link DeviceAlreadyExistError} con el nombre de equipo pasado
		await ComputerName.ensuerComputerNameDoesNotExit({
			repository,
			computerName
		})
		// Actualiza el campo nombre de equipo de la entidad {@link Device} con el nuevo nombre de equipo
		const status = entity.statusValue
		entity.updateComputerName(computerName, status)
	}

	static async ensuerComputerNameDoesNotExit({
		repository,
		computerName
	}: {
		repository: DeviceRepository
		computerName: Primitives<ComputerName>
	}): Promise<void> {
		// If the nombre de equipo is null, it does not exist, so we don't need to do any verification
		if (computerName === null) {
			return
		}
		// Searches for a device with the given nombre de equipo in the database
		const deviceWithComputerName = await repository.searchByComputerName(computerName)
		// If a device with the given nombre de equipo exists, it means that it already exists in the database,
		// so we need to throw a {@link DeviceAlreadyExistError} with the given nombre de equipo
		if (deviceWithComputerName !== null) {
			throw new InvalidArgumentError('computerName already exists')
		}
	}
}
