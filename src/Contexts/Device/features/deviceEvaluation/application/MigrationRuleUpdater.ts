import { ProcessorExistenceChecker } from '../../../../Features/Processor/domain/service/ProcessorExistanceChecker'
import { ProcessorId } from '../../../../Features/Processor/domain/valueObject/ProcessorId'
import { MigrationRuleActivator } from '../domain/service/MigrationRuleActivator'
import { MigrationRule } from '../domain/entity/MigrationRule'
import { MigrationRuleDoesNotExistError } from '../domain/errors/MigrationRuleDoesNotExistError'
import { MigrationRuleId } from '../domain/valueObject/MigrationRuleId'
import type { ProcessorRepository } from '../../../../Features/Processor/domain/repository/ProcessorRepository'
import type { EventBus } from '../../../../Shared/domain/event/EventBus'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { MigrationRuleParams, MigrationRulePrimitives } from '../domain/entity/MigrationRule.dto'
import type { MigrationRuleRepository } from '../domain/repository/MigrationRuleRepository'

/**
 * @description Use case for updating an existing MigrationRule entity.
 */
export class MigrationRuleUpdater {
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
	 * @description Executes the migration rule update process.
	 * @param {{ id: Primitives<MigrationRuleId>; params: Partial<MigrationRuleParams> }} data The parameters for updating the migration rule.
	 * @returns {Promise<void>} A promise that resolves when the migration rule is successfully updated.
	 * @throws {MigrationRuleDoesNotExistError} If the migration rule with the provided ID does not exist.
	 */
	async run({
		id,
		params
	}: {
		id: Primitives<MigrationRuleId>
		params: Partial<MigrationRuleParams>
	}): Promise<void> {
		const migrationRuleId = new MigrationRuleId(id)
		// Guardamos el estado previo para la lógica de negocio posterior
		const migrationRule = await this.migrationRuleRepository.findById(migrationRuleId.value)

		if (!migrationRule) {
			throw new MigrationRuleDoesNotExistError(id)
		}

		const migrationRuleEntity = MigrationRule.fromPrimitives(migrationRule)
		const changes: Array<{ field: keyof MigrationRulePrimitives; oldValue: unknown; newValue: unknown }> = []

		// Validaciones de unicidad pasando el ID actual para excluirlo de la búsqueda
		if (params.minRamGb !== undefined && migrationRuleEntity.minRamGbValue !== params.minRamGb) {
			changes.push({
				field: 'minRamGb',
				oldValue: migrationRuleEntity.minRamGbValue,
				newValue: params.minRamGb
			})
			migrationRuleEntity.updateMinRamGb(params.minRamGb)
		}

		if (params.minDiskGb !== undefined && migrationRuleEntity.minDiskGbValue !== params.minDiskGb) {
			changes.push({
				field: 'minDiskGb',
				oldValue: migrationRuleEntity.minDiskGbValue,
				newValue: params.minDiskGb
			})
			migrationRuleEntity.updateMinDiskGb(params.minDiskGb)
		}

		if (params.isActive !== undefined && migrationRuleEntity.isActiveValue !== params.isActive) {
			changes.push({
				field: 'isActive',
				oldValue: migrationRuleEntity.isActiveValue,
				newValue: params.isActive
			})
			if (params.isActive) {
				await this.migrationRuleActivator.activate(migrationRuleEntity)
			}
			migrationRuleEntity.updateIsActive(params.isActive)
		}

		if (params.approvedProcessor !== undefined) {
			await this.processorExistenceChecker.ensureExist(params.approvedProcessor)
			changes.push({
				field: 'approvedProcessors',
				oldValue: migrationRuleEntity.approvedProcessorValue,
				newValue: params.approvedProcessor
			})
			const uniqueProcessors = Array.from(new Set(params.approvedProcessor))
			const newIdSet = new Set(uniqueProcessors)
			const currentIdSet = new Set(migrationRuleEntity.approvedProcessorValue)

			// Añadir procesadores nuevos
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					migrationRuleEntity.addProcessor(new ProcessorId(id))
				}
			}

			// Eliminar procesadores que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					migrationRuleEntity.removeProcessor(new ProcessorId(id))
				}
			}
		}
		if (changes.length > 0) {
			migrationRuleEntity.registerUpdateEvent(changes)
			await this.migrationRuleRepository.save(migrationRuleEntity.toPrimitives())
			await this.eventBus.publish(migrationRuleEntity.pullDomainEvents())
		}
	}
}
