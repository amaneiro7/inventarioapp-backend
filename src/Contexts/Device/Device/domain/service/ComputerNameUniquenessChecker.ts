import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceRepository } from '../repository/DeviceRepository'
import { type DeviceId } from '../valueObject/DeviceId'
import { type ComputerName } from '../valueObject/ComputerName'

/**
 * Domain service responsible for verifying that a DeviceComputer computerName is unique within the system.
 */
export class ComputerNameUniquenessChecker {
	/**
	 * Creates an instance of ComputerNameUniquenessChecker.
	 * @param {DeviceRepository} repository - The repository used to check for existing cities.
	 */
	constructor(private readonly repository: DeviceRepository) {}

	/**
	 * Ensures that the provided DeviceComputer computerName is unique.
	 * If an ID is provided in excludeId, it ignores that Device (useful for updates).
	 *
	 * @param {Primitives<ComputerName>} computerName - The Device computerName to check.
	 * @param {Primitives<DeviceId>} [excludeId] - The ID of the Device to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the computerName is unique.
	 * @throws {InvalidArgumentError} If a Device with the same computerName already exists.
	 */
	async ensureUnique(computerName: Primitives<ComputerName>, excludeId?: Primitives<DeviceId>): Promise<void> {
		if (computerName === null || computerName === undefined) {
			return
		}
		const existingLocation = await this.repository.searchByComputerName(computerName)
		if (existingLocation && existingLocation.id !== excludeId) {
			throw new InvalidArgumentError('El nombre del equipo ya existe.')
		}
	}
}
