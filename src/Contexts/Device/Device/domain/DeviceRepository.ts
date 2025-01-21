import { type ComputerName } from '../../../Features/Computer/domain/ComputerName'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DevicePrimitives } from './Device'
import { type DeviceId } from './DeviceId'
import { type DeviceSerial } from './DeviceSerial'

export abstract class DeviceRepository {
	abstract save(payload: DevicePrimitives): Promise<void>

	abstract searchById(
		deviceId: Primitives<DeviceId>
	): Promise<Nullable<DevicePrimitives>>

	abstract searchByActivo(
		serial: Primitives<DeviceSerial>
	): Promise<Nullable<DevicePrimitives>>

	abstract searchBySerial(
		activo: Primitives<DeviceSerial>
	): Promise<Nullable<DevicePrimitives>>

	abstract searchByComputerName(
		name: Primitives<ComputerName>
	): Promise<Nullable<DevicePrimitives>>

	abstract searchAll(): Promise<DevicePrimitives[]>

	abstract matching(
		criteria: Criteria
	): Promise<{ total: number; data: DevicePrimitives[] }>

	abstract donwload(criteria: Criteria): Promise<{}>

	abstract remove(deviceId: Primitives<DeviceId>): Promise<void>
}
