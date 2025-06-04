import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type LocationMonitoringDto, type LocationMonitoringPrimitives } from '../entity/LocationMonitoring.dto'

export abstract class LocationMonitoringRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<LocationMonitoringDto>>

	abstract searchById(id: LocationMonitoringDto['id']): Promise<LocationMonitoringDto | null>

	abstract searchNotnullIpAddress(): Promise<LocationMonitoringDto[]>

	abstract save(payload: LocationMonitoringPrimitives): Promise<void>
}
