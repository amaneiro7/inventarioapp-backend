import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeLocationMonitoringDashboardRepository } from '../../../Contexts/Location/LocationMonitoring/infra/sequelize/SequelizeLocationMonitoringDashboardRepository'
import { SequelizeLocationMonitoringDashboardByStateRepository } from '../../../Contexts/Location/LocationMonitoring/infra/sequelize/SequelizeLocationMonitoringDashboardByStateRepository'
import { LocationMonitoringDashboard } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringDashboard'
import { LocationMonitoringDashboardByState } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringDashboardByState'
import { LocationMonitoringService } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringService'
import { LocationMonitoringCreator } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringCreator'
import { LocationMonitoringFinderAll } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringFinderAll'
import { LocationMonitoringFinder } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringFinder'
import { SequelizeLocationMonitoringRepository } from '../../../Contexts/Location/LocationMonitoring/infra/sequelize/SequelizeLocationMonitoringRepository'
import { LocationPingStatusController } from '../../controllers/location/location-pingstatus.controller'
import { LocationMonitoringDashboardGetController } from '../../controllers/location/location-monitoring-dashboard.controller'
import { LocationMonitoringDashboardByStateGetController } from '../../controllers/location/location-monitoring-dashboard-by-state.controller'

export enum LocationMonitoringDependencies {
	MonitoringFinder = 'locationMonitoringFinder',
	MonitoringFinderAll = 'locationMonitoringFinderAll',
	MonitoringCreator = 'locationMonitoringCreator',
	LocationMonitoringService = 'locationMonitoringService',
	LocationMonitoringDashboard = 'locationMonitoringDashboard',
	LocationMonitoringDashboardByState = 'locationMonitoringDashboardByState',
	LocationPingStatusController = 'locationPingStatusController',
	LocationMonitoringDashboardGetController = 'locationMonitoringDashboardGetController',
	LocationMonitoringDashboardByStateGetController = 'locationMonitoringDashboardByStateGetController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		//app
		locationMonitoringFinder: asClass(LocationMonitoringFinder),
		locationMonitoringFinderAll: asClass(LocationMonitoringFinderAll),
		locationMonitoringDashboard: asClass(LocationMonitoringDashboard),
		locationMonitoringDashboardByState: asClass(LocationMonitoringDashboardByState),
		locationMonitoringCreator: asClass(LocationMonitoringCreator),
		locationMonitoringService: asClass(LocationMonitoringService),
		//repo
		locationMonitoringDashboardRepository: asClass(SequelizeLocationMonitoringDashboardRepository).singleton(),
		locationMonitoringDashboardByStateRepository: asClass(
			SequelizeLocationMonitoringDashboardByStateRepository
		).singleton(),
		locationMonitoringRepository: asClass(SequelizeLocationMonitoringRepository).singleton(),
		//controller
		locationPingStatusController: asClass(LocationPingStatusController),
		locationMonitoringDashboardGetController: asClass(LocationMonitoringDashboardGetController),
		locationMonitoringDashboardByStateGetController: asClass(LocationMonitoringDashboardByStateGetController)
	})
}
