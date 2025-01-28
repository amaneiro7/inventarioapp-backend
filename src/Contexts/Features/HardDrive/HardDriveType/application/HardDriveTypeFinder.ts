import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type HardDriveTypeDto } from '../domain/HardDriveType.dto'
import { type HardDriveTypeRepository } from '../domain/HardDriveTypeRepository'

export class HardDriveTypeFinderAll extends GetAllBaseService<HardDriveTypeDto> {
	constructor(
		private readonly hardDriveTypeRepository: HardDriveTypeRepository
	) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<HardDriveTypeDto>> {
		const { data, total } = await this.hardDriveTypeRepository.searchAll(
			criteria
		)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
