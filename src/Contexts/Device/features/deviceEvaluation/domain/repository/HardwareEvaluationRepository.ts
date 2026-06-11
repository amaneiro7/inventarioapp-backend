import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type DeviceComputerDto } from '../../../../Device/domain/dto/Computer.dto'
import { type EvaluationExcelService } from '../entity/EvaluationExcelService.dto'
import { type MigrationRule } from '../entity/MigrationRule'
import { type MigrationRuleId } from '../valueObject/MigrationRuleId'

export abstract class HardwareEvaluationRepository {
	abstract findPendingDevices(rule: MigrationRule, criteria?: Criteria): Promise<ResponseDB<DeviceComputerDto>>

	abstract countDevicesByCompatibility(
		rule: MigrationRule,
		criteria?: Criteria
	): Promise<{ apto: number; noApto: number; total: number }>

	/**
	 * @abstract
	 * @method donwload
	 * @description Generates an Excel file (Buffer) containing device data based on provided criteria.
	 * @param {Criteria} criteria The criteria for filtering the data to be downloaded.
	 * @returns {Promise<Buffer>} A promise that resolves to an Excel file buffer.
	 */
	abstract donwload(evaluations: EvaluationExcelService[], activeRuleId: Primitives<MigrationRuleId>): Promise<Buffer>
}
