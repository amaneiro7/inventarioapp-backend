import { type Router } from 'express'
import { type SiteGetAllController } from '../controllers/location/site.get-all.controller'
import { type SitePostController } from '../controllers/location/site.post.controller'
import { type SitePatchController } from '../controllers/location/site.patch.controller'
import { type SiteGetController } from '../controllers/location/site.get.controller'

import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { SiteDependencies } from '../di/site.di'

export const register = async (router: Router) => {
    const getAllController: SiteGetAllController = container.resolve(SiteDependencies.GetAllController)
    const getController: SiteGetController = container.resolve(SiteDependencies.GetController)
    const postController: SitePostController = container.resolve(SiteDependencies.PostController)
    const patchController: SitePatchController = container.resolve(SiteDependencies.PatchController)

    router.get('/sites/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
    router.get('/sites/:id',
        authenticate,
        getController.run.bind(getController)
    )

    //post
    router.post('/sites/',
        authenticate,
        postController.run.bind(postController)
    )

    // patch
    router.patch('/sites/:id',
        authenticate,
        patchController.run.bind(patchController)
    )
}
