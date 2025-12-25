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
import { LocationMonitoringDashboardByLocation } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringDashboardByLocation'
import { LocationMonitoringDashboardByLocationGetController } from '../../controllers/location/location-monitoring-dashboard-by-location.controller'
import { SequelizeLocationMonitoringDashboardByLocationRepository } from '../../../Contexts/Location/LocationMonitoring/infra/sequelize/SequelizeLocationMonitoringDashboardByLocationRepository'

export enum LocationMonitoringDependencies {
	// application
	MonitoringFinder = 'locationMonitoringFinder',
	MonitoringFinderAll = 'locationMonitoringFinderAll',
	MonitoringCreator = 'locationMonitoringCreator',
	LocationMonitoringService = 'locationMonitoringService',
	LocationMonitoringDashboard = 'locationMonitoringDashboard',
	LocationMonitoringDashboardByState = 'locationMonitoringDashboardByState',
	// repository
	LocationMonitoringDashboardRepository = 'locationMonitoringDashboardRepository',
	LocationMonitoringDashboardByStateRepository = 'locationMonitoringDashboardByStateRepository',
	LocationMonitoringDashboardByLocationRepository = 'locationMonitoringDashboardByLocationRepository',
	LocationMonitoringRepository = 'locationMonitoringRepository',
	// controller
	LocationPingStatusController = 'locationPingStatusController',
	LocationMonitoringDashboardGetController = 'locationMonitoringDashboardGetController',
	LocationMonitoringDashboardByStateGetController = 'locationMonitoringDashboardByStateGetController',
	LocationMonitoringDashboardByLocation = 'locationMonitoringDashboardByLocation',
	LocationMonitoringDashboardByLocationGetController = 'locationMonitoringDashboardByLocationGetController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		//app
		[LocationMonitoringDependencies.MonitoringFinder]: asClass(LocationMonitoringFinder),
		[LocationMonitoringDependencies.MonitoringFinderAll]: asClass(LocationMonitoringFinderAll),
		[LocationMonitoringDependencies.MonitoringCreator]: asClass(LocationMonitoringCreator).singleton(),
		[LocationMonitoringDependencies.LocationMonitoringDashboard]: asClass(LocationMonitoringDashboard),
		[LocationMonitoringDependencies.LocationMonitoringDashboardByState]: asClass(
			LocationMonitoringDashboardByState
		),
		[LocationMonitoringDependencies.LocationMonitoringDashboardByLocation]: asClass(
			LocationMonitoringDashboardByLocation
		),
		[LocationMonitoringDependencies.LocationMonitoringService]: asClass(LocationMonitoringService).singleton(),
		//repo
		[LocationMonitoringDependencies.LocationMonitoringDashboardRepository]: asClass(
			SequelizeLocationMonitoringDashboardRepository
		).singleton(),
		[LocationMonitoringDependencies.LocationMonitoringDashboardByStateRepository]: asClass(
			SequelizeLocationMonitoringDashboardByStateRepository
		).singleton(),
		[LocationMonitoringDependencies.LocationMonitoringDashboardByLocationRepository]: asClass(
			SequelizeLocationMonitoringDashboardByLocationRepository
		).singleton(),
		[LocationMonitoringDependencies.LocationMonitoringRepository]: asClass(
			SequelizeLocationMonitoringRepository
		).singleton(),
		//controller
		[LocationMonitoringDependencies.LocationPingStatusController]: asClass(LocationPingStatusController),
		[LocationMonitoringDependencies.LocationMonitoringDashboardGetController]: asClass(
			LocationMonitoringDashboardGetController
		),
		[LocationMonitoringDependencies.LocationMonitoringDashboardByStateGetController]: asClass(
			LocationMonitoringDashboardByStateGetController
		),
		[LocationMonitoringDependencies.LocationMonitoringDashboardByLocationGetController]: asClass(
			LocationMonitoringDashboardByLocationGetController
		)
	})
}
