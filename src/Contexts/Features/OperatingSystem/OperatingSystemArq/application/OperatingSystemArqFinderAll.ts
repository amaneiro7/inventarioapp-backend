import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type OperatingSystemArqDto } from '../domain/OperatingSystemArq.dto'
import { type OperatingSystemArqRepository } from '../domain/OperatingSystemArqRepository'

/**
 * @description Use case for retrieving all OperatingSystemArq entities.
 */
export class OperatingSystemArqFinderAll extends GetAllBaseService<OperatingSystemArqDto> {
	private readonly operatingSystemArqRepository: OperatingSystemArqRepository

	constructor({ operatingSystemArqRepository }: { operatingSystemArqRepository: OperatingSystemArqRepository }) {
		super()
		this.operatingSystemArqRepository = operatingSystemArqRepository
	}

	/**
	 * @description Executes the process of finding all operating system architectures.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseService<OperatingSystemArqDto>>} A paginated response of operating system architectures.
	 */
	async run(criteria: Criteria): Promise<ResponseService<OperatingSystemArqDto>> {
		const { data, total } = await this.operatingSystemArqRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
