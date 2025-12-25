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

export enum DomainEventDependencies {
	RestartMonitoringServices = 'restartMonitoringServices',
	InvalidateBrandCacheOnBrandChanged = 'invalidateBrandCacheOnBrandChanged',
	InvalidateModelSeriesCacheOnModelSeriesChanged = 'invalidateModelSeriesCacheOnModelSeriesChanged',
	InvalidateShipmentCacheOnShipmentChanged = 'invalidateShipmentCacheOnShipmentChanged',
	InvalidateCityCacheOnCityChanged = 'invalidateCityCacheOnCityChanged',
	InvalidateSiteCacheOnSiteChanged = 'invalidateSiteCacheOnSiteChanged',
	InvalidateRegionCacheOnRegionChanged = 'invalidateRegionCacheOnRegionChanged',
	InvalidateLocationCacheOnLocationChanged = 'invalidateLocationCacheOnLocationChanged',
	CreateLocationMonitoringOnLocationCreated = 'createLocationMonitoringOnLocationCreated'
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
		).singleton()
	})
}
