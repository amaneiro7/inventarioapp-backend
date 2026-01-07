import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { StatusOptions } from '../../../Device/Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type DeviceStatus } from '../../../Device/Device/domain/DeviceStatus'
import { type DeviceRepository } from '../../../Device/Device/domain/repository/DeviceRepository'
import { type DeviceComputer } from './Computer'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents the name of a computer, which can be null.
 */
export class ComputerName extends AcceptedNullValueObject<string> {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 1000
	private readonly NO_LOWERCASE_REGEX = /^[^a-z]*$/
	private readonly NO_SPECIAL_CHARS_REGEX = /^[A-Z0-9-]+$/

	constructor(
		readonly value: string | null,
		private readonly statusId: Primitives<DeviceStatus>
	) {
		super(value)
		if (this.value !== null) {
			this.value = this.value.toUpperCase().trim()
		}
		this.ensureIfStatusIsInUse(this.value, this.statusId)
		this.ensureIsValid(this.value)
	}

	private ensureIfStatusIsInUse(value: Primitives<ComputerName>, statusId: Primitives<DeviceStatus>): void {
		const isInUse =
			statusId === StatusOptions.INUSE ||
			statusId === StatusOptions.PRESTAMO ||
			statusId === StatusOptions.CONTINGENCIA ||
			statusId === StatusOptions.GUARDIA ||
			statusId === StatusOptions.JORNADA

		const isNotInUse =
			statusId === StatusOptions.INALMACEN ||
			statusId === StatusOptions.DESINCORPORADO ||
			statusId === StatusOptions.PORDESINCORPORAR

		if (isNotInUse && value !== null) {
			throw new InvalidArgumentError(
				'El nombre del equipo solo puede establecerse cuando el dispositivo está en uso.'
			)
		}

		if (isInUse && value === null) {
			throw new InvalidArgumentError('La computadora debe tener un nombre de equipo.')
		}
	}

	private ensureIsValid(value: string | null): void {
		if (value === null) return

		const errors: string[] = []
		if (!this.NO_SPECIAL_CHARS_REGEX.test(value)) {
			errors.push('No puede contener caracteres especiales que no sean guiones.')
		}
		if (!this.NO_LOWERCASE_REGEX.test(value)) {
			errors.push('Debe estar en mayúsculas.')
		}
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			errors.push(`Debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`)
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
		if (computerName === undefined || entity.computerNameValue === computerName) {
			return
		}
		await ComputerName.ensuerComputerNameDoesNotExit({ repository, computerName })
		entity.updateComputerName(computerName, entity.statusValue)
	}

	static async ensuerComputerNameDoesNotExit({
		repository,
		computerName
	}: {
		repository: DeviceRepository
		computerName: Primitives<ComputerName>
	}): Promise<void> {
		if (computerName === null) {
			return
		}
		const existingDevice = await repository.searchByComputerName(computerName)
		if (existingDevice) {
			throw new InvalidArgumentError('El nombre del equipo ya existe.')
		}
	}
}
