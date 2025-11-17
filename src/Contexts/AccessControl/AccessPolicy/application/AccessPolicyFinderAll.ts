import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type AccessPolicyDto } from '../domain/entity/AccessPolicy.dto'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'

export class AccessPolicyFinderAll extends GetAllBaseService<AccessPolicyDto> {
	private readonly accessPolicyRepository: AccessPolicyRepository
	constructor({ accessPolicyRepository }: { accessPolicyRepository: AccessPolicyRepository }) {
		super()
		this.accessPolicyRepository = accessPolicyRepository
	}

	/**
	 * @description Executes the process of finding all AccessPolicy entities.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<AccessPolicyDto>>} A paginated response of AccessPolicy DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<AccessPolicyDto>> {
		const { data, total } = await this.accessPolicyRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
