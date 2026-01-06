import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type MemoryRamTypeDto } from '../domain/entity/MemoryRam.dto'
import { type MemoryRamTypeRepository } from '../domain/repository/MemoryRamTypeRepository'

/**
 * @description Use case for retrieving all MemoryRamType entities.
 */
export class MemoryRamTypeFinderAll extends GetAllBaseService<MemoryRamTypeDto> {
	private readonly memoryRamTypeRepository: MemoryRamTypeRepository

	constructor({ memoryRamTypeRepository }: { memoryRamTypeRepository: MemoryRamTypeRepository }) {
		super()
		this.memoryRamTypeRepository = memoryRamTypeRepository
	}

	/**
	 * @description Executes the process of finding all memory RAM types.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseService<MemoryRamTypeDto>>} A paginated response of memory RAM types.
	 */
	async run(criteria: Criteria): Promise<ResponseService<MemoryRamTypeDto>> {
		const { data, total } = await this.memoryRamTypeRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
