import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type DeviceDto } from '../domain/Device.dto'
import { type DeviceRepository } from '../domain/DeviceRepository'

/**
 * @description Use case for retrieving all Device entities that match a specific set of criteria.
 * This class extends a base service to provide a standardized way of handling criteria-based searches.
 */
export class DeviceSearchByCriteria extends GetAllBaseService<DeviceDto> {
	private readonly deviceRepository: DeviceRepository

	constructor({ deviceRepository }: { deviceRepository: DeviceRepository }) {
		super()
		this.deviceRepository = deviceRepository
	}

	/**
	 * @description Executes the process of finding all devices that match the given criteria.
	 * @param {Criteria} criteria The criteria object for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<DeviceDto>>} A promise that resolves to a paginated response containing Device DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<DeviceDto>> {
		const { data, total } = await this.deviceRepository.matching(criteria)

		return this.response({
			data,
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
