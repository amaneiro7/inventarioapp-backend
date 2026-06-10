import { MigrationRuleId } from '../domain/valueObject/MigrationRuleId'
import { MigrationRuleDoesNotExistError } from '../domain/errors/MigrationRuleDoesNotExistError'

import { type MigrationRuleDto } from '../domain/entity/MigrationRule.dto'
import { type MigrationRuleRepository } from '../domain/repository/MigrationRuleRepository'
import { Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @description Use case for finding an MigrationRule entity by its unique identifier.
 */
export class MigrationRuleFinder {
	private readonly migrationRuleRepository: MigrationRuleRepository

	constructor({ migrationRuleRepository }: { migrationRuleRepository: MigrationRuleRepository }) {
		this.migrationRuleRepository = migrationRuleRepository
	}

	/**
	 * @description Executes the MigrationRule finding process.
	 * @param {{ id: Primitives<MigrationRuleId> }} params The parameters for finding the MigrationRule.
	 * @returns {Promise<MigrationRuleDto>} A promise that resolves to the found MigrationRule DTO.
	 * @throws {MigrationRuleDoesNotExistError} If no MigrationRule with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<MigrationRuleId> }): Promise<MigrationRuleDto> {
		const migrationRuleId = new MigrationRuleId(id).value
		const MigrationRule = await this.migrationRuleRepository.findById(migrationRuleId)

		if (!MigrationRule) {
			throw new MigrationRuleDoesNotExistError(migrationRuleId)
		}

		return MigrationRule
	}
}
