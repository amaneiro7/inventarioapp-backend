import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'
import { type DeviceRepository } from '../repository/DeviceRepository'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents the name of a computer, which can be null.
 */
export class ComputerName extends AcceptedNullStringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 1000
	private readonly NO_LOWERCASE_REGEX = /^[^a-z]*$/
	private readonly NO_SPECIAL_CHARS_REGEX = /^[A-Z0-9-]+$/

	constructor(readonly value: string | null) {
		super(value)
		if (this.value !== null) {
			this.value = this.value.toUpperCase().trim()
		}
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH)
		this.ensureMatchesPattern(
			this.NO_SPECIAL_CHARS_REGEX,
			'No puede contener caracteres especiales que no sean guiones.'
		)
		this.ensureMatchesPattern(this.NO_LOWERCASE_REGEX, 'Debe estar en mayúsculas.')
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
