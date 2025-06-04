import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { LocationDependencies } from '../../di/location/location.di'
import { LocationMonitoringDependencies } from '../../di/location/location-monitoring.di'
import { type LocationGetController } from '../../controllers/location/location.get.controller'
import { type LocationGetAllController } from '../../controllers/location/location.get-all.controller'
import { type LocationSearchByCriteriaController } from '../../controllers/location/location.search-by-criteria.controller'
import { type LocationPostController } from '../../controllers/location/location.post.controller'
import { type LocationPatchController } from '../../controllers/location/location.patch.controller'
import { type LocationPingStatusController } from '../../controllers/location/location-pingstatus.controller'
import { type LocationMonitoringDashboardGetController } from '../../controllers/location/location-monitoring-dashboard.controller'
import { type LocationMonitoringDashboardByStateGetController } from '../../controllers/location/location-monitoring-dashboard-by-state.controller'

export const register = async (router: Router) => {
	const getController: LocationGetController = container.resolve(LocationDependencies.GetController)
	const getAllController: LocationGetAllController = container.resolve(LocationDependencies.GetAllController)
	const searchByCriteria: LocationSearchByCriteriaController = container.resolve(
		LocationDependencies.GetByCriteriaController
	)
	const postController: LocationPostController = container.resolve(LocationDependencies.PostController)
	const patchController: LocationPatchController = container.resolve(LocationDependencies.PatchController)

	const locationPingStatusController: LocationPingStatusController = container.resolve(
		LocationMonitoringDependencies.LocationPingStatusController
	)

	const locationMonitoringDashboardGetController: LocationMonitoringDashboardGetController = container.resolve(
		LocationMonitoringDependencies.LocationMonitoringDashboardGetController
	)
	const locationMonitoringDashboardByStateGetController: LocationMonitoringDashboardByStateGetController =
		container.resolve(LocationMonitoringDependencies.LocationMonitoringDashboardByStateGetController)

	// get
	router.get('/locations/', authenticate, searchByCriteria.run.bind(searchByCriteria))
	router.get('/locations/all', authenticate, getAllController.run.bind(getAllController))

	// monitoring
	router.get(
		'/locations/ping-status',
		authenticate,
		locationPingStatusController.run.bind(locationPingStatusController)
	)
	router.get(
		'/locations/dashboard/monitoring',
		authenticate,
		locationMonitoringDashboardGetController.run.bind(locationMonitoringDashboardGetController)
	)
	router.get(
		'/locations/dashboard/monitoringbystate',
		authenticate,
		locationMonitoringDashboardByStateGetController.run.bind(locationMonitoringDashboardByStateGetController)
	)

	router.get('/locations/:id', authenticate, getController.run.bind(getController))
	//post
	router.post('/locations/', authenticate, postController.run.bind(postController))

	// patch
	router.patch('/locations/:id', authenticate, patchController.run.bind(patchController))
}
