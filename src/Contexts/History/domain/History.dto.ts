import { type DeviceDto } from '../../Device/Device/domain/Device.dto'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type UserDto } from '../../User/user/domain/User.dto'
import { type ActionType } from './HistoryAction'
import { type HistoryEmployee } from './HistoryEmployee'
import { type HistoryId } from './HistoryId'
import { type DeviceId } from '../../Device/Device/domain/DeviceId'
import { type UserId } from '../../User/user/domain/UserId'
import { type CreatedAt } from './CreatedAt'

/**
 * @interface History
 * @description Represents the primitive structure of a History record.
 */
export interface History {
	id: Primitives<HistoryId>
	deviceId: Primitives<DeviceId>
	userId: Primitives<UserId>
	employeeId: Primitives<HistoryEmployee> | null
	action: ActionType
	/** @description A snapshot of the data before the change occurred. */
	oldData: Record<string, unknown>
	/** @description A snapshot of the data after the change occurred. */
	newData: Record<string, unknown>
	createdAt: Primitives<CreatedAt>
}

export type HistoryPrimitives = History

/**
 * @description Parameters needed to create a new History record.
 */
export type HistoryParams = Omit<History, 'id'>

/**
 * @interface HistoryDto
 * @extends History
 * @description Data Transfer Object for a History record, including related entities.
 */
export type HistoryDto = History & {
	employee: UserDto | null // Assuming employee is a UserDto
	device: DeviceDto
	user: UserDto
	/** @description An object detailing the specific fields that were changed. */
	cambios?: Record<string, { oldValue: unknown; newValue: unknown }>
}
