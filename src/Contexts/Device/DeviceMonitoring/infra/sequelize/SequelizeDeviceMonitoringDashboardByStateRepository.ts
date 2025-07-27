import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { DeviceMonitoringDashboardByStateAssociation } from './DeviceMonitoringDashboardByStateAssociation'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type StateData, type DashboardByStateData } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByStateRepository } from '../../domain/repository/DeviceMonitoringDashboardByStateRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

// --- Type definitions for clarity and type safety ---

// Represents the structure of each record returned by the database query.
interface DeviceCountByState {
	statusName: (typeof MonitoringStatuses)[keyof typeof MonitoringStatuses]
	stateName: string
	count: string | number // The count can be a string from some DB drivers.
}

// Represents the accumulator's structure during the reduce operation.
interface AggregatedData {
	total: number
	[MonitoringStatuses.ONLINE]: number
	[MonitoringStatuses.OFFLINE]: number
	[MonitoringStatuses.NOTAVAILABLE]: number
	[MonitoringStatuses.HOSTNAME_MISMATCH]: number
	byStateMap: Map<string, StateData>
}

export class SequelizeDeviceMonitoringDashboardByStateRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringDashboardByStateRepository
{
	private readonly cacheKey: string = 'deviceMonitoringDashboardBySTate'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}
	async run(criteria: Criteria): Promise<DashboardByStateData> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringDashboardByStateAssociation.buildDashboardFindOptions(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				// Cast the result of findAll to our specific type for type safety.
				const devices = (await DeviceMonitoringModel.findAll(opt)) as unknown as DeviceCountByState[]

				// Define the initial state for the aggregation, now strongly typed.
				const initialState: AggregatedData = {
					total: 0,
					[MonitoringStatuses.ONLINE]: 0,
					[MonitoringStatuses.OFFLINE]: 0,
					[MonitoringStatuses.NOTAVAILABLE]: 0,
					[MonitoringStatuses.HOSTNAME_MISMATCH]: 0,
					// Se utiliza un Map para almacenar y acceder a los datos por estado de forma eficiente (O(1) en promedio).
					byStateMap: new Map<string, StateData>()
				}

				// Utiliza el método `reduce` para transformar la lista de dispositivos en un objeto agregado.
				// Este enfoque es más funcional y evita la necesidad de múltiples bucles y variables temporales.
				const aggregatedData = devices.reduce(
					(acc: AggregatedData, device: DeviceCountByState): AggregatedData => {
						const { statusName, stateName, count } = device
						const countNumber = Number(count)

						// Acumula el total general y los contadores de estado (ONLINE/OFFLINE).
						acc.total += countNumber
						acc[statusName] += countNumber

						// Busca el estado actual en el Map. Si no existe, lo inicializa.
						let stateData = acc.byStateMap.get(stateName)
						if (!stateData) {
							stateData = {
								stateName,
								total: 0,
								onlineCount: 0,
								offlineCount: 0
							}
							acc.byStateMap.set(stateName, stateData)
						}

						// Actualiza los contadores para el estado específico.
						stateData.total += countNumber
						if (statusName === MonitoringStatuses.ONLINE) {
							stateData.onlineCount += countNumber
						} else if (statusName === MonitoringStatuses.OFFLINE) {
							stateData.offlineCount += countNumber
						}

						return acc
					},
					initialState
				)

				// Convierte el Map de `byStateMap` a un array y lo ordena alfabéticamente por nombre de estado.
				const byStateArray = Array.from(aggregatedData.byStateMap.values()).sort((a, b) =>
					a.stateName.localeCompare(b.stateName)
				)

				// Devuelve el objeto final con la estructura esperada por el DTO `DashboardByStateData`.
				return {
					total: aggregatedData.total,
					[MonitoringStatuses.ONLINE]: aggregatedData[MonitoringStatuses.ONLINE],
					[MonitoringStatuses.OFFLINE]: aggregatedData[MonitoringStatuses.OFFLINE],
					byState: byStateArray
				}
			}
		})
	}
}
