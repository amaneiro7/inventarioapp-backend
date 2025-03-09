import { type AwilixContainer, asClass } from 'awilix'
import { SequelizeModelSeriesRepository } from '../../../Contexts/ModelSeries/ModelSeries/infraestructure/Sequelize/SequelizeModelSeriesRepository'
import { ModelSeriesFinder } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesFinder'
import { ModelSeriesFinderAll } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesFinderAll'
import { ModelSeriesCreator } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesCreator'
import { ModelSeriesUpdater } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesUpdater'
import { ModelSeriesExcelService } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelExcelService'
import { ModelSeriesSearchByCriteria } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelByCriteriaSearcher'
import { ModelSeriesGetController } from '../../controllers/model-series/model-series.get.controller'
import { ModelSeriesGetAllController } from '../../controllers/model-series/model-series.get-all.controller'
import { ModelSeriesPostController } from '../../controllers/model-series/model-series.post.controller'
import { ModelSeriesPatchController } from '../../controllers/model-series/model-series.patch.controller'
import { ModelSeriesSearchByCriteriaController } from '../../controllers/model-series/model-series.search-by-criteria.controller'
import { ModelSeriesDownloadExcelServiceController } from '../../controllers/model-series/model-series.download-excel-service.controller'

export enum ModelSeriesDependencies {
	Repository = 'modelSeriesRepository',
	Finder = 'modelSeriesFinder',
	FinderAll = 'modelSeriesFinderAll',
	Creator = 'modelSeriesCreator',
	Updater = 'modelSeriesUpdater',
	ExcelService = 'modelSeriesExcelService',
	SearchByCriteria = 'modelSeriesSearchByCriteria',
	GetController = 'modelSeriesGetController',
	GetAllController = 'modelSeriesGetAllController',
	PostController = 'modelSeriesPostController',
	PatchController = 'modelSeriesPatchController',

	GetByCriteriaController = 'modelSeriesGetByCriteria',
	ExcelDownloadController = 'modelSeriesExcelDownload'
}

export const register = (container: AwilixContainer) => {
	container.register({
		modelSeriesRepository: asClass(SequelizeModelSeriesRepository).singleton(),
		modelSeriesFinder: asClass(ModelSeriesFinder),
		modelSeriesFinderAll: asClass(ModelSeriesFinderAll),
		modelSeriesCreator: asClass(ModelSeriesCreator),
		modelSeriesUpdater: asClass(ModelSeriesUpdater),
		modelSeriesExcelService: asClass(ModelSeriesExcelService),
		modelSeriesSearchByCriteria: asClass(ModelSeriesSearchByCriteria),
		modelSeriesGetController: asClass(ModelSeriesGetController),
		modelSeriesGetAllController: asClass(ModelSeriesGetAllController),
		modelSeriesPostController: asClass(ModelSeriesPostController),
		modelSeriesPatchController: asClass(ModelSeriesPatchController),
		modelSeriesGetByCriteria: asClass(ModelSeriesSearchByCriteriaController),
		modelSeriesExcelDownload: asClass(ModelSeriesDownloadExcelServiceController)
	})
}
