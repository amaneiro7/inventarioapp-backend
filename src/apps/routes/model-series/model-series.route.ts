import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'
import { type ModelSeriesGetAllController } from '../../controllers/model-series/model-series.get-all.controller'
import { type ModelSeriesGetController } from '../../controllers/model-series/model-series.get.controller'
import { type ModelSeriesPostController } from '../../controllers/model-series/model-series.post.controller'
import { type ModelSeriesPatchController } from '../../controllers/model-series/model-series.patch.controller'
import { type ModelSeriesSearchByCriteriaController } from '../../controllers/model-series/model-series.search-by-criteria.controller'
import { type ModelSeriesDownloadExcelServiceController } from '../../controllers/model-series/model-series.download-excel-service.controller'

export const register = async (router: Router) => {
	const getController: ModelSeriesGetController = container.resolve(ModelSeriesDependencies.GetController)
	const getAllController: ModelSeriesGetAllController = container.resolve(ModelSeriesDependencies.GetAllController)
	const postController: ModelSeriesPostController = container.resolve(ModelSeriesDependencies.PostController)
	const patchController: ModelSeriesPatchController = container.resolve(ModelSeriesDependencies.PatchController)
	const searchByCriteria: ModelSeriesSearchByCriteriaController = container.resolve(
		ModelSeriesDependencies.GetByCriteriaController
	)

	const download: ModelSeriesDownloadExcelServiceController = container.resolve(
		ModelSeriesDependencies.ExcelDownloadController
	)

	// get
	router.get('/models/', authenticate, searchByCriteria.run.bind(searchByCriteria))

	router.get('/models/all', authenticate, getAllController.run.bind(getAllController))

	router.get('/models/download', authenticate, download.run.bind(download))

	router.get('/models/:id', authenticate, getController.run.bind(getController))

	//post

	router.post('/models/', authenticate, postController.run.bind(postController))

	// patch
	router.patch('/models/:id', authenticate, patchController.run.bind(patchController))
}
