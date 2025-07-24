import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type MemoryRamTypeDto } from '../domain/MemoryRam.dto'
import { type MemoryRamTypeRepository } from '../domain/MemoryRamTypeRepository'

export class MemoryRamTypeFinderAll extends GetAllBaseService<MemoryRamTypeDto> {
	private readonly memoryRamTypeRepository: MemoryRamTypeRepository
	constructor({ memoryRamTypeRepository }: { memoryRamTypeRepository: MemoryRamTypeRepository }) {
		super()
		this.memoryRamTypeRepository = memoryRamTypeRepository
	}

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
