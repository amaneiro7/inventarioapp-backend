import { type Router } from 'express'
import { type CentroCostoGetAllController } from '../../controllers/employee/centro-costo.get-all.controller'
import { type CentroCostoPostController } from '../../controllers/employee/centro-costo.post.controller'
import { type CentroCostoPatchController } from '../../controllers/employee/centro-costo.patch.controller'
import { type CentroCostoGetController } from '../../controllers/employee/centro-costo.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { CentroCostoDependencies } from '../../di/employee/centro-costo.di'

export const register = async (router: Router) => {
    const getAllController: CentroCostoGetAllController = container.resolve(CentroCostoDependencies.GetAllController)
    const getController: CentroCostoGetController = container.resolve(CentroCostoDependencies.GetController)
    const postController: CentroCostoPostController = container.resolve(CentroCostoDependencies.PostController)
    const patchController: CentroCostoPatchController = container.resolve(CentroCostoDependencies.PatchController)

    router.get('/centrocostos/',
        authenticate,
        getAllController.run.bind(getAllController)
    )

    router.get('/centrocostos/:id',
        authenticate,
        getController.run.bind(getController)
    )

    //post
    router.post('/centrocostos/',
        authenticate,
        postController.run.bind(postController)
    )

    // patch
    router.patch('/centrocostos/:id',
        authenticate,
        patchController.run.bind(patchController)
    )
}
