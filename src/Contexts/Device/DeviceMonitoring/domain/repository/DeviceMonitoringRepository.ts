import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DeviceMonitoringDto, type DeviceMonitoringPrimitives } from '../entity/DeviceMonitoring.dto'

export abstract class DeviceMonitoringRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<DeviceMonitoringDto>>

	abstract searchById(id: DeviceMonitoringDto['id']): Promise<DeviceMonitoringDto>

	abstract save(payload: DeviceMonitoringPrimitives): Promise<void>
}
