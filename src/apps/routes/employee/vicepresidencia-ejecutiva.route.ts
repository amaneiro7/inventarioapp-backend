import { type Router } from 'express'
import { type VicepresidenciaEjecutivaGetAllController } from '../../controllers/employee/vicepresidencia-ejecutiva.get-all.controller'
import { type VicepresidenciaEjecutivaPostController } from '../../controllers/employee/vicepresidencia-ejecutiva.post.controller'
import { type VicepresidenciaEjecutivaPatchController } from '../../controllers/employee/vicepresidencia-ejecutiva.patch.controller'
import { type VicepresidenciaEjecutivaGetController } from '../../controllers/employee/vicepresidencia-ejecutiva.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { VicepresidenciaEjecutivaDependencies } from '../../di/employee/vicepresidencia-ejecutiva.di'

export const register = async (router: Router) => {
    const getAllController: VicepresidenciaEjecutivaGetAllController = container.resolve(VicepresidenciaEjecutivaDependencies.GetAllController)
    const getController: VicepresidenciaEjecutivaGetController = container.resolve(VicepresidenciaEjecutivaDependencies.GetController)
    const postController: VicepresidenciaEjecutivaPostController = container.resolve(VicepresidenciaEjecutivaDependencies.PostController)
    const patchController: VicepresidenciaEjecutivaPatchController = container.resolve(VicepresidenciaEjecutivaDependencies.PatchController)

    router.get('/vicepresidenciaejecutivas/',
        authenticate,
        getAllController.run.bind(getAllController)
    )

    router.get('/vicepresidenciaejecutivas/:id',
        authenticate,
        getController.run.bind(getController)
    )

    //post
    router.post('/vicepresidenciaejecutivas/',
        authenticate,
        postController.run.bind(postController)
    )

    // patch
    router.patch('/vicepresidenciaejecutivas/:id',
        authenticate,
        patchController.run.bind(patchController)
    )
}
