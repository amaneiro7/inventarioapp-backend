import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type DeviceMonitoringMapped } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'

/**
 * @description Use case for retrieving all DeviceMonitoring entities, mapping them to a display-friendly format.
 */
export class DeviceMonitoringFinderAll extends GetAllBaseService<DeviceMonitoringMapped> {
	private readonly deviceMonitoringRepository: DeviceMonitoringRepository

	constructor({ deviceMonitoringRepository }: { deviceMonitoringRepository: DeviceMonitoringRepository }) {
		super()
		this.deviceMonitoringRepository = deviceMonitoringRepository
	}

	/**
	 * @description Executes the process of finding and mapping all device monitoring records.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<DeviceMonitoringMapped>>} A promise that resolves to a paginated response of mapped device monitoring data.
	 */
	async run(criteria: Criteria): Promise<ResponseService<DeviceMonitoringMapped>> {
		const { data, total } = await this.deviceMonitoringRepository.searchAll(criteria)

		const mappedData = data.map(device => ({
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
		}))

		return this.response({
			data: mappedData,
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
