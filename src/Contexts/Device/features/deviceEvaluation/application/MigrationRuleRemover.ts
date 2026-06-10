import { MigrationRuleId } from '../domain/valueObject/MigrationRuleId'
import { MigrationRuleDoesNotExistError } from '../domain/errors/MigrationRuleDoesNotExistError'
import { MigrationRule } from '../domain/entity/MigrationRule'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { MigrationRuleRepository } from '../domain/repository/MigrationRuleRepository'
import type { EventBus } from '../../../../Shared/domain/event/EventBus'

/**
 * @description Use case for removing an MigrationRule entity.
 */
export class MigrationRuleRemover {
	private readonly migrationRuleRepository: MigrationRuleRepository
	private readonly eventBus: EventBus

	constructor({
		migrationRuleRepository,
		eventBus
	}: {
		migrationRuleRepository: MigrationRuleRepository
		eventBus: EventBus
	}) {
		this.migrationRuleRepository = migrationRuleRepository
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the MigrationRule removal process.
	 * @param {{ id: Primitives<MigrationRuleId> }} params The parameters for removing the MigrationRule.
	 * @returns {Promise<void>} A promise that resolves when the MigrationRule is successfully removed.
	 */
	async run({ id }: { id: Primitives<MigrationRuleId> }): Promise<void> {
		const migrationRuleId = new MigrationRuleId(id).value
		const migrationRule = await this.migrationRuleRepository.findById(migrationRuleId)

		if (!migrationRule) {
			throw new MigrationRuleDoesNotExistError(migrationRuleId)
		}
		const migrationRuleEntity = MigrationRule.fromPrimitives(migrationRule)
		migrationRuleEntity.delete()
		await this.migrationRuleRepository.remove(migrationRuleId)
		await this.eventBus.publish(migrationRuleEntity.pullDomainEvents())
	}
}
