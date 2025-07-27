import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type DeviceDto } from '../domain/Device.dto'
import { type DeviceRepository } from '../domain/DeviceRepository'

/**
 * @description Use case for retrieving all Device entities, with support for criteria-based filtering, sorting, and pagination.
 */
export class DevicesFinderAll extends GetAllBaseService<DeviceDto> {
	private readonly deviceRepository: DeviceRepository

	constructor({ deviceRepository }: { deviceRepository: DeviceRepository }) {
		super()
		this.deviceRepository = deviceRepository
	}

	/**
	 * @description Executes the process of finding all devices based on the provided criteria.
	 * @param {Criteria} criteria The criteria object for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<DeviceDto>>} A promise that resolves to a paginated response containing Device DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<DeviceDto>> {
		const { data, total } = await this.deviceRepository.searchAll(criteria)

		return this.response({
			total,
			data,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
