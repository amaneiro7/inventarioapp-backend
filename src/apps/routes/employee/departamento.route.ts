import { type Router } from 'express'
import { type DepartamentoGetAllController } from '../../controllers/employee/departamento.get-all.controller'
import { type DepartamentoPostController } from '../../controllers/employee/departamento.post.controller'
import { type DepartamentoPatchController } from '../../controllers/employee/departamento.patch.controller'
import { type DepartamentoGetController } from '../../controllers/employee/departamento.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { DepartamentoDependencies } from '../../di/employee/departamento.di'

export const register = async (router: Router) => {
    const getAllController: DepartamentoGetAllController = container.resolve(DepartamentoDependencies.GetAllController)
    const getController: DepartamentoGetController = container.resolve(DepartamentoDependencies.GetController)
    const postController: DepartamentoPostController = container.resolve(DepartamentoDependencies.PostController)
    const patchController: DepartamentoPatchController = container.resolve(DepartamentoDependencies.PatchController)

    router.get('/departamentos/',
        authenticate,
        getAllController.run.bind(getAllController)
    )

    router.get('/departamentos/:id',
        authenticate,
        getController.run.bind(getController)
    )

    //post
    router.post('/departamentos/',
        authenticate,
        postController.run.bind(postController)
    )

    // patch
    router.patch('/departamentos/:id',
        authenticate,
        patchController.run.bind(patchController)
    )
}
