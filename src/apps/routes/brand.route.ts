import { type Router } from 'express'
import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { type BrandGetFinderAllController } from '../controllers/brand.getFinderAll.controller'
import { type BrandPostController } from '../controllers/brand.post.controller'
import { type BrandPatchController } from '../controllers/brand.patch.controller'
import { type BrandGetFinderController } from '../controllers/brand.getFinder.controller'


export const register = (router: Router) => {
    const brandGetController: BrandGetFinderController = container.resolve('brandGetController')
    const brandGetAllController: BrandGetFinderAllController = container.resolve('brandGetAllController')
    const brandPostController: BrandPostController = container.resolve('brandPostController')
    const brandPatchController: BrandPatchController = container.resolve('brandPatchController')


    router.get('/brands/',
        brandGetAllController.run.bind(brandGetAllController)
    )
    router.get('/brands/:id',
        authenticate,
        brandGetController.run.bind(brandGetController)
    )

    router.post('/brands/',
        brandPostController.run.bind(brandPostController)
    )

    router.patch('/brands/:id',
        brandPatchController.run.bind(brandPatchController)
    )
}
