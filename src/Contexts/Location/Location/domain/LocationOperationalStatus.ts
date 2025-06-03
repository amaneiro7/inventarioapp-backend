import { Location } from './Location'
import { LocationStatusId } from '../../LocationStatus/domain/LocationStatusId'
import { LocationStatusIdDoesNotExistError } from '../../LocationStatus/domain/LocationStatusDoesNotExistError'
import { type LocationStatusRepository } from '../../LocationStatus/domain/LocationStatusRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

export class LocationOperationalStatus extends LocationStatusId {
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
