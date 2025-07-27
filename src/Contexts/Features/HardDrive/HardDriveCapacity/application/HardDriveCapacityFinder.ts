import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type HardDriveCapacityDto } from '../domain/HardDriveCapacity.dto'
import { type HardDriveCapacityRepository } from '../domain/HardDriveCapacityRepository'

/**
 * @description Use case for retrieving all HardDriveCapacity entities.
 */
export class HardDriveCapacityFinderAll extends GetAllBaseService<HardDriveCapacityDto> {
	private readonly hardDriveCapacityRepository: HardDriveCapacityRepository

	constructor({ hardDriveCapacityRepository }: { hardDriveCapacityRepository: HardDriveCapacityRepository }) {
		super()
		this.hardDriveCapacityRepository = hardDriveCapacityRepository
	}

	/**
	 * @description Executes the process of finding all hard drive capacities.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseService<HardDriveCapacityDto>>} A paginated response of hard drive capacities.
	 */
	async run(criteria: Criteria): Promise<ResponseService<HardDriveCapacityDto>> {
		const { data, total } = await this.hardDriveCapacityRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
