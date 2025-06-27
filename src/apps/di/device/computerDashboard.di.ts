import { type AwilixContainer, asClass } from 'awilix'
//app
import { GeneralDashboard } from '../../../Contexts/Device/Inventroy/application/GeneralDashboard'
import { ComputerDashboard } from '../../../Contexts/Device/Inventroy/application/ComputerDashboard'
import { DeviceMonitoringDashboard } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringDashboard'
import { DeviceMonitoringDashboardByState } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringDashboardByState'
//repo
import { SequelizeComputerDashboardRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeDashboardRepository'
import { SequelizeCountOSByRegionRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeCountOSByRegionRepository'
import { SequelizeComputerMemoryRamRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeComputerMemoryRamRepository'
import { SequelizeComputerMemoryRamModulesRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeComputerMemoryRamModulesRepository'
import { SequelizeTotalComputerRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalComputerRepository'
import { SequelizeTotalScreensRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalScreensRepository'
import { SequelizeTotalPrintersRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalPrintersRepository'
import { SequelizeTotalFinantialPrintersRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalFinantialPrintersRepository'
import { SequelizeTotalActiveUsersRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalActiveUsersRepository'
import { SequelizeTotalAgenciesRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalAgenciesRepository'
import { SequelizeTotalAdministrativeSitesRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalAdministativeSitesRepository'
import { SequelizeTotalCountByCategoryRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalCountByCategoryRepository'
import { SequelizeCountByCategoryRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeCountByCategoryRepository'
import { SequelizeCountByRegionRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeCountByRegionRepository'
import { SequelizeCountTotalOperatingSystemRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeCountTotalOperatingSystemRepository'
import { SequelizeDeviceMonitoringDashboardRepository } from '../../../Contexts/Device/DeviceMonitoring/infra/sequelize/SequelizeDeviceMonitoringDashboardRepository'
import { SequelizeDeviceMonitoringDashboardByStateRepository } from '../../../Contexts/Device/DeviceMonitoring/infra/sequelize/SequelizeDeviceMonitoringDashboardByStateRepository'
//controller
import { ComputerDashboardGetController } from '../../controllers/device/device-computer-dashboard.controller'
import { GeneralDashboardGetController } from '../../controllers/dashboard/general-dashboard.controller'
import { DeviceMonitoringDashboardGetController } from '../../controllers/device/device-monitoring-dashboard.controller'
import { DeviceMonitoringDashboardByStateGetController } from '../../controllers/device/device-monitoring-dashboard-by-state.controller'
import { DeviceMonitoringDashboardByLocationGetController } from '../../controllers/device/device-monitoring-dashboard-by-location.controller'
import { SequelizeDeviceMonitoringDashboardByLocationRepository } from '../../../Contexts/Device/DeviceMonitoring/infra/sequelize/SequelizeDeviceMonitoringDashboardByLocationRepository'
import { DeviceMonitoringDashboardByLocation } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringDashboardByLocation'

export enum ComputerDashboardDependencies {
	//Repo
	Repository = 'computerDashboardRepository',
	//app
	GeneralDashboard = 'generalDashboard',
	ComputerDashboard = 'computerDashboard',
	DeviceMonitoringDashboard = 'deviceMonitoringDashboard',
	DeviceMonitoringDashboardByState = 'deviceMonitoringDashboardByState',
	DeviceMonitoringDashboardByLocation = 'deviceMonitoringDashboardByLocation',

	//controller
	ComputerDashboardGetController = 'computerDashboardGetController',
	GeneralDashboardGetController = 'generalDashboardGetController',
	DeviceMonitoringDashboardGetController = 'deviceMonitoringDashboardGetController',
	DeviceMonitoringDashboardByStateGetController = 'deviceMonitoringDashboardByStateGetController',
	DeviceMonitoringDashboardByLocationGetController = 'deviceMonitoringDashboardByLocationGetController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		computerDashboardRepository: asClass(SequelizeComputerDashboardRepository).singleton(),
		countOSByRegionRepository: asClass(SequelizeCountOSByRegionRepository).singleton(),
		computerMemoryRamRepository: asClass(SequelizeComputerMemoryRamRepository).singleton(),

		computerMemoryRamModulesRepository: asClass(SequelizeComputerMemoryRamModulesRepository).singleton(),

		totalComputerRepository: asClass(SequelizeTotalComputerRepository).singleton(),
		totalScreensRepository: asClass(SequelizeTotalScreensRepository).singleton(),
		totalPrintersRepository: asClass(SequelizeTotalPrintersRepository).singleton(),
		totalFinantialPrintersRepository: asClass(SequelizeTotalFinantialPrintersRepository).singleton(),
		totalActiveUsersRepository: asClass(SequelizeTotalActiveUsersRepository).singleton(),
		totalAgenciesRepository: asClass(SequelizeTotalAgenciesRepository).singleton(),
		totalAdministrativeSitesRepository: asClass(SequelizeTotalAdministrativeSitesRepository).singleton(),
		totalCountByCategoryRepository: asClass(SequelizeTotalCountByCategoryRepository).singleton(),
		countByCategoryRepository: asClass(SequelizeCountByCategoryRepository).singleton(),
		countByRegionRepository: asClass(SequelizeCountByRegionRepository).singleton(),
		countTotalOperatingSystemRepository: asClass(SequelizeCountTotalOperatingSystemRepository).singleton(),
		deviceMonitoringDashboardRepository: asClass(SequelizeDeviceMonitoringDashboardRepository).singleton(),
		deviceMonitoringDashboardByStateRepository: asClass(
			SequelizeDeviceMonitoringDashboardByStateRepository
		).singleton(),
		deviceMonitoringDashboardByLocationRepository: asClass(
			SequelizeDeviceMonitoringDashboardByLocationRepository
		).singleton(),

		computerDashboard: asClass(ComputerDashboard),
		generalDashboard: asClass(GeneralDashboard),
		deviceMonitoringDashboard: asClass(DeviceMonitoringDashboard),
		deviceMonitoringDashboardByState: asClass(DeviceMonitoringDashboardByState),
		deviceMonitoringDashboardByLocation: asClass(DeviceMonitoringDashboardByLocation),

		computerDashboardGetController: asClass(ComputerDashboardGetController),
		generalDashboardGetController: asClass(GeneralDashboardGetController),
		deviceMonitoringDashboardGetController: asClass(DeviceMonitoringDashboardGetController),
		deviceMonitoringDashboardByStateGetController: asClass(DeviceMonitoringDashboardByStateGetController),
		deviceMonitoringDashboardByLocationGetController: asClass(DeviceMonitoringDashboardByLocationGetController)
	})
}
