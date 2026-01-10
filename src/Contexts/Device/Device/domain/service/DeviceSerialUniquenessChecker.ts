import { DeviceAlreadyExistError } from '../errors/DeviceAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceRepository } from '../repository/DeviceRepository'
import { type DeviceId } from '../valueObject/DeviceId'
import { type DeviceSerial } from '../valueObject/DeviceSerial'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'

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
	async ensureUnique({
		serial,
		brandId,
		categoryId,
		excludeId
	}: {
		serial: Primitives<DeviceSerial>
		brandId: Primitives<BrandId>
		categoryId: Primitives<CategoryId>
		excludeId?: Primitives<DeviceId>
	}): Promise<void> {
		if (serial === null || serial === undefined) {
			return
		}
		const existingLocation = await this.repository.searchBySerialAndBrand(serial, brandId, categoryId)
		if (existingLocation && existingLocation.id !== excludeId) {
			throw new DeviceAlreadyExistError('serial')
		}
	}
}
