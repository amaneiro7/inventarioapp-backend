import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import type { MigrationRuleRepository } from '../domain/repository/MigrationRuleRepository'
import type { ResponseService } from '../../../../Shared/domain/ResponseType'
import type { MigrationRuleDto } from '../domain/entity/MigrationRule.dto'
import type { Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @description Use case for retrieving all MigrationRule entities.
 */
export class MigrationRulesFinderAll extends GetAllBaseService<MigrationRuleDto> {
	private readonly migrationRuleRepository: MigrationRuleRepository

	constructor({ migrationRuleRepository }: { migrationRuleRepository: MigrationRuleRepository }) {
		super()
		this.migrationRuleRepository = migrationRuleRepository
	}

	/**
	 * @description Executes the process of finding all MigrationRule entities.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<MigrationRuleDto>>} A paginated response of MigrationRule DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<MigrationRuleDto>> {
		const { data, total } = await this.migrationRuleRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
