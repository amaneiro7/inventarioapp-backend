import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type DevicePrimitives } from './Device'

export abstract class DeviceRepository {
  abstract save(payload: DevicePrimitives): Promise<void>

  abstract searchById(deviceId: string): Promise<Nullable<DevicePrimitives>>

  abstract searchAll(): Promise<DevicePrimitives[]>

  abstract matching(criteria: Criteria): Promise<{ total: number; data: DevicePrimitives[] }>

  abstract donwload(criteria: Criteria): Promise<{}>

  abstract remove(deviceId: string): Promise<void>
}
