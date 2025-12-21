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
		[ModelSeriesDependencies.Repository]: asClass(SequelizeModelSeriesRepository).singleton(),
		[ModelSeriesDependencies.Finder]: asClass(ModelSeriesFinder),
		[ModelSeriesDependencies.FinderAll]: asClass(ModelSeriesFinderAll),
		[ModelSeriesDependencies.Creator]: asClass(ModelSeriesCreator),
		[ModelSeriesDependencies.Updater]: asClass(ModelSeriesUpdater),
		[ModelSeriesDependencies.ExcelService]: asClass(ModelSeriesExcelService),
		[ModelSeriesDependencies.SearchByCriteria]: asClass(ModelSeriesSearchByCriteria),
		[ModelSeriesDependencies.GetController]: asClass(ModelSeriesGetController),
		[ModelSeriesDependencies.GetAllController]: asClass(ModelSeriesGetAllController),
		[ModelSeriesDependencies.PostController]: asClass(ModelSeriesPostController),
		[ModelSeriesDependencies.PatchController]: asClass(ModelSeriesPatchController),
		[ModelSeriesDependencies.GetByCriteriaController]: asClass(ModelSeriesSearchByCriteriaController),
		[ModelSeriesDependencies.ExcelDownloadController]: asClass(ModelSeriesDownloadExcelServiceController)
	})
}
