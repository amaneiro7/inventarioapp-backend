import { MigrationRule } from '../domain/entity/MigrationRule'
import { DeviceEvaluation } from '../domain/entity/DeviceEvaluation'
import type {
	EvaluationHardwareDashboardResponse,
	EvaluationHardwareDeviceDto
} from '../domain/entity/EvaluationHardwareDashboard.dto'
import type { MigrationRuleRepository } from '../domain/repository/MigrationRuleRepository'
import type { HardwareEvaluationRepository } from '../domain/repository/HardwareEvaluationRepository'
import type { Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class EvaluationHardwareDashboard {
	private readonly migrationRuleRepository: MigrationRuleRepository
	private readonly hardwareEvaluationRepository: HardwareEvaluationRepository

	constructor({
		migrationRuleRepository,
		hardwareEvaluationRepository
	}: {
		migrationRuleRepository: MigrationRuleRepository
		hardwareEvaluationRepository: HardwareEvaluationRepository
	}) {
		this.migrationRuleRepository = migrationRuleRepository
		this.hardwareEvaluationRepository = hardwareEvaluationRepository
	}

	async run(criteria?: Criteria): Promise<EvaluationHardwareDashboardResponse> {
		// 1. Obtener la regla activa
		const activeRuleDto = await this.migrationRuleRepository.findActiveRule()
		if (!activeRuleDto) {
			return {
				message: 'No active migration rule found.',
				summary: { total: 0, apto: 0, noApto: 0 },
				devices: [],
				info: { total: 0, page: 1, totalPage: 1 }
			}
		}

		const ruleEntity = MigrationRule.fromPrimitives(activeRuleDto)

		// 2. Obtener dispositivos pendientes (usamos el repo especializado)
		// IMPORTANTE: Obtenemos el universo completo sin paginación para calcular los totales reales
		const { data: pendingDevices, total: totalPendingDevices } =
			await this.hardwareEvaluationRepository.findPendingDevices(criteria)
		const repoCriteriaWithoutPagination = criteria ? criteria.withoutPagination() : undefined
		const { data: allPendingDevices, total } =
			await this.hardwareEvaluationRepository.findPendingDevices(repoCriteriaWithoutPagination)

		// 3. Con el listado de todos los devices hacer el conteo
		let apto = 0
		let noApto = 0

		allPendingDevices.forEach(device => {
			const result = ruleEntity.evaluateDeviceCompatibility(device)
			if (result.isApto) apto++
			else noApto++
		})

		// Solo los devices que han sido paginados
		const allEvaluations: EvaluationHardwareDeviceDto[] = pendingDevices.map(device => {
			const result = ruleEntity.evaluateDeviceCompatibility(device)

			return new DeviceEvaluation(
				device.id,
				device.serial ?? 'Sin serial',
				device.location?.name || 'N/A',
				device.employee?.userName || 'N/A',
				device.processor?.name || 'N/A',
				`${device.memoryRamCapacity} GB`,
				`${device.hardDriveCapacity?.name || 0} GB`,
				device.computerName || 'N/A',
				device.ipAddress || 'N/A',
				result
			).toPublicJson()
		})

		return {
			migrationRule: activeRuleDto,
			summary: {
				total,
				apto,
				noApto
			},
			devices: allEvaluations,
			info: {
				total: totalPendingDevices,
				page:
					criteria?.pageNumber === undefined || criteria?.pageNumber === null || criteria?.pageNumber === 0
						? 1
						: criteria?.pageNumber,
				totalPage: this.calcularPaginas(totalPendingDevices, criteria?.pageSize)
			}
		}
	}

	calcularPaginas(totalElementos: number, pageSize?: number | null): number {
		// si el pageSize es null o 0, devuelve 1 pagina ya que esta devolviendo todos los elementos de la lista
		if (!pageSize || pageSize === 0) return 1
		// Calcula el número de páginas redondeando hacia arriba
		return Math.ceil(totalElementos / pageSize)
	}
}
