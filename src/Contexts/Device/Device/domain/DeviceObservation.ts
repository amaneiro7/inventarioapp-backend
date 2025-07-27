import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type Device } from './Device'

/**
 * @class DeviceObservation
 * @extends AcceptedNullValueObject
 * @description Represents the Value Object for a Device's observation notes.
 * It ensures the observation text does not exceed a maximum length.
 */
export class DeviceObservation extends AcceptedNullValueObject<string> {
	private readonly MAX_LENGTH = 1000

	constructor(readonly value: string | null) {
		super(value)
		this.ensureIsValidObservation(value)
	}

	/**
	 * @private
	 * @method ensureIsValidObservation
	 * @description Validates that the observation text does not exceed the maximum length.
	 * @param {string | null} value The observation text to validate.
	 * @throws {InvalidArgumentError} If the observation is too long.
	 */
	private ensureIsValidObservation(value: string | null): void {
		if (value !== null && value.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(`<${value}> supera la longitud máxima de ${this.MAX_LENGTH} caracteres.`)
		}
	}

	/**
	 * @static
	 * @method updateObservationField
	 * @description Handles the logic for updating a device's observation field.
	 * @param {{ observation?: Primitives<DeviceObservation>; entity: Device }} params The parameters for updating.
	 * @returns {Promise<void>}
	 */
	static updateObservationField({
		observation,
		entity
	}: {
		observation?: Primitives<DeviceObservation>
		entity: Device
	}): void {
		if (observation === undefined || entity.observationValue === observation) {
			return
		}
		entity.updateObservation(observation)
	}
}
