import { type Router } from 'express'
// import { authenticate } from '../Shared/Middleware/authenticate'

import { type BrandGetFinderAllController } from '../controllers/brand.getFinderAll.controller'
import { container } from '../di/container'
// import { type BrandPostController } from '../controllers/brand.post.controller'
// import { type BrandPatchController } from '../controllers/brand.patch.controller'
// import { type BrandGetFinderController } from '../controllers/brand.getFinder.controller'


export const register = (router: Router) => {
    console.log('register brands route')

    const brandGetAllController: BrandGetFinderAllController = container.resolve('brandGetAllController')
    // const brandGetController: BrandGetFinderController = container.get('Apps.controllers.BrandGetFinderController')
    // const brandPostController: BrandPostController = container.get('Apps.controllers.BrandPatchController')
    // const brandPatchController: BrandPatchController = container.get('Apps.controllers.BrandPostAllController')


    router.get('/brands/',
        brandGetAllController.run.bind(brandGetAllController)
    )
    // router.get('/brands/:id',
    //     authenticate,
    //     brandGetController.run.bind(brandGetController)
    // )

    // router.post('/brands/',
    //     brandPostController.run.bind(brandPostController)
    // )

    // router.patch('/brands/:id',
    //     brandPatchController.run.bind(brandPatchController)
    // )
}
