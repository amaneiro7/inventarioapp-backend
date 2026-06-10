import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type DeviceComputerDto } from '../../../../Device/domain/dto/Computer.dto'
import { type MigrationRule } from '../entity/MigrationRule'

export interface HardwareEvaluationRepository {
	findPendingDevices(rule: MigrationRule, criteria?: Criteria): Promise<ResponseDB<DeviceComputerDto>>

	countDevicesByCompatibility(
		rule: MigrationRule,
		criteria?: Criteria
	): Promise<{ apto: number; noApto: number; total: number }>
}
