import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { LocationId } from '../../../Location/Location/domain/LocationId'
import { DeviceStatus } from './DeviceStatus'
import { TypeOfSiteId } from '../../../Location/TypeOfSite/domain/valueObject/TypeOfSiteId'
import { LocationDoesNotExistError } from '../../../Location/Location/domain/LocationDoesNotExistError'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Device } from './Device'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StatusOptions } from '../../Status/domain/StatusOptions'
import { TypeOfSiteList } from '../../../Location/TypeOfSite/domain/TypeOfSiteList'

/**
 * @class DeviceLocation
 * @extends AcceptedNullValueObject
 * @description Represents the Value Object for a Device's location.
 * It encapsulates validation rules based on the device's status.
 */
export class DeviceLocation extends AcceptedNullValueObject<Primitives<LocationId>> {
	constructor(value: Primitives<LocationId> | null) {
		super(value)
		this.ensureIsValidLocationId(this.value)
	}

	private ensureIsValidLocationId(id: Primitives<LocationId> | null): void {
		if (id !== null) {
			new LocationId(id) // This will throw an error if the UUID is invalid
		}
	}

	/**
	 * @static
	 * @method ensureDeviceBelongsToAppropiateLocationDependsOfStatus
	 * @description Enforces business rules regarding location assignment based on device status.
	 * @param {Primitives<TypeOfSiteId>} typeOfSite The type of site for the location.
	 * @param {Primitives<DeviceStatus>} status The status of the device.
	 * @throws {InvalidArgumentError} If a business rule is violated.
	 */
	static ensureDeviceBelongsToAppropiateLocationDependsOfStatus(
		typeOfSite: Primitives<TypeOfSiteId>,
		status: Primitives<DeviceStatus>
	): void {
		const isInUse =
			status === StatusOptions.INUSE ||
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.GUARDIA ||
			status === StatusOptions.DISPONIBLE ||
			status === StatusOptions.JORNADA
		const isStorage = status === StatusOptions.INALMACEN || status === StatusOptions.PORDESINCORPORAR

		if (isInUse && typeOfSite === TypeOfSiteList.ALMACEN) {
			throw new InvalidArgumentError('Un dispositivo en uso no puede estar ubicado en un almacén.')
		}
		if (isStorage && typeOfSite !== TypeOfSiteList.ALMACEN) {
			throw new InvalidArgumentError('Un dispositivo en almacén solo puede estar ubicado en un almacén.')
		}
		if (status === StatusOptions.DESINCORPORADO && typeOfSite !== null) {
			throw new InvalidArgumentError('Un dispositivo desincorporado no puede tener una ubicación asignada.')
		}
	}

	/**
	 * @static
	 * @method updateLocationField
	 * @description Handles the logic for updating a device's location.
	 * @param {{ repository: LocationRepository; location?: Primitives<DeviceLocation>; entity: Device }} params The parameters for updating.
	 * @returns {Promise<void>}
	 */
	static async updateLocationField({
		repository,
		location,
		entity
	}: {
		repository: LocationRepository
		location?: Primitives<DeviceLocation>
		entity: Device
	}): Promise<void> {
		if (location === undefined || entity.locationValue === location) {
			return
		}
		await DeviceLocation.ensureLocationExit({ repository, location, status: entity.statusValue })
		entity.updateLocation(location)
	}

	/**
	 * @static
	 * @method ensureLocationExit
	 * @description Checks if a location exists and is valid for the given device status.
	 * @param {{ repository: LocationRepository; location: Primitives<DeviceLocation>; status: Primitives<DeviceStatus> }} params The parameters for the check.
	 * @throws {LocationDoesNotExistError} If the location does not exist.
	 */
	static async ensureLocationExit({
		repository,
		location,
		status
	}: {
		repository: LocationRepository
		location: Primitives<DeviceLocation>
		status: Primitives<DeviceStatus>
	}): Promise<void> {
		if (!location) {
			return
		}
		const existingLocation = await repository.findById(new LocationId(location).value)
		if (!existingLocation) {
			throw new LocationDoesNotExistError(location)
		}
		this.ensureDeviceBelongsToAppropiateLocationDependsOfStatus(existingLocation.typeOfSiteId, status)
	}
}
