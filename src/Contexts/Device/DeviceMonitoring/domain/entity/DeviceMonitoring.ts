import { Monitoring } from '../../../../Shared/domain/Monitoring/domain/entity/Monitoring'
import { MonitoringId } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { DeviceId } from '../../../Device/domain/valueObject/DeviceId'
import { MonitoringStatus } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { MonitoringLastSuccess } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastSuccess'
import { MonitoringLastFailed } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastFailed'
import { MonitoringLastScan } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastScan'
import {
	type DeviceMonitoringDto,
	type DeviceMonitoringParams,
	type DeviceMonitoringPrimitives
} from './DeviceMonitoring.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { DeviceMonitoringCreatedDomainEvent } from '../event/DeviceMonitoringCreatedDomainEvent'

/**
 * @class DeviceMonitoring
 * @extends Monitoring
 * @description Represents the DeviceMonitoring domain entity, extending the base Monitoring entity.
 */
export class DeviceMonitoring extends Monitoring {
	constructor(
		id: MonitoringId,
		private readonly deviceId: DeviceId,
		status: MonitoringStatus,
		lastScan: MonitoringLastScan,
		lastSuccess: MonitoringLastSuccess,
		lastFailed: MonitoringLastFailed
	) {
		super(id, status, lastScan, lastSuccess, lastFailed)
	}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new `DeviceMonitoring` instance.
	 * @param {DeviceMonitoringParams} params The parameters for creating the entity.
	 * @returns {DeviceMonitoring} A new `DeviceMonitoring` instance.
	 */
	static create(params: DeviceMonitoringParams): DeviceMonitoring {
		const deviceMonitoring = new DeviceMonitoring(
			MonitoringId.random(),
			new DeviceId(params.deviceId),
			new MonitoringStatus(params.status),
			new MonitoringLastScan(params.lastScan),
			new MonitoringLastSuccess(params.lastSuccess),
			new MonitoringLastFailed(params.lastFailed)
		)

		deviceMonitoring.record(
			new DeviceMonitoringCreatedDomainEvent({
				aggregateId: deviceMonitoring.idValue,
				deviceId: params.deviceId,
				status: params.status
			})
		)

		return deviceMonitoring
	}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `DeviceMonitoring` instance from its primitive representation.
	 * @param {DeviceMonitoringDto} primitives The primitive data.
	 * @returns {DeviceMonitoring} A `DeviceMonitoring` instance.
	 */
	static fromPrimitives(primitives: DeviceMonitoringDto): DeviceMonitoring {
		return new DeviceMonitoring(
			new MonitoringId(primitives.id),
			new DeviceId(primitives.deviceId),
			new MonitoringStatus(primitives.status),
			new MonitoringLastScan(primitives.lastScan),
			new MonitoringLastSuccess(primitives.lastSuccess),
			new MonitoringLastFailed(primitives.lastFailed)
		)
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `DeviceMonitoring` instance into its primitive representation.
	 * @returns {DeviceMonitoringPrimitives} The primitive representation.
	 */
	toPrimitives(): DeviceMonitoringPrimitives {
		return {
			id: this.idValue,
			deviceId: this.deviceValue,
			status: this.statusValue,
			lastScan: this.lastScanValue,
			lastSuccess: this.lastSuccessValue,
			lastFailed: this.lastFailedValue
		}
	}

	/**
	 * @getter deviceValue
	 * @description Returns the primitive value of the device's ID.
	 * @returns {Primitives<DeviceId>}
	 */
	get deviceValue(): Primitives<DeviceId> {
		return this.deviceId.value
	}
}
