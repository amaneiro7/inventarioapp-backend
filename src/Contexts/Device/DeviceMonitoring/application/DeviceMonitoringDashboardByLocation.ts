import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardByLocationData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByLocationRepository } from '../domain/repository/DeviceMonitoringDashboardByLocationRepository'

/**
 * @description Use case for retrieving aggregated device monitoring data grouped by location.
 */
export class DeviceMonitoringDashboardByLocation {
	private readonly deviceMonitoringDashboardByLocationRepository: DeviceMonitoringDashboardByLocationRepository

	constructor({
		deviceMonitoringDashboardByLocationRepository
	}: {
		deviceMonitoringDashboardByLocationRepository: DeviceMonitoringDashboardByLocationRepository
	}) {
		this.deviceMonitoringDashboardByLocationRepository = deviceMonitoringDashboardByLocationRepository
	}

	/**
	 * @description Executes the dashboard data retrieval process, grouped by location.
	 * @param {Criteria} criteria The criteria to filter the dashboard data.
	 * @returns {Promise<DashboardByLocationData>} A promise that resolves to the location-based dashboard data.
	 */
	async run(criteria: Criteria): Promise<DashboardByLocationData> {
		const data = await this.deviceMonitoringDashboardByLocationRepository.run(criteria)
		return this.sortedData(data)
	}

	private sortedData(data: DashboardByLocationData): DashboardByLocationData {
		return data.map(region => ({
			...region,
			sites: region.sites.map(site => ({
				...site,
				locations: site.locations.sort((a, b) => {
					// 1. Definimos pesos para casos especiales
					// Pesos altos para que aparezcan al final
					const getWeight = (name: string) => {
						const n = name.toLowerCase()
						if (n.includes('bóveda')) return -1
						if (n.includes('lobby')) return -2
						if (n.includes('salas de conferencia')) return 99
						return 0
					}

					const weightA = getWeight(a.name)
					const weightB = getWeight(b.name)

					if (weightA !== weightB) {
						return weightA - weightB
					}

					// 2. Extraer el número de piso usando Regex
					const extractFloor = (name: string): number | null => {
						const match = name.match(/Piso\s+(\d+)/i)
						return match ? parseInt(match[1], 10) : null
					}

					const floorA = extractFloor(a.name)
					const floorB = extractFloor(b.name)

					if (floorA !== null && floorB !== null) {
						if (floorA === floorB) {
							return a.name.localeCompare(b.name) // Si están en el mismo piso, ordenar alfabéticamente
						}
						return floorA - floorB // Ordenar por número de piso
					}

					return a.name.localeCompare(b.name)
				})
			}))
		}))
	}
}
