import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { LocationId } from './LocationId'
import { LocationTypeOfSite } from './LocationTypeOfSite'
import { LocationSite } from './LocationSite'
import { LocationName } from './LocationName'
import { LocationSubnet } from './LocationSubnet'
import { LocationOperationalStatus } from './LocationOperationalStatus'
import { type LocationDto, type LocationParams, type LocationPrimitives } from './Location.dto'

/**
 * Represents a Location domain entity.
 */
export class Location {
	/**
	 * Constructs a Location instance.
	 * @param {LocationId} id - The unique identifier of the location.
	 * @param {LocationTypeOfSite} typeOfSiteId - The type of site ID for the location.
	 * @param {LocationSite} siteId - The site ID to which the location belongs.
	 * @param {LocationName} name - The name of the location.
	 * @param {LocationSubnet} subnet - The subnet of the location.
	 * @param {LocationOperationalStatus} locationStatusId - The operational status ID of the location.
	 */
	constructor(
		private readonly id: LocationId,
		private typeOfSiteId: LocationTypeOfSite,
		private siteId: LocationSite,
		private name: LocationName,
		private subnet: LocationSubnet,
		private locationStatusId: LocationOperationalStatus
	) {}

	/**
	 * Creates a new Location instance with a randomly generated ID.
	 * @param {LocationParams} params - The parameters for creating the location.
	 * @returns {Location} A new Location instance.
	 */
	static create(params: LocationParams): Location {
		const id = LocationId.random().value
		return new Location(
			new LocationId(id),
			new LocationTypeOfSite(params.typeOfSiteId),
			new LocationSite(params.siteId),
			new LocationName(params.name),
			new LocationSubnet(params.subnet),
			new LocationOperationalStatus(params.locationStatusId)
		)
	}

	/**
	 * Creates a Location instance from primitive data.
	 * @param {LocationDto} primitives - The primitive data for the location.
	 * @returns {Location} A new Location instance.
	 */
	static fromPrimitives(primitives: LocationDto): Location {
		return new Location(
			new LocationId(primitives.id),
			new LocationTypeOfSite(primitives.typeOfSiteId),
			new LocationSite(primitives.siteId),
			new LocationName(primitives.name),
			new LocationSubnet(primitives.subnet),
			new LocationOperationalStatus(primitives.locationStatusId)
		)
	}

	/**
	 * Converts the Location instance to its primitive representation.
	 * @returns {LocationPrimitives} The primitive representation of the location.
	 */
	toPrimitive(): LocationPrimitives {
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
	 * @returns {Primitives<LocationTypeOfSite>} The type of site ID value.
	 */
	get typeOfSiteValue(): Primitives<LocationTypeOfSite> {
		return this.typeOfSiteId.value
	}

	/**
	 * Gets the primitive value of the location's site ID.
	 * @returns {Primitives<LocationSite>} The site ID value.
	 */
	get siteValue(): Primitives<LocationSite> {
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
	 * @returns {Primitives<LocationOperationalStatus>} The operational status ID value.
	 */
	get operationalStatusValue(): Primitives<LocationOperationalStatus> {
		return this.locationStatusId.value
	}

	/**
	 * Updates the subnet of the location.
	 * @param {Primitives<LocationSubnet>} subnet - The new subnet for the location.
	 */
	updateSubnet(subnet: Primitives<LocationSubnet>): void {
		this.subnet = new LocationSubnet(subnet)
	}

	/**
	 * Updates the type of site for the location.
	 * @param {Primitives<LocationTypeOfSite>} typeOfSite - The new type of site for the location.
	 */
	updateTypeOfSite(typeOfSite: Primitives<LocationTypeOfSite>): void {
		this.typeOfSiteId = new LocationTypeOfSite(typeOfSite)
	}

	/**
	 * Updates the site of the location.
	 * @param {Primitives<LocationSite>} site - The new site for the location.
	 */
	updateSite(site: Primitives<LocationSite>): void {
		this.siteId = new LocationSite(site)
	}

	/**
	 * Updates the name of the location.
	 * @param {Primitives<LocationName>} name - The new name for the location.
	 */
	updateLocationName(name: Primitives<LocationName>): void {
		this.name = new LocationName(name)
	}

	/**
	 * Updates the operational status of the location.
	 * @param {Primitives<LocationOperationalStatus>} status - The new operational status for the location.
	 */
	updateLocationStatus(status: Primitives<LocationOperationalStatus>): void {
		this.locationStatusId = new LocationOperationalStatus(status)
	}
}
