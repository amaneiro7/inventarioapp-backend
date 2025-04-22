import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { LocationId } from '../../../Location/Location/domain/LocationId'
import { DeviceStatus } from './DeviceStatus'
import { TypeOfSiteId } from '../../../Location/TypeOfSite/domain/TypeOfSiteId'
import { LocationDoesNotExistError } from '../../../Location/Location/domain/LocationDoesNotExistError'
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError'
import { type Device } from './Device'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StatusOptions } from '../../Status/domain/StatusOptions'

export class DeviceLocation extends AcceptedNullValueObject<Primitives<LocationId>> {
	constructor(value: Primitives<LocationId> | null) {
		super(value)
		this.ensureIsValidLocationId(this.value)
	}

	private ensureIsValidLocationId(id: Primitives<LocationId> | null): void {
		if (!this.isValid(id)) {
			throw new InvalidArgumentError('Location is required')
		}
	}

	private isValid(id: Primitives<LocationId> | null): boolean {
		if (id === null) return true
		const employeeId = new LocationId(id)
		if (employeeId instanceof LocationId) {
			return true
		}

		return false
	}
	static ensureDeviceBelongsToAppropiateLocationDependsOfStatus(
		typeOfSite: Primitives<TypeOfSiteId>,
		status: Primitives<DeviceStatus>
	): void {
		if (
			(status === StatusOptions.INUSE ||
				status === StatusOptions.PRESTAMO ||
				status === StatusOptions.CONTINGENCIA ||
				status === StatusOptions.GUARDIA ||
				status === StatusOptions.DISPONIBLE ||
				status === StatusOptions.JORNADA) &&
			typeOfSite === TypeOfSiteId.TypeOfSiteOptions.ALMACEN
		) {
			throw new InvalidArgumentError('Si el dispositivo esta en uso no puede estar en el almacén')
		}
		if (
			(status === StatusOptions.INALMACEN, status === StatusOptions.PORDESINCORPORAR) &&
			typeOfSite !== TypeOfSiteId.TypeOfSiteOptions.ALMACEN
		) {
			throw new InvalidArgumentError('The device is not in use can only be located in the warehouse')
		}
		if (status === StatusOptions.DESINCORPORADO && typeOfSite !== null) {
			throw new InvalidArgumentError('The device cannot have a location if status is desincorporated')
		}
	}

	static async updateLocationField({
		repository,
		location,
		entity
	}: {
		repository: LocationRepository
		location?: Primitives<DeviceLocation>
		entity: Device
	}): Promise<void> {
		// Si no se ha pasado un nuevo location no realiza ninguna acción
		if (location === undefined) {
			return
		}
		// Verifica que si el location actual y el nuevo location son iguales no realice una busqueda en el repositorio
		if (entity.locationValue === location) {
			return
		}
		// Verifica que el location no exista en la base de datos, si existe lanza un error {@link DeviceAlreadyExistError} con el location pasado
		const status = entity.statusValue
		await DeviceLocation.ensureLocationExit({
			repository,
			location,
			status
		})
		// Actualiza el campo location de la entidad {@link Device} con el nuevo location
		entity.updateLocation(location)
	}

	static async ensureLocationExit({
		repository,
		location,
		status
	}: {
		repository: LocationRepository
		location: Primitives<DeviceLocation>
		status: Primitives<DeviceStatus>
	}): Promise<void> {
		// If the location is null, it does not exist, so we don't need to do any verification
		if (!location) {
			return
		}
		// Searches for a device with the given location in the database
		const deviceWithLocation = await repository.searchById(new LocationId(location).toString())
		// If a device with the given location exists, it means that it already exists in the database,
		// so we need to throw a {@link DeviceAlreadyExistError} with the given location
		if (deviceWithLocation === null) {
			throw new LocationDoesNotExistError(location)
		}
		const typeOfSite = deviceWithLocation.typeOfSiteId
		this.ensureDeviceBelongsToAppropiateLocationDependsOfStatus(typeOfSite, status)
	}
}
