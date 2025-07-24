import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type DeviceMonitoringMapped } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'

export class DeviceMonitoringFinderAll extends GetAllBaseService<DeviceMonitoringMapped> {
	private readonly deviceMonitoringRepository: DeviceMonitoringRepository
	constructor({ deviceMonitoringRepository }: { deviceMonitoringRepository: DeviceMonitoringRepository }) {
		super()
		this.deviceMonitoringRepository = deviceMonitoringRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<DeviceMonitoringMapped>> {
		const { data, total } = await this.deviceMonitoringRepository.searchAll(criteria)

		return this.response({
			data: data.map(device => ({
				id: device.id,
				status: device.status,
				deviceId: device.deviceId,
				computerName: device.device?.computer?.computerName ?? '',
				ipAddress: device.device?.computer?.ipAddress ?? '',
				location: device.device?.location,
				employee: device.device?.employee,
				lastScan: device.lastScan,
				lastSuccess: device.lastSuccess,
				lastFailed: device.lastFailed
			})),
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
