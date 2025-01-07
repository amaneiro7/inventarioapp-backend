import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { LocationDependencies } from '../../di/location/location.di'
import { type LocationGetController } from '../../controllers/location/location.get.controller'
import { type LocationGetAllController } from '../../controllers/location/location.get-all.controller'
import { type LocationSearchByCriteriaController } from '../../controllers/location/location.search-by-criteria.controller'
import { type LocationPostController } from '../../controllers/location/location.post.controller'
import { type LocationPatchController } from '../../controllers/location/location.patch.controller'


export const register = async (router: Router) => {
    const getController: LocationGetController = container.resolve(LocationDependencies.GetController)
    const getAllController: LocationGetAllController = container.resolve(LocationDependencies.GetAllController)
    const searchByCriteria: LocationSearchByCriteriaController = container.resolve(LocationDependencies.GetByCriteriaController)
    const postController: LocationPostController = container.resolve(LocationDependencies.PostController)
    const patchController: LocationPatchController = container.resolve(LocationDependencies.PatchController)


    // get
    router.get('/locations/',
        authenticate,
        searchByCriteria.run.bind(searchByCriteria)
    )
    router.get('/locations/all',
        authenticate,
        getAllController.run.bind(getAllController)
    )

    router.get('/locations/:id',
        authenticate,
        getController.run.bind(getController)
    )

    //post
    router.post('/locations/',
        authenticate,
        postController.run.bind(postController)
    )

    // patch
    router.patch('/locations/:id',
        authenticate,
        patchController.run.bind(patchController)
    )
}
