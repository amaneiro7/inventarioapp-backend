import { asClass, type AwilixContainer } from 'awilix'
import { RestartMonitoringServices } from '../../../Contexts/Shared/application/event/RestartMonitoringServices'

export enum DomainEventDependencies {
	RestartMonitoringServices = 'restartMonitoringServices'
}

/**
 * @description Registra todos los suscriptores de eventos de dominio en el contenedor de dependencias.
 * @param container El contenedor de Awilix.
 */
export const register = (container: AwilixContainer) => {
	// Registra cada suscriptor como una clase.
	container.register({
		[DomainEventDependencies.RestartMonitoringServices]: asClass(RestartMonitoringServices).singleton()
	})
}
