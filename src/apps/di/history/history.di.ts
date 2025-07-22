import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeHistoryRepository } from '../../../Contexts/History/infrastructure/sequelize/SequelizeHistoryRepository'
import { HistoryFinderAll } from '../../../Contexts/History/application/HistoryFinderAll'
import { HistoryCreator } from '../../../Contexts/History/application/HistoryCreator'
import { HistoryGetAllController } from '../../controllers/history/history.get-all.controller'
import { SequelizeTotalChangeLastThreMonthsByCategoryRepository } from '../../../Contexts/History/infrastructure/sequelize/SequelizeTotalChangeLastThreMonthsByCategory'
import { HistoryDashboard } from '../../../Contexts/History/application/HistoryDashboard'
import { HistoryDashboardGetController } from '../../controllers/history/history-dashboard.controller'

export enum HistoryDependencies {
	Repository = 'historyRepository',
	FinderAll = 'historyFinderAll',
	Creator = 'historyCreator',
	GetAllController = 'historyGetAllController',
	HistoryDashboard = 'historyDashboard',
	HistoryDashboardGetController = 'historyDashboardGetController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		historyRepository: asClass(SequelizeHistoryRepository).singleton(),
		historyFinderAll: asClass(HistoryFinderAll),
		historyCreator: asClass(HistoryCreator),
		historyGetAllController: asClass(HistoryGetAllController),
		totalChangeLastThreMonthsByCategoryRepository: asClass(
			SequelizeTotalChangeLastThreMonthsByCategoryRepository
		).singleton(),
		historyDashboard: asClass(HistoryDashboard),
		historyDashboardGetController: asClass(HistoryDashboardGetController)
	})
}
