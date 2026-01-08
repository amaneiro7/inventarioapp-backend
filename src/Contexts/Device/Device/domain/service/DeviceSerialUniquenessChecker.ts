import { DeviceAlreadyExistError } from '../errors/DeviceAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceRepository } from '../repository/DeviceRepository'
import { type DeviceId } from '../valueObject/DeviceId'
import { type DeviceSerial } from '../valueObject/DeviceSerial'

/**
 * Domain service responsible for verifying that a Device serial is unique within the system.
 */
export class DeviceSerialUniquenessChecker {
	/**
	 * Creates an instance of DeviceSerialUniquenessChecker.
	 * @param {DeviceRepository} repository - The repository used to check for existing cities.
	 */
	constructor(private readonly repository: DeviceRepository) {}

	/**
	 * Ensures that the provided Device serial is unique.
	 * If an ID is provided in excludeId, it ignores that Device (useful for updates).
	 *
	 * @param {Primitives<DeviceSerial>} serial - The Device serial to check.
	 * @param {Primitives<DeviceId>} [excludeId] - The ID of the Device to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the serial is unique.
	 * @throws {DeviceSerialAlreadyExistError} If a Device with the same serial already exists.
	 */
	async ensureUnique(serial: Primitives<DeviceSerial>, excludeId?: Primitives<DeviceId>): Promise<void> {
		if (serial === null || serial === undefined) {
			return
		}
		const existingLocation = await this.repository.searchBySerial(serial)
		if (existingLocation && existingLocation.id !== excludeId) {
			throw new DeviceAlreadyExistError(serial)
		}
	}
}
