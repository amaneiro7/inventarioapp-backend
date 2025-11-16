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

/**
 * @description Represents the location ID of an employee.
 */
export class EmployeeLocationId extends AcceptedNullValueObject<Primitives<LocationId>> {
	constructor(value: Primitives<LocationId> | null) {
		super(value)
		this.ensureIsValidLocation({ value })
	}

	private ensureIsValidLocation({ value }: EmployeeLocationProps): void {
		if (value !== null && !(new LocationId(value) instanceof LocationId)) {
			throw new InvalidArgumentError(`'${value}' no es un ID de ubicación válido.`) // Improved error message
		}
	}

	/**
	 * @description Handles the logic for updating the location field of an employee.
	 * @param {{ repository: LocationRepository; locationId?: Primitives<LocationId> | null; entity: Employee }} params The parameters for updating.
	 */
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

	/**
	 * @description Ensures that the specified location exists in the repository.
	 * @param {{ repository: LocationRepository; locationId: Primitives<LocationId> | null }} params The parameters for the check.
	 * @throws {LocationDoesNotExistError} If the location does not exist.
	 */
	static async ensureLocationExists({
		repository,
		locationId
	}: {
		repository: LocationRepository
		locationId: Primitives<LocationId> | null
	}): Promise<void> {
		if (!locationId) return
		const exists = await repository.findById(new LocationId(locationId).value)
		if (!exists) {
			throw new LocationDoesNotExistError('La ubicación especificada no existe.')
		}
	}
}
