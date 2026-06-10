import type { Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { ResponseDB } from '../../../../../Shared/domain/ResponseType'
import type { DeviceComputerDto } from '../../../../Device/domain/dto/Computer.dto'

export abstract class HardwareEvaluationRepository {
	abstract findPendingDevices: (criteria?: Criteria) => Promise<ResponseDB<DeviceComputerDto>>
}
