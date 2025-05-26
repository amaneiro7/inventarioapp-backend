import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationDto } from '../../../../Location/Location/domain/Location.dto'
import { type DeviceMonitoring } from './DeviceMonitoring'

export type DeviceMonitoringType = {
	id: Primitives<DeviceMonitoring['id']>
	deviceId: Primitives<DeviceMonitoring['deviceId']>
	ipAddress: Primitives<DeviceMonitoring['ipAddress']>
	locationId: Primitives<DeviceMonitoring['locationId']>
	computerName: Primitives<DeviceMonitoring['computerName']>
	status: Primitives<DeviceMonitoring['status']>
	lastSuccess: Primitives<DeviceMonitoring['lastSuccess']>
	lastFailed: Primitives<DeviceMonitoring['lastFailed']>
}

export type DeviceMonitoringPrimitives = DeviceMonitoringType

export type DeviceMonitoringParams = Omit<DeviceMonitoringType, 'id'>

export type DeviceMonitoringDto = DeviceMonitoringType & {
	location: LocationDto
}
