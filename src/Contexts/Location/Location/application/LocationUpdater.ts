import { Location } from '../domain/entity/Location'
import { LocationDoesNotExistError } from '../domain/errors/LocationDoesNotExistError'
import { LocationId } from '../domain/valueObject/LocationId'
import { TypeOfSiteExistenceChecker } from '../domain/service/TypeOfSiteExistanceChecker'
import { SiteExistenceChecker } from '../domain/service/SiteExistanceChecker'
import { LocationStatusExistenceChecker } from '../domain/service/LocationStatusExistanceChecker'
import { LocationNameUniquenessChecker } from '../domain/service/LocationNameUniquenessChecker'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationRepository } from '../domain/repository/LocationRepository'
import { type TypeOfSiteRepository } from '../../TypeOfSite/domain/repository/TypeOfSiteRepository'
import { type SiteRepository } from '../../Site/domain/repository/SiteRepository'
import { type LocationParams } from '../domain/entity/Location.dto'
import { type LocationStatusRepository } from '../../LocationStatus/domain/repository/LocationStatusRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * Service to update an existing Location.
 */
export class LocationUpdater {
	private readonly locationRepository: LocationRepository
	private readonly locationNameUniquenessChecker: LocationNameUniquenessChecker
	private readonly locationStatusExistenceChecker: LocationStatusExistenceChecker
	private readonly siteExistenceChecker: SiteExistenceChecker
	private readonly typeOfSiteExistenceChecker: TypeOfSiteExistenceChecker
	private readonly eventBus: EventBus
	constructor({
		locationRepository,
		typeOfSiteRepository,
		siteRepository,
		locationStatusRepository,
		eventBus
	}: {
		locationRepository: LocationRepository
		typeOfSiteRepository: TypeOfSiteRepository
		siteRepository: SiteRepository
		locationStatusRepository: LocationStatusRepository
		eventBus: EventBus
	}) {
		this.locationRepository = locationRepository
		this.locationNameUniquenessChecker = new LocationNameUniquenessChecker(locationRepository)
		this.locationStatusExistenceChecker = new LocationStatusExistenceChecker(locationStatusRepository)
		this.siteExistenceChecker = new SiteExistenceChecker(siteRepository)
		this.typeOfSiteExistenceChecker = new TypeOfSiteExistenceChecker(typeOfSiteRepository)
		this.eventBus = eventBus
	}

	/**
	 * Runs the service to update a location.
	 * It validates the existence of the location and updates its fields if provided.
	 * @param {{ id: Primitives<LocationId>; params: Partial<LocationParams> }} params - The parameters for updating the location (id, and partial location data).
	 * @returns {Promise<void>} A promise that resolves when the location is successfully updated.
	 * @throws {LocationDoesNotExistError} If the location with the given ID does not exist.
	 */
	async run({ id, params }: { id: Primitives<LocationId>; params: Partial<LocationParams> }): Promise<void> {
		const locationId = new LocationId(id)
		const location = await this.locationRepository.findById(locationId.value)
		if (location === null) {
			throw new LocationDoesNotExistError(id)
		}

		const locationEntity = Location.fromPrimitives(location)

		const { name, locationStatusId, siteId, typeOfSiteId } = params
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (name && locationEntity.nameValue !== name.trim()) {
			await this.locationNameUniquenessChecker.ensureUnique(name, locationEntity.idValue)
			changes.push({
				field: 'name',
				oldValue: locationEntity.nameValue,
				newValue: name
			})
			locationEntity.updateLocationName(name)
		}

		if (locationStatusId && locationEntity.operationalStatusValue !== locationStatusId) {
			await this.locationStatusExistenceChecker.ensureExist(locationStatusId)
			changes.push({
				field: 'locationStatusId',
				oldValue: locationEntity.operationalStatusValue,
				newValue: locationStatusId
			})
			locationEntity.updateLocationStatus(locationStatusId)
		}

		if (siteId && locationEntity.siteValue !== siteId) {
			await this.siteExistenceChecker.ensureExist(siteId)
			changes.push({
				field: 'siteId',
				oldValue: locationEntity.siteValue,
				newValue: siteId
			})
			locationEntity.updateSite(siteId)
		}

		if (typeOfSiteId && locationEntity.typeOfSiteValue !== typeOfSiteId) {
			await this.typeOfSiteExistenceChecker.ensureExist(typeOfSiteId)
			changes.push({
				field: 'typeOfSiteId',
				oldValue: locationEntity.typeOfSiteValue,
				newValue: typeOfSiteId
			})
			locationEntity.updateTypeOfSite(typeOfSiteId)
		}

		if (changes.length > 0) {
			locationEntity.registerUpdateEvent(changes)
			await this.locationRepository.save(locationEntity.toPrimitives())
			await this.eventBus.publish(locationEntity.pullDomainEvents())
		}
	}
}
