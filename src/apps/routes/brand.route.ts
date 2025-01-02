import { type Router } from 'express'
import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { type BrandGetFinderAllController } from '../controllers/brand/brand.getFinderAll.controller'
import { type BrandPostController } from '../controllers/brand/brand.post.controller'
import { type BrandPatchController } from '../controllers/brand/brand.patch.controller'
import { type BrandGetFinderController } from '../controllers/brand/brand.getFinder.controller'
import { BrandDependencies } from '../di/brand.di'


export const register = (router: Router) => {
    const getController: BrandGetFinderController = container.resolve(BrandDependencies.GetController)
    const getAllController: BrandGetFinderAllController = container.resolve(BrandDependencies.GetAllController)
    const postController: BrandPostController = container.resolve(BrandDependencies.PostController)
    const patchController: BrandPatchController = container.resolve(BrandDependencies.PatchController)


    router.get('/brands/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
    router.get('/brands/:id',
        authenticate,
        getController.run.bind(getController)
    )

    router.post('/brands/',
        authenticate,
        postController.run.bind(postController)
    )

    router.patch('/brands/:id',
        authenticate,
        patchController.run.bind(patchController)
    )
}
