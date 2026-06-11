import { MigrationRule } from '../domain/entity/MigrationRule'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { mapDeviceToEvaluationDto } from '../domain/service/mapDeviceToEvaluationDto'
import type { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import type { HardwareEvaluationRepository } from '../domain/repository/HardwareEvaluationRepository'
import type { MigrationRuleRepository } from '../domain/repository/MigrationRuleRepository'
import type { EvaluationExcelService } from '../domain/entity/EvaluationExcelService.dto'

/**
 * @description Service for generating an Excel file (Buffer) containing device data based on specified criteria.
 */
export class EvaluationHardwareExcelService {
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
	/**
	 * @description Executes the Excel file generation process.
	 * @param {Criteria} criteria The criteria object containing filters and orderings.
	 * @returns {Promise<Buffer>} A promise that resolves to a Buffer containing the Excel file data.
	 */
	async run(criteria: Criteria): Promise<Buffer> {
		// Creamos un nuevo Criteria sin paginación (limit/offset) para descargar todo
		const activeRuleDto = await this.migrationRuleRepository.findActiveRule()
		if (!activeRuleDto) {
			throw new InvalidArgumentError('No se encontró una regla de migración activa para generar el reporte.')
		}

		const ruleEntity = MigrationRule.fromPrimitives(activeRuleDto)
		const { data: devices } = await this.hardwareEvaluationRepository.findPendingDevices(
			ruleEntity,
			criteria.withoutPagination()
		)

		const evaluations: EvaluationExcelService[] = devices.map(device => {
			const result = ruleEntity.evaluateDeviceCompatibility(device)
			const {
				employee: { lastName, name, userName },
				hardware: { computerName, disk, ipAddress, processor, ram },
				location: { administrativeRegion, region, state, city, site, location },
				serial
			} = mapDeviceToEvaluationDto(device, ruleEntity)
			return {
				Serial: serial ?? 'Sin serial',
				Activo: device.activo || 'N/A',
				'Región Administrativa': administrativeRegion || 'N/A',
				Región: region || 'N/A',
				Estado: state || 'N/A',
				Ciudad: city || 'N/A',
				Sitio: site || 'N/A',
				Ubicación: location || 'N/A',
				Responsable: `${name || ''} ${lastName || ''}`.trim() || 'N/A',
				Usuario: userName || 'Sin usuario asignado',
				Hostname: computerName || 'N/A',
				IP: ipAddress || 'N/A',
				Procesador: processor || 'N/A',
				'RAM (GB)': ram,
				'Disco (GB)': disk || 0,
				'RAM OK': result.isRamOk ? 'SÍ' : 'NO',
				'Disco OK': result.isDiskOk ? 'SÍ' : 'NO',
				'Procesador OK': result.isProcessorOk ? 'SÍ' : 'NO',
				'Estado Final': result.isApto ? 'APTO' : 'NO APTO'
			}
		})

		return await this.hardwareEvaluationRepository.donwload(evaluations, activeRuleDto.id)
	}
}
