import { asClass, type AwilixContainer } from 'awilix'
import { RestartMonitoringServices } from '../../../Contexts/Shared/application/event/RestartMonitoringServices'
import { InvalidateBrandCacheOnBrandChanged } from '../../../Contexts/Brand/application/InvalidateBrandCacheOnBrandChanged'
import { InvalidateModelSeriesCacheOnModelSeriesChanged } from '../../../Contexts/ModelSeries/ModelSeries/application/InvalidateModelSeriesCacheOnModelSeriesChanged'
import { InvalidateShipmentCacheOnShipmentChanged } from '../../../Contexts/Shipment/Shipment/application/InvalidateBrandCacheOnBrandChanged'
import { InvalidateCityCacheOnCityChanged } from '../../../Contexts/Location/City/application/InvalidateCityCacheOnCityChanged'
import { InvalidateSiteCacheOnSiteChanged } from '../../../Contexts/Location/Site/application/InvalidateSiteCacheOnSiteChanged'
import { InvalidateRegionCacheOnRegionChanged } from '../../../Contexts/Location/Region/application/InvalidateRegionCacheOnRegionChanged'
import { InvalidateLocationCacheOnLocationChanged } from '../../../Contexts/Location/Location/application/InvalidateLocationCacheOnLocationChanged'
import { CreateLocationMonitoringOnLocationCreated } from '../../../Contexts/Location/LocationMonitoring/application/CreateLocationMonitoringOnLocationCreated'
import { InvalidateLocationMonitoringCacheOnLocationChanged } from '../../../Contexts/Location/LocationMonitoring/application/InvalidateLocationMonitoringCacheOnLocationChanged'
import { SyncLocationMonitoringStateOnEvents } from '../../../Contexts/Location/LocationMonitoring/application/SyncLocationMonitoringStateOnEvents'
import { InvalidateDirectivaCacheOnDirectivaChanged } from '../../../Contexts/employee/Directiva/application/InvalidateDirectivaCacheOnDirectivaChanged'
import { InvalidateCargoCacheOnCargoChanged } from '../../../Contexts/employee/Cargo/application/InvalidateCargoCacheOnCargoChanged'
import { InvalidateDepartamentoCacheOnDepartamentoChanged } from '../../../Contexts/employee/Departamento/application/InvalidateDepartamentoCacheOnDepartamentoChanged'
import { InvalidateVicepresidenciaCacheOnVicepresidenciaChanged } from '../../../Contexts/employee/Vicepresidencia/application/InvalidateVicepresidenciaCacheOnVicepresidenciaChanged'
import { InvalidateVicepresidenciaEjecutivaCacheOnVicepresidenciaEjecutivaChanged } from '../../../Contexts/employee/VicepresidenciaEjecutiva/application/InvalidateVicepresidenciaEjecutivaCacheOnVicepresidenciaEjecutivaChanged'
import { DeactivateUserOnEmployeeTerminated } from '../../../Contexts/User/user/application/DeactivateUserOnEmployeeTerminated'
import { InvalidateEmployeeCacheOnEmployeeChanged } from '../../../Contexts/employee/Employee/application/InvalidateEmployeeCacheOnEmployeeChanged'
import { InvalidateProcessorCacheOnProcessorChanged } from '../../../Contexts/Features/Processor/application/InvalidateProcessorCacheOnProcessorChanged'
import { InvalidateDeviceCacheOnDeviceChanged } from '../../../Contexts/Device/Device/application/InvalidateDeviceCacheOnDeviceChanged'
import { CreateHistoryOnDeviceChanged } from '../../../Contexts/History/application/CreateHistoryOnDeviceChanged'
import { InvalidateHistoryCacheOnHistoryChanged } from '../../../Contexts/History/application/InvalidateHistoryCacheOnHistoryChanged'
import { CreateDeviceMonitoringOnDeviceCreated } from '../../../Contexts/Device/DeviceMonitoring/application/CreateDeviceMonitoringOnDeviceCreated'
import { InvalidateDeviceMonitoringCacheOnDeviceChanged } from '../../../Contexts/Device/DeviceMonitoring/application/InvalidateDeviceMonitoringCacheOnDeviceChanged'
import { SyncDeviceMonitoringStateOnEvents } from '../../../Contexts/Device/DeviceMonitoring/application/SyncDeviceMonitoringStateOnEvents'
import { InvalidateAppSettingsCacheOnAppSettingsChanged } from '../../../Contexts/AppSettings/application/InvalidateAppSettingsCacheOnAppSettingsChanged'
import { InvalidateAccessPolicyCacheOnAccessPolicyChanged } from '../../../Contexts/AccessControl/AccessPolicy/application/InvalidateAccessPolicyCacheOnAccessPolicyChanged'
import { InvalidatePermissionGroupCacheOnPermissionGroupChanged } from '../../../Contexts/AccessControl/PermissionGroup/application/InvalidatePermissionGroupCacheOnPermissionGroupChanged'
import { InvalidatePermissionCacheOnPermissionChanged } from '../../../Contexts/AccessControl/Permission/application/InvalidatePermissionsCacheOnPermissionsChanged'
import { InvalidateDeviceMonitoringCacheOnGeneralInfoChanged } from '../../../Contexts/Device/DeviceMonitoring/application/InvalidateDeviceMonitoringCacheOnGeneralInfoChanged'
import { InvalidateLocationMonitoringCacheOnGeneralInfoChanged } from '../../../Contexts/Location/LocationMonitoring/application/InvalidateLocationMonitoringCacheOnGeneralInfoChanged'

export enum DomainEventDependencies {
	// MonitorinService
	RestartMonitoringServices = 'restartMonitoringServices',
	CreateLocationMonitoringOnLocationCreated = 'createLocationMonitoringOnLocationCreated',
	CreateDeviceMonitoringOnDeviceCreated = 'createDeviceMonitoringOnDeviceCreated',
	InvalidateDeviceMonitoringCacheOnDeviceChanged = 'invalidateDeviceMonitoringCacheOnDeviceChanged',
	InvalidateLocationMonitoringCacheOnLocationChanged = 'invalidateLocationMonitoringCacheOnLocationChanged',
	InvalidateDeviceMonitoringCacheOnGeneralInfoChanged = 'invalidateDeviceMonitoringCacheOnGeneralInfoChanged',
	InvalidateLocationMonitoringCacheOnGeneralInfoChanged = 'invalidateLocationMonitoringCacheOnGeneralInfoChanged',
	SyncDeviceMonitoringStateOnEvents = 'syncDeviceMonitoringStateOnEvents',
	SyncLocationMonitoringStateOnEvents = 'syncLocationMonitoringStateOnEvents',
	// Bounded Context Access Control
	InvalidateAccessPolicyCacheOnAccessPolicyChanged = 'invalidateAccessPolicyCacheOnAccessPolicyChanged',
	InvalidatePermissionGroupCacheOnPermissionGroupChanged = 'invalidatePermissionGroupCacheOnPermissionGroupChanged',
	InvalidatePermissionCacheOnPermissionChanged = 'invalidatePermissionCacheOnPermissionChanged',

	// Brand
	InvalidateBrandCacheOnBrandChanged = 'invalidateBrandCacheOnBrandChanged',
	// Device
	InvalidateDeviceCacheOnDeviceChanged = 'invalidateDeviceCacheOnDeviceChanged',
	InvalidateProcessorCacheOnProcessorChanged = 'invalidateProcessorCacheOnProcessorChanged',
	// History
	CreateHistoryOnDeviceChanged = 'createHistoryOnDeviceChanged',
	InvalidateHistoryCacheOnHistoryChanged = 'invalidateHistoryCacheOnHistoryChanged',

	//Location
	InvalidateCityCacheOnCityChanged = 'invalidateCityCacheOnCityChanged',
	InvalidateSiteCacheOnSiteChanged = 'invalidateSiteCacheOnSiteChanged',
	InvalidateRegionCacheOnRegionChanged = 'invalidateRegionCacheOnRegionChanged',
	InvalidateLocationCacheOnLocationChanged = 'invalidateLocationCacheOnLocationChanged',
	// Employee
	InvalidateDirectivaCacheOnDirectivaChanged = 'invalidateDirectivaCacheOnDirectivaChanged',
	InvalidateCargoCacheOnCargoChanged = 'invalidateCargoCacheOnCargoChanged',
	InvalidateDepartamentoCacheOnDepartamentoChanged = 'invalidateDepartamentoCacheOnDepartamentoChanged',
	InvalidateVicepresidenciaCacheOnVicepresidenciaChanged = 'invalidateVicepresidenciaCacheOnVicepresidenciaChanged',
	InvalidateVicepresidenciaEjecutivaCacheOnVicepresidenciaEjecutivaChanged = 'invalidateVicepresidenciaEjecutivaCacheOnVicepresidenciaEjecutivaChanged',
	InvalidateEmployeeCacheOnEmployeeChanged = 'invalidateEmployeeCacheOnEmployeeChanged',
	// User
	DeactivateUserOnEmployeeTerminated = 'deactivateUserOnEmployeeTerminated',
	//Model
	InvalidateModelSeriesCacheOnModelSeriesChanged = 'invalidateModelSeriesCacheOnModelSeriesChanged',
	//Shipment
	InvalidateShipmentCacheOnShipmentChanged = 'invalidateShipmentCacheOnShipmentChanged',
	// App Settings
	InvalidateAppSettingsCacheOnAppSettingsChanged = 'invalidateAppSettingsCacheOnAppSettingsChanged'
}

/**
 * @description Registra todos los suscriptores de eventos de dominio en el contenedor de dependencias.
 * @param container El contenedor de Awilix.
 */
export const register = (container: AwilixContainer) => {
	// Registra cada suscriptor como una clase.
	container.register({
		[DomainEventDependencies.RestartMonitoringServices]: asClass(RestartMonitoringServices).singleton(),
		[DomainEventDependencies.InvalidateBrandCacheOnBrandChanged]: asClass(
			InvalidateBrandCacheOnBrandChanged
		).singleton(),
		[DomainEventDependencies.InvalidateDeviceMonitoringCacheOnGeneralInfoChanged]: asClass(
			InvalidateDeviceMonitoringCacheOnGeneralInfoChanged
		).singleton(),
		[DomainEventDependencies.InvalidateLocationMonitoringCacheOnGeneralInfoChanged]: asClass(
			InvalidateLocationMonitoringCacheOnGeneralInfoChanged
		).singleton(),
		[DomainEventDependencies.InvalidateModelSeriesCacheOnModelSeriesChanged]: asClass(
			InvalidateModelSeriesCacheOnModelSeriesChanged
		).singleton(),
		[DomainEventDependencies.InvalidateShipmentCacheOnShipmentChanged]: asClass(
			InvalidateShipmentCacheOnShipmentChanged
		).singleton(),
		[DomainEventDependencies.InvalidateCityCacheOnCityChanged]: asClass(
			InvalidateCityCacheOnCityChanged
		).singleton(),
		[DomainEventDependencies.InvalidateSiteCacheOnSiteChanged]: asClass(
			InvalidateSiteCacheOnSiteChanged
		).singleton(),
		[DomainEventDependencies.InvalidateRegionCacheOnRegionChanged]: asClass(
			InvalidateRegionCacheOnRegionChanged
		).singleton(),
		[DomainEventDependencies.InvalidateLocationCacheOnLocationChanged]: asClass(
			InvalidateLocationCacheOnLocationChanged
		).singleton(),
		[DomainEventDependencies.CreateLocationMonitoringOnLocationCreated]: asClass(
			CreateLocationMonitoringOnLocationCreated
		).singleton(),
		[DomainEventDependencies.InvalidateLocationMonitoringCacheOnLocationChanged]: asClass(
			InvalidateLocationMonitoringCacheOnLocationChanged
		).singleton(),
		[DomainEventDependencies.SyncLocationMonitoringStateOnEvents]: asClass(
			SyncLocationMonitoringStateOnEvents
		).singleton(),
		[DomainEventDependencies.InvalidateDirectivaCacheOnDirectivaChanged]: asClass(
			InvalidateDirectivaCacheOnDirectivaChanged
		).singleton(),
		[DomainEventDependencies.InvalidateCargoCacheOnCargoChanged]: asClass(
			InvalidateCargoCacheOnCargoChanged
		).singleton(),
		[DomainEventDependencies.InvalidateDepartamentoCacheOnDepartamentoChanged]: asClass(
			InvalidateDepartamentoCacheOnDepartamentoChanged
		).singleton(),
		[DomainEventDependencies.InvalidateVicepresidenciaCacheOnVicepresidenciaChanged]: asClass(
			InvalidateVicepresidenciaCacheOnVicepresidenciaChanged
		).singleton(),
		[DomainEventDependencies.InvalidateVicepresidenciaEjecutivaCacheOnVicepresidenciaEjecutivaChanged]: asClass(
			InvalidateVicepresidenciaEjecutivaCacheOnVicepresidenciaEjecutivaChanged
		).singleton(),
		[DomainEventDependencies.DeactivateUserOnEmployeeTerminated]: asClass(
			DeactivateUserOnEmployeeTerminated
		).singleton(),
		[DomainEventDependencies.InvalidateEmployeeCacheOnEmployeeChanged]: asClass(
			InvalidateEmployeeCacheOnEmployeeChanged
		).singleton(),
		[DomainEventDependencies.InvalidateProcessorCacheOnProcessorChanged]: asClass(
			InvalidateProcessorCacheOnProcessorChanged
		).singleton(),
		[DomainEventDependencies.InvalidateDeviceCacheOnDeviceChanged]: asClass(
			InvalidateDeviceCacheOnDeviceChanged
		).singleton(),
		[DomainEventDependencies.CreateHistoryOnDeviceChanged]: asClass(CreateHistoryOnDeviceChanged).singleton(),
		[DomainEventDependencies.InvalidateHistoryCacheOnHistoryChanged]: asClass(
			InvalidateHistoryCacheOnHistoryChanged
		).singleton(),
		[DomainEventDependencies.CreateDeviceMonitoringOnDeviceCreated]: asClass(
			CreateDeviceMonitoringOnDeviceCreated
		).singleton(),
		[DomainEventDependencies.InvalidateDeviceMonitoringCacheOnDeviceChanged]: asClass(
			InvalidateDeviceMonitoringCacheOnDeviceChanged
		).singleton(),
		[DomainEventDependencies.SyncDeviceMonitoringStateOnEvents]: asClass(
			SyncDeviceMonitoringStateOnEvents
		).singleton(),
		[DomainEventDependencies.InvalidateAppSettingsCacheOnAppSettingsChanged]: asClass(
			InvalidateAppSettingsCacheOnAppSettingsChanged
		).singleton(),
		[DomainEventDependencies.InvalidateAccessPolicyCacheOnAccessPolicyChanged]: asClass(
			InvalidateAccessPolicyCacheOnAccessPolicyChanged
		).singleton(),
		[DomainEventDependencies.InvalidatePermissionGroupCacheOnPermissionGroupChanged]: asClass(
			InvalidatePermissionGroupCacheOnPermissionGroupChanged
		).singleton(),
		[DomainEventDependencies.InvalidatePermissionCacheOnPermissionChanged]: asClass(
			InvalidatePermissionCacheOnPermissionChanged
		).singleton()
	})
}
