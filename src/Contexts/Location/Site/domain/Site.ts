import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { CityId } from '../../City/domain/CityId'
import { type SiteDto, type SiteParams, type SitePrimitives } from './Site.dto'
import { SiteAddress } from './SiteAddress'
import { SiteId } from './SiteId'
import { SiteName } from './SiteName'

/**
 * Represents a Site domain entity.
 */
export class Site {
	/**
	 * Constructs a Site instance.
	 * @param {SiteId} id - The unique identifier of the site.
	 * @param {CityId} cityId - The city ID to which the site belongs.
	 * @param {SiteAddress} address - The address of the site.
	 * @param {SiteName} name - The name of the site.
	 */ constructor(
		private readonly id: SiteId,
		private readonly cityId: CityId,
		private address: SiteAddress,
		private name: SiteName
	) {}

	/**
	 * Creates a Site instance from primitive data.
	 * @param {SiteDto} primitives - The primitive data for the site.
	 * @returns {Site} A new Site instance.
	 */ static fromPrimitives(primitives: SiteDto): Site {
		return new Site(
			new SiteId(primitives.id),
			new CityId(primitives.cityId),
			new SiteAddress(primitives.address),
			new SiteName(primitives.name)
		)
	}

	/**
	 * Creates a new Site instance with a randomly generated ID.
	 * @param {SiteParams} params - The parameters for creating the site.
	 * @returns {Site} A new Site instance.
	 */ static create(params: SiteParams): Site {
		const id = SiteId.random().value
		return new Site(
			new SiteId(id),
			new CityId(params.cityId),
			new SiteAddress(params.address),
			new SiteName(params.name)
		)
	}

	/**
	 * Converts the Site instance to its primitive representation.
	 * @returns {SitePrimitives} The primitive representation of the site.
	 */ toPrimitive(): SitePrimitives {
		return {
			id: this.idValue,
			cityId: this.cityIdValue,
			address: this.addressValue,
			name: this.nameValue
		}
	}

	/**
	 * Updates the address of the site.
	 * @param {Primitives<SiteAddress>} address - The new address for the site.
	 */ updateAddress(address: Primitives<SiteAddress>): void {
		this.address = new SiteAddress(address)
	}

	/**
	 * Updates the name of the site.
	 * @param {Primitives<SiteName>} name - The new name for the site.
	 */ updateName(name: Primitives<SiteName>): void {
		this.name = new SiteName(name)
	}

	/**
	 * Gets the primitive value of the site's ID.
	 * @returns {Primitives<SiteId>} The ID value.
	 */ get idValue(): Primitives<SiteId> {
		return this.id.value
	}

	/**
	 * Gets the primitive value of the site's name.
	 * @returns {Primitives<SiteName>} The name value.
	 */ get nameValue(): Primitives<SiteName> {
		return this.name.value
	}

	/**
	 * Gets the primitive value of the site's address.
	 * @returns {Primitives<SiteAddress>} The address value.
	 */ get addressValue(): Primitives<SiteAddress> {
		return this.address.value
	}

	/**
	 * Gets the primitive value of the site's city ID.
	 * @returns {Primitives<CityId>} The city ID value.
	 */ get cityIdValue(): Primitives<CityId> {
		return this.cityId.value
	}
}
