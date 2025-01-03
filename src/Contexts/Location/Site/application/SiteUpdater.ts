import { Site, SitePrimitives } from "../domain/Site";
import { SiteAddress } from "../domain/SiteAddress";
import { SiteDoesNotExistError } from "../domain/SiteDoesNotExistError";
import { SiteId } from "../domain/SiteId";
import { SiteName } from "../domain/SiteName";
import { type SiteRepository } from "../domain/SiteRepository";

export class SiteUpdater {
    constructor(private readonly siteRepository: SiteRepository) { }

    async run({ id, params }: { id: string, params: Partial<Omit<SitePrimitives, 'id'>> }): Promise<void> {
        const siteId = new SiteId(id).value
        const site = await this.siteRepository.searchById(siteId)

        if (!site) {
            throw new SiteDoesNotExistError(id);
        }

        const siteEntity = Site.fromPrimitives(site)

        await SiteName.updateNameField({ name: params.name, entity: siteEntity })
        await SiteAddress.updateAddressField({ address: params.address, entity: siteEntity })

        await this.siteRepository.save(siteEntity.toPrimitive())
    }
}