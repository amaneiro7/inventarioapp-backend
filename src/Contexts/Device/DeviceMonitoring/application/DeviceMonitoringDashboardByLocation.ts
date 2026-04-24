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
					const getWeight = (name: string) => {
						const n = name.toLowerCase().trim()
						// Asignamos pesos: bóveda (-2), lobby (-1), sala de conferencia (102), otros (0)
						if (n.includes('bóveda')) return -2
						if (n.includes('lobby')) return -1
						if (n.includes('conferencia')) return 102
						return 0
					}

					const weightA = getWeight(a.name)
					const weightB = getWeight(b.name)

					if (weightA !== weightB) {
						return weightA - weightB
					}

					// 2. Extraer el número de piso usando Regex
					const extractFloor = (name: string): number | null => {
						const match = name.match(/Piso\s*(\d+)/i) // Captura "Piso 11", "Piso11", "Piso 02", etc.
						return match ? parseInt(match[1], 10) : null
					}

					const floorA = extractFloor(a.name)
					const floorB = extractFloor(b.name)

					// 3. Lógica de comparación numérica si hay pisos
					if (floorA !== null || floorB !== null) {
						const valA = floorA ?? 999 // Si no tiene piso, lo mandamos al final del grupo
						const valB = floorB ?? 999
						if (valA !== valB) return valA - valB
					}

					// 4. Fallback alfabético
					return a.name.localeCompare(b.name)
				})
			}))
		}))
	}
}
