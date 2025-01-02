import { type AwilixContainer, asClass } from "awilix";
import { BrandCreator } from '../../Contexts/Brand/application/BrandCreator'
import { BrandFinderAll } from '../../Contexts/Brand/application/BrandFinderAll'
import { BrandUpdater } from '../../Contexts/Brand/application/BrandUpdater'
import { BrandFinder } from '../../Contexts/Brand/application/BrandFinder'
import { BrandPatchController } from '../controllers/brand.patch.controller'
import { BrandGetFinderAllController } from '../controllers/brand.getFinderAll.controller'
import { BrandGetFinderController } from '../controllers/brand.getFinder.controller'
import { BrandPostController } from '../controllers/brand.post.controller'
import { SequelizeBrandRepository } from '../../Contexts/Brand/infrastructure/Sequelize/SequelizeBrandRepository'

export enum BrandDependencies {
    Repository = 'brandRepository',
    Creator = 'brandCreator',
    Finder = 'brandFinder',
    FinderAll = 'brandFinderAll',
    Updater = 'brandUpdater',
    GetController = 'brandGetController',
    GetAllController = 'brandGetAllController',
    PostController = 'brandPostController',
    PatchController = 'brandPatchController',
}

export const register = (container: AwilixContainer) => {
    container.register({
        brandRepository: asClass(SequelizeBrandRepository).singleton(),
        brandCreator: asClass(BrandCreator),
        brandFinder: asClass(BrandFinder),
        brandFinderAll: asClass(BrandFinderAll),
        brandUpdater: asClass(BrandUpdater),
        brandGetController: asClass(BrandGetFinderController),
        brandGetAllController: asClass(BrandGetFinderAllController),
        brandPostController: asClass(BrandPostController),
        brandPatchController: asClass(BrandPatchController),
    })
}

