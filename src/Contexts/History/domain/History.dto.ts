import { type DeviceDto } from '../../Device/Device/domain/Device.dto'
import { type DeviceId } from '../../Device/Device/domain/DeviceId'
import { type EmployeeDto } from '../../employee/Employee/domain/entity/Employee.dto'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type UserId } from '../../User/user/domain/UserId'
import { type ActionType } from './HistoryAction'
import { type HistoryEmployee } from './HistoryEmployee'
import { type HistoryId } from './HistoryId'

export interface History {
	id: Primitives<HistoryId>
	deviceId: Primitives<DeviceId>
	userId: Primitives<UserId>
	employeeId: Primitives<HistoryEmployee>
	action: ActionType
	oldData: object
	newData: object
	createdAt: Date
}

export type HistoryPrimitives = History

export type HistoryParams = Omit<History, 'id'>

export type HistoryDto = History & {
	employee: EmployeeDto
	device: DeviceDto
}
