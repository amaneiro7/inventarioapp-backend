import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { DeviceAlreadyExistError } from './errors/DeviceAlreadyExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type Device } from './entity/Device'
import { type DeviceRepository } from './repository/DeviceRepository'

/**
 * @class DeviceActivo
 * @extends AcceptedNullValueObject
 * @description Represents the Value Object for a Device's asset number (activo).
 * It encapsulates validation rules and business logic related to the asset number.
 */
export class DeviceActivo extends AcceptedNullValueObject<string> {
	private readonly MIN_LENGTH = 4
	private readonly MAX_LENGTH = 100
	private readonly NO_LOWERCASE_REGEX = /^[^a-z]*$/
	private readonly NO_SPECIAL_CHARS_REGEX = /^[\w-]*$/

	constructor(value: string | null) {
		super(value)
		this.ensureIsValidActivo(this.value)
	}

	/**
	 * @private
	 * @method ensureIsValidActivo
	 * @description Validates the asset number based on several rules.
	 * @param {string | null} value The asset number to validate.
	 * @throws {InvalidArgumentError} If the asset number is invalid.
	 */
	private ensureIsValidActivo(value: string | null): void {
		if (value === null) return

		const errors: string[] = []
		if (!this.NO_SPECIAL_CHARS_REGEX.test(value)) {
			errors.push('Cannot contain special characters')
		}
		if (!this.NO_LOWERCASE_REGEX.test(value)) {
			errors.push('Must be in uppercase')
		}
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			errors.push(`Must be between ${this.MIN_LENGTH} and ${this.MAX_LENGTH} characters`)
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`<${value}> is not a valid asset number: ${errors.join(', ')}`)
		}
	}

	/**
	 * @static
	 * @method updateActivoField
	 * @description Handles the logic for updating a device's asset number.
	 * @param {{ repository: DeviceRepository; activo?: Primitives<DeviceActivo>; entity: Device }} params The parameters for updating.
	 * @returns {Promise<void>}
	 */
	static async updateActivoField({
		repository,
		activo,
		entity
	}: {
		repository: DeviceRepository
		activo?: Primitives<DeviceActivo>
		entity: Device
	}): Promise<void> {
		if (activo === undefined || entity.activoValue === activo) {
			return
		}
		await DeviceActivo.ensureActivoDoesNotExit({ repository, activo })
		entity.updateActivo(activo)
	}

	/**
	 * @static
	 * @method ensureActivoDoesNotExit
	 * @description Checks if an asset number already exists in the repository.
	 * @param {{ repository: DeviceRepository; activo: Primitives<DeviceActivo> }} params The parameters for the check.
	 * @throws {DeviceAlreadyExistError} If the asset number already exists.
	 */
	static async ensureActivoDoesNotExit({
		repository,
		activo
	}: {
		repository: DeviceRepository
		activo: Primitives<DeviceActivo>
	}): Promise<void> {
		if (activo === null) {
			return
		}
		const existingDevice = await repository.searchByActivo(new DeviceActivo(activo).value)
		if (existingDevice) {
			throw new DeviceAlreadyExistError(activo)
		}
	}
}
