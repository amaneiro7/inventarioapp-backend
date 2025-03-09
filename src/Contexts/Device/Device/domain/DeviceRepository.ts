import { type ComputerName } from '../../../Features/Computer/domain/ComputerName'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DevicePrimitives, type DeviceDto } from './Device.dto'
import { type DeviceId } from './DeviceId'
import { type DeviceSerial } from './DeviceSerial'

export abstract class DeviceRepository {
	abstract save(payload: DevicePrimitives): Promise<void>

	abstract searchById(deviceId: Primitives<DeviceId>): Promise<DeviceDto | null>

	abstract searchByActivo(serial: Primitives<DeviceSerial>): Promise<DeviceDto | null>

	abstract searchBySerial(activo: Primitives<DeviceSerial>): Promise<DeviceDto | null>

	abstract searchByComputerName(name: Primitives<ComputerName>): Promise<DeviceDto | null>

	abstract searchAll(criteria: Criteria): Promise<ResponseDB<DeviceDto>>

	abstract matching(criteria: Criteria): Promise<ResponseDB<DeviceDto>>

	abstract donwload(criteria: Criteria): Promise<{}>

	abstract remove(deviceId: Primitives<DeviceId>): Promise<void>
}
