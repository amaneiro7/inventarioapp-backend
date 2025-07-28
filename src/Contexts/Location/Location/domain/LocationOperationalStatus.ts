import { Location } from './Location'
import { LocationStatusId } from '../../LocationStatus/domain/LocationStatusId'
import { LocationStatusIdDoesNotExistError } from '../../LocationStatus/domain/LocationStatusDoesNotExistError'
import { type LocationStatusRepository } from '../../LocationStatus/domain/LocationStatusRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * Represents the operational status ID of a Location.
 * Extends LocationStatusId and provides static methods for updating and ensuring status existence.
 */
export class LocationOperationalStatus extends LocationStatusId {
	/**
	 * Updates the operational status field of a Location entity.
	 * @param {{ repository: LocationStatusRepository; operationalStatus?: Primitives<LocationStatusId>; entity: Location }} params - Parameters for updating the operational status.
	 * @param {LocationStatusRepository} params.repository - The location status repository for existence checks.
	 * @param {Primitives<LocationStatusId>} [params.operationalStatus] - The new operational status ID for the location (optional).
	 * @param {Location} params.entity - The Location entity to update.
	 * @returns {Promise<void>} A promise that resolves when the status is updated or no action is needed.
	 * @throws {LocationStatusIdDoesNotExistError} If the new operational status ID does not exist.
	 */
	static async updateOperationalStatusField({
		repository,
		operationalStatus,
		entity
	}: {
		repository: LocationStatusRepository
		operationalStatus?: Primitives<LocationStatusId>
		entity: Location
	}): Promise<void> {
		if (operationalStatus === undefined) {
			return
		}

		if (entity.operationalStatusValue === operationalStatus) {
			return
		}

		await LocationOperationalStatus.ensureOperationalStatusExit({ repository, operationalStatus })
		// Actualiza el campo status de la entidad {@link Device} con el nuevo status
		entity.updateLocationStatus(operationalStatus)
	}

	/**
	 * Ensures that an operational status exists in the repository.
	 * @param {{ repository: LocationStatusRepository; operationalStatus: Primitives<LocationStatusId> }} params - Parameters for the existence check.
	 * @param {LocationStatusRepository} params.repository - The location status repository to perform the search.
	 * @param {Primitives<LocationStatusId>} params.operationalStatus - The operational status ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the status exists, or rejects with LocationStatusIdDoesNotExistError.
	 * @throws {LocationStatusIdDoesNotExistError} If the operational status does not exist.
	 */
	static async ensureOperationalStatusExit({
		repository,
		operationalStatus
	}: {
		repository: LocationStatusRepository
		operationalStatus: Primitives<LocationStatusId>
	}): Promise<void> {
		const isOperationalstatus = await repository.searchById(new LocationStatusId(operationalStatus).value)

		if (isOperationalstatus === null) {
			throw new LocationStatusIdDoesNotExistError(operationalStatus)
		}
	}
}
