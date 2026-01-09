import { type AwilixContainer, asClass } from 'awilix'
import { SequelizeDeviceRepository } from '../../../Contexts/Device/Device/infrastructure/sequelize/SequelizeDeviceRepository'
import { SequelizeDeviceMonitoringRepository } from '../../../Contexts/Device/DeviceMonitoring/infra/sequelize/SequelizeDeviceMonitoringRepository'
import { DeviceCreator } from '../../../Contexts/Device/Device/application/DeviceCreator'
import { DeviceFinder } from '../../../Contexts/Device/Device/application/DeviceFinder'
import { DevicesFinderAll } from '../../../Contexts/Device/Device/application/DeviceFinderAll'
import { DeviceUpdater } from '../../../Contexts/Device/Device/application/DeviceUpdater'
import { DeviceRemover } from '../../../Contexts/Device/Device/application/DeviceRemover'
import { DeviceExcelService } from '../../../Contexts/Device/Device/application/DeviceExcelService'
import { DeviceSearchByCriteria } from '../../../Contexts/Device/Device/application/DeviceByCriteriaSearcher'
import { DeviceGetAllController } from '../../controllers/device/device.get-all.controller'
import { DeviceGetController } from '../../controllers/device/device.get.controller'
import { DevicePostController } from '../../controllers/device/device.post.controller'
import { DevicePatchController } from '../../controllers/device/device.patch.controller'
import { DeviceDeleteController } from '../../controllers/device/device.delete.controller'
import { DeviceDownloadExcelServiceController } from '../../controllers/device/device.download-excel-service.controller'
import { DeviceSearchByCriteriaController } from '../../controllers/device/device.search-by-criteria.controller'
import { DevicePingStatusController } from '../../controllers/device/device-pingstatus.controller'
import { DeviceMonitoringService } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringService'
import { DeviceMonitoringFinder } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringFinder'
import { DeviceMonitoringCreator } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringCreator'
import { DeviceMonitoringFinderAll } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringFinderAll'

export enum DeviceDependencies {
	Repository = 'deviceRepository',
	Finder = 'deviceFinder',
	FinderAll = 'deviceFinderAll',
	Creator = 'deviceCreator',
	MonitoringFinder = 'deviceMonitoringFinder',
	MonitoringFinderAll = 'deviceMonitoringFinderAll',
	MonitoringCreator = 'deviceMonitoringCreator',
	DeviceMonitoringService = 'deviceMonitoringService',
	Updater = 'deviceUpdater',
	Remover = 'deviceRemover',
	ExcelService = 'deviceExcelService',
	SearchByCriteria = 'deviceSearchByCriteria',
	GetController = 'deviceGetController',
	GetAllController = 'deviceGetAllController',
	PostController = 'devicePostController',
	PatchController = 'devicePatchController',
	DeleteController = 'deviceDeleteController',
	DevicePingStatusController = 'devicePingStatusController',
	GetByCriteriaController = 'deviceGetByCriteria',
	ExcelDownloadController = 'deviceExcelDownload'
}

export const register = (container: AwilixContainer) => {
	container.register({
		deviceRepository: asClass(SequelizeDeviceRepository).singleton(),
		deviceMonitoringRepository: asClass(SequelizeDeviceMonitoringRepository).singleton(),
		deviceFinder: asClass(DeviceFinder),
		deviceFinderAll: asClass(DevicesFinderAll),
		deviceCreator: asClass(DeviceCreator),
		deviceMonitoringFinder: asClass(DeviceMonitoringFinder),
		deviceMonitoringFinderAll: asClass(DeviceMonitoringFinderAll),
		deviceMonitoringCreator: asClass(DeviceMonitoringCreator).singleton(),
		deviceUpdater: asClass(DeviceUpdater),
		deviceRemover: asClass(DeviceRemover),
		deviceExcelService: asClass(DeviceExcelService),
		deviceSearchByCriteria: asClass(DeviceSearchByCriteria),
		deviceGetController: asClass(DeviceGetController),
		deviceGetAllController: asClass(DeviceGetAllController),
		devicePostController: asClass(DevicePostController),
		devicePatchController: asClass(DevicePatchController),
		deviceDeleteController: asClass(DeviceDeleteController),
		devicePingStatusController: asClass(DevicePingStatusController),
		deviceGetByCriteria: asClass(DeviceSearchByCriteriaController),
		deviceExcelDownload: asClass(DeviceDownloadExcelServiceController),
		// This service is a stateless orchestrator, so transient (default) is the best fit.
		deviceMonitoringService: asClass(DeviceMonitoringService).singleton()
	})
}
