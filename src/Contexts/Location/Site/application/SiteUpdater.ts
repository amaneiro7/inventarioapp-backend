import { Site } from '../domain/Site'
import { SiteId } from '../domain/SiteId'
import { SiteName } from '../domain/SiteName'
import { SiteAddress } from '../domain/SiteAddress'
import { SiteDoesNotExistError } from '../domain/SiteDoesNotExistError'
import { type SitePrimitives } from '../domain/Site.dto'
import { type SiteRepository } from '../domain/SiteRepository'

/**
 * Service to update an existing Site.
 */
export class SiteUpdater {
	private readonly siteRepository: SiteRepository
	constructor({ siteRepository }: { siteRepository: SiteRepository }) {
		this.siteRepository = siteRepository
	}

	/**
	 * Runs the service to update a site.
	 * It validates the existence of the site and updates its name and address if provided.
	 * @param {{ id: string; params: Partial<Omit<SitePrimitives, 'id'>> }} params - The parameters for updating the site (id, and partial site data).
	 * @returns {Promise<void>} A promise that resolves when the site is successfully updated.
	 * @throws {SiteDoesNotExistError} If the site with the given ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<Omit<SitePrimitives, 'id'>> }): Promise<void> {
		const siteId = new SiteId(id).value
		const site = await this.siteRepository.findById(siteId)

		if (!site) {
			throw new SiteDoesNotExistError(id)
		}

		const siteEntity = Site.fromPrimitives(site)

		await SiteName.updateNameField({
			name: params.name,
			entity: siteEntity
		})
		await SiteAddress.updateAddressField({
			address: params.address,
			entity: siteEntity
		})

		await this.siteRepository.save(siteEntity.toPrimitive())
	}
}
