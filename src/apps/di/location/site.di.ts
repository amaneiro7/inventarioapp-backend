import { asClass, type AwilixContainer } from "awilix"
import { SequelizeSiteRepository } from "../../../Contexts/Location/Site/infrastructure/sequelize/SequelizeSiteRepository"
import { SiteFinderAll } from "../../../Contexts/Location/Site/application/SiteFinderAll"
import { SiteGetAllController } from "../../controllers/location/site.get-all.controller"
import { SiteUpdater } from "../../../Contexts/Location/Site/application/SiteUpdater"
import { SiteCreator } from "../../../Contexts/Location/Site/application/SiteCreator"

import { SitePostController } from "../../controllers/location/site.post.controller"
import { SitePatchController } from "../../controllers/location/site.patch.controller"
import { SiteGetController } from "../../controllers/location/site.get.controller"

export enum SiteDependencies {
    Repository = 'siteRepository',

    Finder = 'siteFinder',
    FinderAll = 'siteFinderAll',
    Creator = 'siteCreator',
    Updater = 'siteUpdater',

    GetAllController = 'siteGetAllController',
    GetController = 'siteGetController',
    PostController = 'sitePostController',
    PatchController = 'sitePatchController'
}

export const register = (container: AwilixContainer) => {

    container.register({
        siteRepository: asClass(SequelizeSiteRepository).singleton(),
        siteFinderAll: asClass(SiteFinderAll),
        siteFinder: asClass(SiteFinderAll),
        siteCreator: asClass(SiteCreator),
        siteUpdater: asClass(SiteUpdater),
        siteGetAllController: asClass(SiteGetAllController),
        siteGetController: asClass(SiteGetController),
        sitePostController: asClass(SitePostController),
        sitePatchController: asClass(SitePatchController),
    })
}

