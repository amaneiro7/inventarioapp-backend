import { DeviceAlreadyExistError } from '../errors/DeviceAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceRepository } from '../repository/DeviceRepository'
import { type DeviceId } from '../valueObject/DeviceId'
import { type DeviceActivo } from '../valueObject/DeviceActivo'

/**
 * Domain service responsible for verifying that a Device Activo is unique within the system.
 */
export class DeviceActivoUniquenessChecker {
	/**
	 * Creates an instance of DeviceActivoUniquenessChecker.
	 * @param {DeviceRepository} repository - The repository used to check for existing cities.
	 */
	constructor(private readonly repository: DeviceRepository) {}

	/**
	 * Ensures that the provided Device Activo is unique.
	 * If an ID is provided in excludeId, it ignores that Device (useful for updates).
	 *
	 * @param {Primitives<DeviceActivo>} activo - The Device Activo to check.
	 * @param {Primitives<DeviceId>} [excludeId] - The ID of the Device to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the Activo is unique.
	 * @throws {DeviceActivoAlreadyExistError} If a Device with the same Activo already exists.
	 */
	async ensureUnique(activo: Primitives<DeviceActivo>, excludeId?: Primitives<DeviceId>): Promise<void> {
		if (activo === null || activo === undefined) {
			return
		}
		const existingLocation = await this.repository.searchByActivo(activo)
		if (existingLocation && existingLocation.id !== excludeId) {
			throw new DeviceAlreadyExistError('activo')
		}
	}
}
