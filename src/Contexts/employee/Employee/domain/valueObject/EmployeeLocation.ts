import { LocationDoesNotExistError } from '../../../../Location/Location/domain/LocationDoesNotExistError'
import { LocationId } from '../../../../Location/Location/domain/LocationId'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type LocationRepository } from '../../../../Location/Location/domain/LocationRepository'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Employee } from '../entity/Employee'

interface EmployeeLocationProps {
	value: Primitives<LocationId> | null
}
export class EmployeeLocationId extends AcceptedNullValueObject<Primitives<LocationId>> {
	constructor(value: Primitives<LocationId> | null) {
		super(value)
		this.ensureIsValidLocation({ value })
	}

	private ensureIsValidLocation({ value }: EmployeeLocationProps): void {
		if (value !== null && !(new LocationId(value) instanceof LocationId)) {
			throw new InvalidArgumentError(`<${value}> no es un ID de location válido.`)
		}
	}
	static async updateLocationField({
		repository,
		locationId,
		entity
	}: {
		repository: LocationRepository
		locationId?: Primitives<LocationId> | null
		entity: Employee
	}): Promise<void> {
		if (locationId === undefined || entity.locationValue === locationId) {
			return
		}
		await this.ensureLocationExists({ repository, locationId })
		entity.updateLocation(locationId)
	}

	static async ensureLocationExists({
		repository,
		locationId
	}: {
		repository: LocationRepository
		locationId: Primitives<LocationId> | null
	}): Promise<void> {
		if (!locationId) return
		if (locationId) {
			const exists = await repository.searchById(new LocationId(locationId).value)
			if (!exists) {
				throw new LocationDoesNotExistError('La ubicación especificada no existe.')
			}
		}
	}
}
