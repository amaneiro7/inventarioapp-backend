import { DeviceEvaluation } from '../entity/DeviceEvaluation'
import type { DeviceComputerDto } from '../../../../Device/domain/dto/Computer.dto'
import type { EvaluationHardwareDeviceDto } from '../entity/EvaluationHardwareDashboard.dto'
import type { MigrationRule } from '../entity/MigrationRule'

// Función auxiliar para el mapeo, podría estar en un archivo de mapeador dedicado o como método estático
export function mapDeviceToEvaluationDto(
	device: DeviceComputerDto,
	ruleEntity: MigrationRule
): EvaluationHardwareDeviceDto {
	const result = ruleEntity.evaluateDeviceCompatibility(device)
	return new DeviceEvaluation(
		device.id,
		device.serial ?? 'Sin serial',
		// location
		device.location?.site?.city?.state?.region?.administrativeRegion?.name || 'N/A',
		device.location?.site?.city?.state?.region?.name || 'N/A',
		device.location?.site?.city?.state?.name || 'N/A',
		device.location?.site?.city?.name || 'N/A',
		device.location?.site?.name || 'N/A',
		device.location?.name || 'N/A',
		// employee
		device.employee?.name || 'N/A',
		device.employee?.lastName || 'N/A',
		device.employee?.userName || 'N/A',
		device.processor?.name || 'N/A',
		`${device.memoryRamCapacity} GB`,
		`${device.hardDriveCapacity?.name || 0} GB`,
		device.computerName || 'N/A',
		device.ipAddress || 'N/A',
		result
	).toPublicJson()
}
