import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type HardDriveCapacityDto } from '../domain/HardDriveCapacity.dto'
import { type HardDriveCapacityRepository } from '../domain/HardDriveCapacityRepository'

export class HardDriveCapacityFinderAll extends GetAllBaseService<HardDriveCapacityDto> {
	private readonly hardDriveCapacityRepository: HardDriveCapacityRepository
	constructor({ hardDriveCapacityRepository }: { hardDriveCapacityRepository: HardDriveCapacityRepository }) {
		super()
		this.hardDriveCapacityRepository = hardDriveCapacityRepository
	}

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
