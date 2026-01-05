import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type DirectivaRepository } from '../domain/repository/DirectivaRepository'
import { type DirectivaDto } from '../domain/entity/Directiva.dto'

/**
 * @description Use case for retrieving all Directiva entities.
 */
export class DirectivaFinderAll extends GetAllBaseService<DirectivaDto> {
	private readonly directivaRepository: DirectivaRepository

	constructor({ directivaRepository }: { directivaRepository: DirectivaRepository }) {
		super()
		this.directivaRepository = directivaRepository
	}

	/**
	 * @description Executes the process of finding all Directiva entities.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<DirectivaDto>>} A paginated response of Directiva entities.
	 */
	async run(criteria: Criteria): Promise<ResponseService<DirectivaDto>> {
		const { data, total } = await this.directivaRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
