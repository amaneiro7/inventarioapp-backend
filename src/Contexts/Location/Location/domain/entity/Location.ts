import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { LocationId } from '../valueObject/LocationId'
import { TypeOfSiteId } from '../../../TypeOfSite/domain/valueObject/TypeOfSiteId'
import { SiteId } from '../../../Site/domain/valueObject/SiteId'
import { LocationName } from '../valueObject/LocationName'
import { LocationSubnet } from '../valueObject/LocationSubnet'
import { LocationStatusId } from '../../../LocationStatus/domain/valueObject/LocationStatusId'
import { LocationCreatedDomainEvent } from '../event/LocationCreatedDomainEvent'
import { LocationUpdatedDomainEvent } from '../event/LocationUpdatedDomainEvent'
import { LocationRenamedDomainEvent } from '../event/LocationRenamedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationDto, type LocationParams, type LocationPrimitives } from '../entity/Location.dto'
import { LocationSubnetChangedDomainEvent } from '../event/LocationSubnetChangedDomainEvent'
import { LocationStatusChangedDomainEvent } from '../event/LocationStatusChangedDomainEvent'

/**
 * Represents a Location domain entity.
 */
export class Location extends AggregateRoot {
	/**
	 * Constructs a Location instance.
	 * @param {LocationId} id - The unique identifier of the location.
	 * @param {TypeOfSiteId} typeOfSiteId - The type of site ID for the location.
	 * @param {SiteId} siteId - The site ID to which the location belongs.
	 * @param {LocationName} name - The name of the location.
	 * @param {LocationSubnet} subnet - The subnet of the location.
	 * @param {LocationStatusId} locationStatusId - The operational status ID of the location.
	 */
	constructor(
		private readonly id: LocationId,
		private typeOfSiteId: TypeOfSiteId,
		private siteId: SiteId,
		private name: LocationName,
		private subnet: LocationSubnet,
		private locationStatusId: LocationStatusId
	) {
		super()
	}

	/**
	 * Creates a new Location instance with a randomly generated ID.
	 * @param {LocationParams} params - The parameters for creating the location.
	 * @returns {Location} A new Location instance.
	 */
	static create(params: LocationParams): Location {
		const id = LocationId.random()
		const typeOfSiteId = new TypeOfSiteId(params.typeOfSiteId)
		const siteId = new SiteId(params.siteId)
		const locationName = new LocationName(params.name)
		const locationSubnet = new LocationSubnet(params.subnet)
		const locationStatusId = new LocationStatusId(params.locationStatusId)
		const location = new Location(id, typeOfSiteId, siteId, locationName, locationSubnet, locationStatusId)
		location.record(
			new LocationCreatedDomainEvent({
				aggregateId: id.value,
				name: locationName.value,
				stateId: locationStatusId.value
			})
		)
		return location
	}

	/**
	 * Creates a Location instance from primitive data.
	 * @param {LocationDto} primitives - The primitive data for the location.
	 * @returns {Location} A new Location instance.
	 */
	static fromPrimitives(primitives: LocationDto): Location {
		return new Location(
			new LocationId(primitives.id),
			new TypeOfSiteId(primitives.typeOfSiteId),
			new SiteId(primitives.siteId),
			new LocationName(primitives.name),
			new LocationSubnet(primitives.subnet),
			new LocationStatusId(primitives.locationStatusId)
		)
	}

	/**
	 * Converts the Location instance to its primitive representation.
	 * @returns {LocationPrimitives} The primitive representation of the location.
	 */
	toPrimitives(): LocationPrimitives {
		return {
			id: this.idValue,
			typeOfSiteId: this.typeOfSiteValue,
			siteId: this.siteValue,
			name: this.nameValue,
			subnet: this.subnetValue,
			locationStatusId: this.operationalStatusValue
		}
	}

	/**
	 * Gets the primitive value of the location's ID.
	 * @returns {Primitives<LocationId>} The ID value.
	 */
	get idValue(): Primitives<LocationId> {
		return this.id.value
	}

	/**
	 * Gets the primitive value of the location's type of site ID.
	 * @returns {Primitives<TypeOfSiteId>} The type of site ID value.
	 */
	get typeOfSiteValue(): Primitives<TypeOfSiteId> {
		return this.typeOfSiteId.value
	}

	/**
	 * Gets the primitive value of the location's site ID.
	 * @returns {Primitives<SiteId>} The site ID value.
	 */
	get siteValue(): Primitives<SiteId> {
		return this.siteId.value
	}

	/**
	 * Gets the primitive value of the location's name.
	 * @returns {Primitives<LocationName>} The name value.
	 */
	get nameValue(): Primitives<LocationName> {
		return this.name.value
	}

	/**
	 * Gets the primitive value of the location's subnet.
	 * @returns {Primitives<LocationSubnet>} The subnet value.
	 */
	get subnetValue(): Primitives<LocationSubnet> {
		return this.subnet.value
	}

	/**
	 * Gets the primitive value of the location's operational status ID.
	 * @returns {Primitives<LocationStatusId>} The operational status ID value.
	 */
	get operationalStatusValue(): Primitives<LocationStatusId> {
		return this.locationStatusId.value
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new LocationUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	/**
	 * Updates the subnet of the location.
	 * @param {Primitives<LocationSubnet>} subnet - The new subnet for the location.
	 */
	updateSubnet(subnet: Primitives<LocationSubnet>): void {
		const oldSubnet = this.subnet.value
		this.record(
			new LocationSubnetChangedDomainEvent({
				aggregateId: this.idValue,
				oldSubnet,
				newSubnet: subnet
			})
		)
		this.subnet = new LocationSubnet(subnet)
	}

	/**
	 * Updates the type of site for the location.
	 * @param {Primitives<TypeOfSiteId>} typeOfSite - The new type of site for the location.
	 */
	updateTypeOfSite(typeOfSite: Primitives<TypeOfSiteId>): void {
		this.typeOfSiteId = new TypeOfSiteId(typeOfSite)
	}

	/**
	 * Updates the site of the location.
	 * @param {Primitives<SiteId>} site - The new site for the location.
	 */
	updateSite(site: Primitives<SiteId>): void {
		this.siteId = new SiteId(site)
	}

	/**
	 * Updates the name of the location.
	 * @param {Primitives<LocationName>} name - The new name for the location.
	 */
	updateLocationName(name: Primitives<LocationName>): void {
		const oldName = this.name.value
		this.name = new LocationName(name)
		this.record(
			new LocationRenamedDomainEvent({
				aggregateId: this.idValue,
				oldName,
				newName: this.name.value
			})
		)
	}

	/**
	 * Updates the operational status of the location.
	 * @param {Primitives<LocationStatusId>} status - The new operational status for the location.
	 */
	updateLocationStatus(status: Primitives<LocationStatusId>): void {
		const oldStatus = this.locationStatusId.value
		this.record(
			new LocationStatusChangedDomainEvent({
				aggregateId: this.idValue,
				oldStatusId: oldStatus,
				newStatusId: status
			})
		)
		this.locationStatusId = new LocationStatusId(status)
	}
}
