import { asClass, type AwilixContainer } from 'awilix'
import { RestartMonitoringServices } from '../../../Contexts/Shared/application/event/RestartMonitoringServices'
import { InvalidateBrandCacheOnBrandChanged } from '../../../Contexts/Brand/application/InvalidateBrandCacheOnBrandChanged'

export enum DomainEventDependencies {
	RestartMonitoringServices = 'restartMonitoringServices',
	InvalidateBrandCacheOnBrandChanged = 'invalidateBrandCacheOnBrandChanged'
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
		).singleton()
	})
}
