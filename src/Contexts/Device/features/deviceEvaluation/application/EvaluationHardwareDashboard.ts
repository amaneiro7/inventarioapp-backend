import { MigrationRule } from '../domain/entity/MigrationRule'
import { DeviceEvaluation } from '../domain/entity/DeviceEvaluation'
import type {
	EvaluationHardwareDashboardResponse,
	EvaluationHardwareDeviceDto
} from '../domain/entity/EvaluationHardwareDashboard.dto'
import type { MigrationRuleRepository } from '../domain/repository/MigrationRuleRepository'
import type { HardwareEvaluationRepository } from '../domain/repository/HardwareEvaluationRepository'
import type { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import type { DeviceComputerDto } from '../../../Device/domain/dto/Computer.dto'

// Función auxiliar para el mapeo, podría estar en un archivo de mapeador dedicado o como método estático
function mapDeviceToEvaluationDto(device: DeviceComputerDto, ruleEntity: MigrationRule): EvaluationHardwareDeviceDto {
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
}

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

	async run(criteria: Criteria): Promise<EvaluationHardwareDashboardResponse> {
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

		// 2. Obtener los conteos de aptos/no aptos para el resumen del dashboard
		// Estos conteos deben ser para el universo completo de dispositivos que coinciden con los criterios generales,
		// sin aplicar el filtro 'isApto' o 'isNoApto' que se usaría para la paginación.
		// Para esto, pasamos un Criteria sin los filtros de aptitud específicos.
		// const criteriaForSummary = criteria
		// 	? criteria.withoutFilter('isApto', 'isNoApto', 'isRamApto', 'isDiskApto', 'isProcessorApto')
		// 	: undefined

		const criteriaForSummary = criteria.withoutPagination()
		const { data: allPendingDevices, total: totalSummary } =
			await this.hardwareEvaluationRepository.findPendingDevices(ruleEntity, criteriaForSummary)

		// 3. Con el listado de todos los devices hacer el conteo
		let apto = 0
		let noApto = 0

		allPendingDevices.forEach(device => {
			const result = ruleEntity.evaluateDeviceCompatibility(device)
			if (result.isApto) apto++
			else noApto++
		})

		// 3. Obtener los dispositivos paginados y filtrados (incluyendo filtros de aptitud si existen)
		// El repositorio debe aplicar la lógica de compatibilidad de la regla y los filtros de aptitud
		const { data: paginatedDevices, total: totalPaginatedDevices } =
			await this.hardwareEvaluationRepository.findPendingDevices(ruleEntity, criteria)

		// 4. Mapear los dispositivos obtenidos a DTOs de evaluación
		const allEvaluations: EvaluationHardwareDeviceDto[] = paginatedDevices.map(device =>
			mapDeviceToEvaluationDto(device, ruleEntity)
		)

		return {
			migrationRule: activeRuleDto,
			summary: {
				total: totalSummary, // Total de todos los dispositivos evaluables
				apto,
				noApto
			},
			devices: allEvaluations,
			info: {
				total: totalPaginatedDevices, // Total de dispositivos en la lista paginada (después de filtros de aptitud)
				page:
					criteria?.pageNumber === undefined || criteria?.pageNumber === null || criteria?.pageNumber === 0
						? 1
						: criteria?.pageNumber,
				totalPage: this.calcularPaginas(totalPaginatedDevices, criteria?.pageSize)
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
