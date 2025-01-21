import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { DeviceDependencies } from '../../di/device/device.di'

// import { type DeviceGetAllController } from '../controllers/device/device.getAll.controller'
import { type DevicePatchController } from '../../controllers/device/device.patch.controller'
import { type DeviceGetController } from '../../controllers/device/device.get.controller'
import { type DevicePostController } from '../../controllers/device/device.post.controller'
import { type DeviceSearchByCriteriaController } from '../../controllers/device/device.search-by-criteria.controller'
import { type DeviceDeleteController } from '../../controllers/device/device.delete.controller'
import { type DeviceDownloadExcelServiceController } from '../../controllers/device/device.download-excel-service.controller'

export const register = async (router: Router) => {
	const getController: DeviceGetController = container.resolve(
		DeviceDependencies.GetController
	)
	// const getAllController: DeviceGetAllController = container.resolve(DeviceDependencies.GetAllController)
	const postController: DevicePostController = container.resolve(
		DeviceDependencies.PostController
	)
	const patchController: DevicePatchController = container.resolve(
		DeviceDependencies.PatchController
	)
	const searchByCriteria: DeviceSearchByCriteriaController =
		container.resolve(DeviceDependencies.GetByCriteriaController)
	const deleteController: DeviceDeleteController = container.resolve(
		DeviceDependencies.DeleteController
	)
	const download: DeviceDownloadExcelServiceController = container.resolve(
		DeviceDependencies.ExcelDownloadController
	)

	// get
	router.get(
		'/devices/',
		authenticate,
		searchByCriteria.run.bind(searchByCriteria)
	)

	router.get('/devices/download', authenticate, download.run.bind(download))

	router.get(
		'/devices/:id',
		authenticate,
		getController.run.bind(getController)
	)

	//post

	router.post(
		'/devices/',
		authenticate,
		postController.run.bind(postController)
	)

	// patch
	router.patch(
		'/devices/:id',
		authenticate,
		patchController.run.bind(patchController)
	)

	// delete
	router.delete(
		'devices/:id',
		authenticate,
		deleteController.run.bind(deleteController)
	)
}
