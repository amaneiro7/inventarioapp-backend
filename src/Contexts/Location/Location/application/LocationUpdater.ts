import { Location } from '../domain/entity/Location'
import { LocationDoesNotExistError } from '../domain/errors/LocationDoesNotExistError'
import { LocationId } from '../domain/valueObject/LocationId'
import { LocationStatusExistenceChecker } from '../../LocationStatus/domain/service/LocationStatusExistanceChecker'
import { SiteExistenceChecker } from '../../Site/domain/service/SiteExistanceChecker'
import { TypeOfSiteExistenceChecker } from '../../TypeOfSite/domain/service/TypeOfSiteExistanceChecker'
import { LocationNameUniquenessChecker } from '../domain/service/LocationNameUniquenessChecker'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationRepository } from '../domain/repository/LocationRepository'
import { type TypeOfSiteRepository } from '../../TypeOfSite/domain/repository/TypeOfSiteRepository'
import { type SiteRepository } from '../../Site/domain/repository/SiteRepository'
import { type LocationParams } from '../domain/entity/Location.dto'
import { type LocationStatusRepository } from '../../LocationStatus/domain/repository/LocationStatusRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { ISPLinkExistenceChecker } from '../../ISPLinks/domain/service/ISPLinkExistanceChecker'
import { ISPLinkRepository } from '../../ISPLinks/domain/repository/ISPLinkRepository'
import { ISPLinkId } from '../../ISPLinks/domain/valueObject/ISPLinkId'

/**
 * Service to update an existing Location.
 */
export class LocationUpdater {
	private readonly locationRepository: LocationRepository
	private readonly locationNameUniquenessChecker: LocationNameUniquenessChecker
	private readonly locationStatusExistenceChecker: LocationStatusExistenceChecker
	private readonly siteExistenceChecker: SiteExistenceChecker
	private readonly typeOfSiteExistenceChecker: TypeOfSiteExistenceChecker
	private readonly ispLinkExistenceChecker: ISPLinkExistenceChecker
	private readonly eventBus: EventBus
	constructor({
		locationRepository,
		typeOfSiteRepository,
		siteRepository,
		locationStatusRepository,
		ispLinkRepository,
		eventBus
	}: {
		locationRepository: LocationRepository
		typeOfSiteRepository: TypeOfSiteRepository
		siteRepository: SiteRepository
		locationStatusRepository: LocationStatusRepository
		ispLinkRepository: ISPLinkRepository
		eventBus: EventBus
	}) {
		this.locationRepository = locationRepository
		this.locationNameUniquenessChecker = new LocationNameUniquenessChecker(locationRepository)
		this.locationStatusExistenceChecker = new LocationStatusExistenceChecker(locationStatusRepository)
		this.siteExistenceChecker = new SiteExistenceChecker(siteRepository)
		this.typeOfSiteExistenceChecker = new TypeOfSiteExistenceChecker(typeOfSiteRepository)
		this.ispLinkExistenceChecker = new ISPLinkExistenceChecker(ispLinkRepository)
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

		const { name, locationStatusId, siteId, typeOfSiteId, subnet, agencyClassification } = params
		const changes: Array<{ field: keyof LocationParams; oldValue: unknown; newValue: unknown }> = []
		const validations: Promise<void>[] = []

		if (name !== undefined && locationEntity.nameValue !== name.trim()) {
			validations.push(this.locationNameUniquenessChecker.ensureUnique(name, locationEntity.idValue))
			changes.push({
				field: 'name',
				oldValue: locationEntity.nameValue,
				newValue: name
			})
			locationEntity.updateLocationName(name)
		}

		if (locationStatusId !== undefined && locationEntity.operationalStatusValue !== locationStatusId) {
			validations.push(this.locationStatusExistenceChecker.ensureExist(locationStatusId))
			changes.push({
				field: 'locationStatusId',
				oldValue: locationEntity.operationalStatusValue,
				newValue: locationStatusId
			})
			locationEntity.updateLocationStatus(locationStatusId)
		}

		if (siteId !== undefined && locationEntity.siteValue !== siteId) {
			validations.push(this.siteExistenceChecker.ensureExist(siteId))
			changes.push({
				field: 'siteId',
				oldValue: locationEntity.siteValue,
				newValue: siteId
			})
			locationEntity.updateSite(siteId)
		}

		if (typeOfSiteId !== undefined && locationEntity.typeOfSiteValue !== typeOfSiteId) {
			validations.push(this.typeOfSiteExistenceChecker.ensureExist(typeOfSiteId))
			changes.push({
				field: 'typeOfSiteId',
				oldValue: locationEntity.typeOfSiteValue,
				newValue: typeOfSiteId
			})
			locationEntity.updateTypeOfSite(typeOfSiteId)
		}

		if (subnet !== undefined && locationEntity.subnetValue !== subnet) {
			changes.push({
				field: 'subnet',
				oldValue: locationEntity.subnetValue,
				newValue: subnet
			})
			locationEntity.updateSubnet(subnet)
		}

		if (agencyClassification !== undefined && locationEntity.agencyClassificationValue !== agencyClassification) {
			changes.push({
				field: 'agencyClassification',
				oldValue: locationEntity.agencyClassificationValue,
				newValue: agencyClassification
			})
			locationEntity.updateAgencyClassification(agencyClassification)
		}

		if (params.isplinks) {
			await this.ispLinkExistenceChecker.ensureExist(params.isplinks)
			changes.push({
				field: 'isplinks',
				oldValue: locationEntity.ispLinkValue,
				newValue: params.isplinks
			})
			const uniqueISPLinks = Array.from(new Set(params.isplinks))
			const newIdSet = new Set(uniqueISPLinks)
			const currentIdSet = new Set(locationEntity.ispLinkValue)

			// Añadir enlaces ISP nuevos
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					locationEntity.addISPLink(new ISPLinkId(id))
				}
			}

			// Eliminar enlaces ISP que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					locationEntity.removeISPLink(new ISPLinkId(id))
				}
			}
		}

		await Promise.all(validations)

		if (changes.length > 0) {
			locationEntity.registerUpdateEvent(changes)
			await this.locationRepository.save(locationEntity.toPrimitives())
			await this.eventBus.publish(locationEntity.pullDomainEvents())
		}
	}
}
