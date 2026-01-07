import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { DeviceAlreadyExistError } from './errors/DeviceAlreadyExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type Device } from './entity/Device'
import { type Generic } from '../../../ModelSeries/ModelSeries/domain/valueObject/Generic'
import { type DeviceRepository } from './repository/DeviceRepository'

/**
 * @class DeviceSerial
 * @extends AcceptedNullValueObject
 * @description Represents the Value Object for a Device's serial number.
 * It encapsulates validation, normalization, and business logic for serial numbers.
 */
export class DeviceSerial extends AcceptedNullValueObject<string> {
	private readonly MIN_LENGTH = 4
	private readonly MAX_LENGTH = 100
	private readonly NO_LOWERCASE_REGEX = /^[^a-z]*$/
	private readonly NO_SPECIAL_CHARS_REGEX = /^[\w-]*$/

	constructor(value: string | null) {
		super(value)
		if (this.value !== null) {
			this.value = this.value.toUpperCase().trim()
		}
		this.ensureIsValidSerial(this.value)
	}

	/**
	 * @private
	 * @method ensureIsValidSerial
	 * @description Validates the serial number based on several rules.
	 * @param {string | null} value The serial number to validate.
	 * @throws {InvalidArgumentError} If the serial number is invalid.
	 */
	private ensureIsValidSerial(value: string | null): void {
		if (value === null) return

		const errors: string[] = []
		if (!this.NO_SPECIAL_CHARS_REGEX.test(value)) {
			errors.push('No puede contener caracteres especiales')
		}
		if (!this.NO_LOWERCASE_REGEX.test(value)) {
			errors.push('Debe estar en mayúsculas')
		}
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			errors.push(`Debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres`)
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`El serial <${value}> no es válido: ${errors.join(', ')}`)
		}
	}

	/**
	 * @static
	 * @method isSerialCanBeNull
	 * @description Checks if the serial number can be null based on whether the model is generic.
	 * @param {{ generic: Primitives<Generic>; serial: Primitives<DeviceSerial> }} params The parameters for the check.
	 * @throws {InvalidArgumentError} If the serial is null for a non-generic model.
	 */
	static isSerialCanBeNull({
		generic,
		serial
	}: {
		generic: Primitives<Generic>
		serial: Primitives<DeviceSerial>
	}): void {
		if (!generic && !serial) {
			throw new InvalidArgumentError('El serial es obligatorio para modelos no genéricos.')
		}
	}

	/**
	 * @static
	 * @method updateSerialField
	 * @description Handles the logic for updating a device's serial number.
	 * @param {{ repository: DeviceRepository; serial?: Primitives<DeviceSerial>; entity: Device }} params The parameters for updating.
	 * @returns {Promise<void>}
	 */
	static async updateSerialField({
		repository,
		serial,
		entity
	}: {
		repository: DeviceRepository
		serial?: Primitives<DeviceSerial>
		entity: Device
	}): Promise<void> {
		if (serial === undefined || entity.serialValue === serial) {
			return
		}
		await DeviceSerial.ensureSerialDoesNotExit({ repository, serial })
		entity.updateSerial(serial)
	}

	/**
	 * @static
	 * @method ensureSerialDoesNotExit
	 * @description Checks if a serial number already exists in the repository.
	 * @param {{ repository: DeviceRepository; serial: Primitives<DeviceSerial> }} params The parameters for the check.
	 * @throws {DeviceAlreadyExistError} If the serial number already exists.
	 */
	static async ensureSerialDoesNotExit({
		repository,
		serial
	}: {
		repository: DeviceRepository
		serial: Primitives<DeviceSerial>
	}): Promise<void> {
		if (serial === null) {
			return
		}
		const existingDevice = await repository.searchBySerial(new DeviceSerial(serial).value)
		if (existingDevice) {
			throw new DeviceAlreadyExistError(serial)
		}
	}
}
