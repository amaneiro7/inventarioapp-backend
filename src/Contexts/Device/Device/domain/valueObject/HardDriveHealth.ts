import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceHardDrive } from './HardDrive'

/**
 * @description Represents the health of a hard drive as a percentage.
 */
export class HardDriveHealth extends NumberValueObject {
	private readonly MIN_HEALTH = 0
	private readonly MAX_HEALTH = 100

	constructor(readonly value: number) {
		super(value)
		this.ensureIsValidRange(value)
	}

	private ensureIsValidRange(value: number): void {
		if (value < this.MIN_HEALTH || value > this.MAX_HEALTH) {
			throw new InvalidArgumentError(
				`<${value}> no es un porcentaje de salud válido. Debe estar entre ${this.MIN_HEALTH} y ${this.MAX_HEALTH}.`
			)
		}
	}

	/**
	 * @description Handles the logic for updating a device's health status.
	 * @param {{ health?: Primitives<HardDriveHealth>; entity: DeviceHardDrive }} params The parameters for updating.
	 */
	static updateHealthField({
		health,
		entity
	}: {
		health?: Primitives<HardDriveHealth>
		entity: DeviceHardDrive
	}): void {
		if (health === undefined || entity.healthValue === health) {
			return
		}
		entity.updateHealth(health)
	}
}
