import { type ComputerName } from '../../../Features/Computer/domain/ComputerName'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceDto, type DeviceParams } from './Device.dto'
import { type DeviceId } from './DeviceId'
import { type DeviceSerial } from './DeviceSerial'

export abstract class DeviceRepository {
	abstract save(payload: DeviceParams): Promise<void>

	abstract searchById(
		deviceId: Primitives<DeviceId>
	): Promise<Nullable<DeviceDto>>

	abstract searchByActivo(
		serial: Primitives<DeviceSerial>
	): Promise<Nullable<DeviceDto>>

	abstract searchBySerial(
		activo: Primitives<DeviceSerial>
	): Promise<Nullable<DeviceDto>>

	abstract searchByComputerName(
		name: Primitives<ComputerName>
	): Promise<Nullable<DeviceDto>>

	abstract searchAll(): Promise<DeviceDto[]>

	abstract matching(
		criteria: Criteria
	): Promise<{ total: number; data: DeviceDto[] }>

	abstract donwload(criteria: Criteria): Promise<{}>

	abstract remove(deviceId: Primitives<DeviceId>): Promise<void>
}
