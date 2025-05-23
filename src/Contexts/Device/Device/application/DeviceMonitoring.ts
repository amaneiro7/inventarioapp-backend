import { schedule } from 'node-cron'
import { MainCategoryList } from '../../../Category/MainCategory/domain/MainCategory'
import { ComputerName } from '../../../Features/Computer/domain/ComputerName'
import { IPAddress } from '../../../Features/Computer/domain/IPAddress'
import { LocationId } from '../../../Location/Location/domain/LocationId'
import { CreateCriteria } from '../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../Shared/domain/criteria/FilterOperator'
import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StatusOptions } from '../../Status/domain/StatusOptions'
import { DeviceId } from '../domain/DeviceId'
import { DeviceRepository } from '../domain/DeviceRepository'
import { PingService } from './PingService'
import { Queue, Job } from 'bull'

interface DeviceStatus {
	id: Primitives<DeviceId>
	status: 'online' | 'offline'
	computerName: Primitives<ComputerName> | undefined
	ipAddress: Primitives<IPAddress> | undefined
	locationId: Primitives<LocationId>
	lastResponse: Date | null
}

export class DeviceMonitoring {
	private pingQueue: Queue
	constructor(
		private readonly deviceRepository: DeviceRepository,
		private readonly pingService: PingService = new PingService()
	) {}

	async run() {
		const criteria = await CreateCriteria.execute({
			filters: [
				{ field: 'mainCategoryId', operator: Operator.EQUAL, value: MainCategoryList.COMPUTER },
				{ field: 'statusId', operator: Operator.EQUAL, value: StatusOptions.INUSE }
			]
		})

		const { data } = await this.deviceRepository.matching(criteria)
		const deviceStatuses: DeviceStatus[] = await Promise.all(
			data.map(async device => {
				let status: 'online' | 'offline' = 'offline'
				let lastResponse: Date | null = null

				if (device?.computer?.ipAddress) {
					try {
						const isOnline = await this.pingService.pingIp({ ipAddress: device.computer.ipAddress })
						status = isOnline ? 'online' : 'offline'
						lastResponse = new Date()
					} catch (error) {
						console.error(`Error pinging device ${device.id} (${device.computer?.ipAddress}):`, error)
						status = 'offline'
						lastResponse = new Date()
					}
				} else {
					console.warn(`Device ${device.id} has no IP address to ping.`)
				}

				return {
					id: device.id,
					status,
					computerName: device?.computer?.computerName,
					ipAddress: device?.computer?.ipAddress,
					locationId: device.locationId,
					lastResponse
				}
			})
		)

		return deviceStatuses
	}
}
