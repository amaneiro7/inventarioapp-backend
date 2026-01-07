import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type HardDriveTypeDto } from '../domain/entity/HardDriveType.dto'
import { type HardDriveTypeRepository } from '../domain/repository/HardDriveTypeRepository'

/**
 * @description Use case for retrieving all HardDriveType entities.
 */
export class HardDriveTypeFinderAll extends GetAllBaseService<HardDriveTypeDto> {
	private readonly hardDriveTypeRepository: HardDriveTypeRepository

	constructor({ hardDriveTypeRepository }: { hardDriveTypeRepository: HardDriveTypeRepository }) {
		super()
		this.hardDriveTypeRepository = hardDriveTypeRepository
	}

	/**
	 * @description Executes the process of finding all hard drive types.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseService<HardDriveTypeDto>>} A paginated response of hard drive types.
	 */
	async run(criteria: Criteria): Promise<ResponseService<HardDriveTypeDto>> {
		const { data, total } = await this.hardDriveTypeRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
