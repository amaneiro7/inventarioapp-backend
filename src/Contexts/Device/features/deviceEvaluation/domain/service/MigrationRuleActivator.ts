import { MigrationRule } from '../entity/MigrationRule'
import type { MigrationRuleRepository } from '../repository/MigrationRuleRepository'

export class MigrationRuleActivator {
	constructor(private readonly migrationRuleRepository: MigrationRuleRepository) {}

	/**
	 * @description Ensures that only one migration rule is active at a time.
	 * If the provided rule is being activated, it desactivates the currently active rule.
	 */
	async activate(migrationRule: MigrationRule): Promise<void> {
		const currentActiveRule = await this.migrationRuleRepository.findActiveRule()

		if (currentActiveRule && currentActiveRule.id !== migrationRule.toPrimitives().id) {
			const currentActiveRuleEntity = MigrationRule.fromPrimitives(currentActiveRule)
			currentActiveRuleEntity.desactivate()
			await this.migrationRuleRepository.save(currentActiveRuleEntity.toPrimitives())
		}
	}
}
