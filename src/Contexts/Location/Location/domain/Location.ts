import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { LocationId } from './LocationId'
import { LocationTypeOfSite } from './LocationTypeOfSite'
import { LocationSite } from './LocationSite'
import { LocationName } from './LocationName'
import { LocationSubnet } from './LocationSubnet'
import { LocationOperationalStatus } from './LocationOperationalStatus'
import { type LocationDto, type LocationParams, type LocationPrimitives } from './Location.dto'

export class Location {
	constructor(
		private readonly id: LocationId,
		private typeOfSiteId: LocationTypeOfSite,
		private siteId: LocationSite,
		private name: LocationName,
		private subnet: LocationSubnet,
		private locationStatusId: LocationOperationalStatus
	) {}

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

	get idValue(): Primitives<LocationId> {
		return this.id.value
	}

	get typeOfSiteValue(): Primitives<LocationTypeOfSite> {
		return this.typeOfSiteId.value
	}

	get siteValue(): Primitives<LocationSite> {
		return this.siteId.value
	}

	get nameValue(): Primitives<LocationName> {
		return this.name.value
	}

	get subnetValue(): Primitives<LocationSubnet> {
		return this.subnet.value
	}

	get operationalStatusValue(): Primitives<LocationOperationalStatus> {
		return this.locationStatusId.value
	}

	updateSubnet(subnet: Primitives<LocationSubnet>): void {
		this.subnet = new LocationSubnet(subnet)
	}
	updateTypeOfSite(typeOfSite: Primitives<LocationTypeOfSite>): void {
		this.typeOfSiteId = new LocationTypeOfSite(typeOfSite)
	}
	updateSite(site: Primitives<LocationSite>): void {
		this.siteId = new LocationSite(site)
	}
	updateLocationName(name: Primitives<LocationName>): void {
		this.name = new LocationName(name)
	}

	updateLocationStatus(status: Primitives<LocationOperationalStatus>): void {
		this.locationStatusId = new LocationOperationalStatus(status)
	}
}
