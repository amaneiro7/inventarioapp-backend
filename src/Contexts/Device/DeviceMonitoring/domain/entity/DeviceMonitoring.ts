import { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { DeviceId } from '../../../Device/domain/DeviceId'
import { DeviceLocation } from '../../../Device/domain/DeviceLocation'
import { DeviceMonitoringComputerName } from '../valueObject/DeviceMonitoringComputerName'
import { DeviceMonitoringId } from '../valueObject/DeviceMonitoringId'
import { DeviceMonitoringIpAddress } from '../valueObject/DeviceMonitoringIpAddress'
import { DeviceMonitoringLastFailed } from '../valueObject/DeviceMonitoringLastFailed'
import { DeviceMonitoringLastSuccess } from '../valueObject/DeviceMonitoringLastSuccess'
import { DeviceMonitoringStatus } from '../valueObject/DeviceMonitoringStatus'
import {
	type DeviceMonitoringDto,
	type DeviceMonitoringParams,
	type DeviceMonitoringPrimitives
} from './DeviceMonitoring.dto'

export class DeviceMonitoring {
	constructor(
		private readonly id: DeviceMonitoringId,
		private readonly deviceId: DeviceId,
		private status: DeviceMonitoringStatus,
		private computerName: DeviceMonitoringComputerName,
		private ipAddress: DeviceMonitoringIpAddress,
		private locationId: DeviceLocation,
		private lastSuccess: DeviceMonitoringLastSuccess,
		private lastFailed: DeviceMonitoringLastFailed
	) {}

	static create(params: DeviceMonitoringParams): DeviceMonitoring {
		const id = DeviceMonitoringId.random().value
		return new DeviceMonitoring(
			new DeviceMonitoringId(id),
			new DeviceId(params.deviceId),
			new DeviceMonitoringStatus(params.status),
			new DeviceMonitoringComputerName(params.computerName),
			new DeviceMonitoringIpAddress(params.ipAddress),
			new DeviceLocation(params.locationId),
			new DeviceMonitoringLastSuccess(params.lastSuccess),
			new DeviceMonitoringLastFailed(params.lastFailed)
		)
	}
	static fromPrimitives(primitives: DeviceMonitoringDto): DeviceMonitoring {
		return new DeviceMonitoring(
			new DeviceMonitoringId(primitives.id),
			new DeviceId(primitives.deviceId),
			new DeviceMonitoringStatus(primitives.status),
			new DeviceMonitoringComputerName(primitives.computerName),
			new DeviceMonitoringIpAddress(primitives.ipAddress),
			new DeviceLocation(primitives.locationId),
			new DeviceMonitoringLastSuccess(primitives.lastSuccess),
			new DeviceMonitoringLastFailed(primitives.lastFailed)
		)
	}

	toPrimitive(): DeviceMonitoringPrimitives {
		return {
			id: this.idValue,
			deviceId: this.deviceValue,
			status: this.statusValue,
			computerName: this.computerNameValue,
			ipAddress: this.ipAddressValue,
			locationId: this.locationValue,
			lastSuccess: this.lastSuccessValue,
			lastFailed: this.lastFailedValue
		}
	}

	get idValue(): Primitives<DeviceMonitoringId> {
		return this.id.value
	}
	get deviceValue(): Primitives<DeviceId> {
		return this.deviceId.value
	}
	get statusValue(): Primitives<DeviceMonitoringStatus> {
		return this.status.value
	}
	get computerNameValue(): Primitives<DeviceMonitoringComputerName> {
		return this.computerName.value
	}
	get ipAddressValue(): Primitives<DeviceMonitoringIpAddress> {
		return this.ipAddress.value
	}
	get locationValue(): Primitives<DeviceLocation> {
		return this.locationId.value
	}
	get lastSuccessValue(): Primitives<DeviceMonitoringLastSuccess> {
		return this.lastSuccess.value
	}
	get lastFailedValue(): Primitives<DeviceMonitoringLastFailed> {
		return this.lastFailed.value
	}

	updateStatus(newStatus: Primitives<DeviceMonitoringStatus>): void {
		this.status = new DeviceMonitoringStatus(newStatus)
	}
	updateComputerName(newComputerName: Primitives<DeviceMonitoringComputerName>): void {
		this.computerName = new DeviceMonitoringComputerName(newComputerName)
	}
	updateIpAddress(newIpAddress: Primitives<DeviceMonitoringIpAddress>): void {
		this.ipAddress = new DeviceMonitoringIpAddress(newIpAddress)
	}
	updateLocationId(newLocation: Primitives<DeviceLocation>): void {
		this.locationId = new DeviceLocation(newLocation)
	}
	updateLastSuccess(newLastSuccess: Primitives<DeviceMonitoringLastSuccess>): void {
		this.lastSuccess = new DeviceMonitoringLastSuccess(newLastSuccess)
	}
	updateLastFailed(newLastFailed: Primitives<DeviceMonitoringLastFailed>): void {
		this.lastFailed = new DeviceMonitoringLastFailed(newLastFailed)
	}
}
