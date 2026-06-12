import { MigrationRule } from '../domain/entity/MigrationRule'
import { ProcessorExistenceChecker } from '../../../../Features/Processor/domain/service/ProcessorExistanceChecker'
import { MigrationRuleActivator } from '../domain/service/MigrationRuleActivator'
import type { EventBus } from '../../../../Shared/domain/event/EventBus'
import type { MigrationRuleParams } from '../domain/entity/MigrationRule.dto'
import type { ProcessorRepository } from '../../../../Features/Processor/domain/repository/ProcessorRepository'
import type { MigrationRuleRepository } from '../domain/repository/MigrationRuleRepository'

/**
 * @description Use case for creating a new MigrationRule entity.
 */
export class MigrationRuleCreator {
	private readonly migrationRuleRepository: MigrationRuleRepository
	private readonly processorExistenceChecker: ProcessorExistenceChecker
	private readonly migrationRuleActivator: MigrationRuleActivator
	private readonly eventBus: EventBus

	constructor({
		migrationRuleRepository,
		processorRepository,
		eventBus
	}: {
		migrationRuleRepository: MigrationRuleRepository
		processorRepository: ProcessorRepository
		eventBus: EventBus
	}) {
		this.migrationRuleRepository = migrationRuleRepository
		this.processorExistenceChecker = new ProcessorExistenceChecker(processorRepository)
		this.migrationRuleActivator = new MigrationRuleActivator(migrationRuleRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the migration rule creation process.
	 * @param {{ params: MigrationRuleParams }} data The parameters for creating the migration rule.
	 * @returns {Promise<void>} A promise that resolves when the migration rule is successfully created.
	 */
	async run({ params }: { params: MigrationRuleParams }): Promise<void> {
		const { approvedProcessors } = params
		const uniqueProcessors = Array.from(new Set(approvedProcessors))
		await Promise.all([this.processorExistenceChecker.ensureExist(uniqueProcessors)])

		const migrationRule = MigrationRule.create({ ...params, approvedProcessors: uniqueProcessors })

		if (migrationRule.isActiveValue) {
			await this.migrationRuleActivator.activate(migrationRule)
		}

		await this.migrationRuleRepository.save(migrationRule.toPrimitives())
		await this.eventBus.publish(migrationRule.pullDomainEvents())
	}
}
