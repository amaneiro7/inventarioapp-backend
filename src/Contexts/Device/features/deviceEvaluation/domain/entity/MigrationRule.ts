import { ProcessorId } from '../../../../../Features/Processor/domain/valueObject/ProcessorId'
import { AggregateRoot } from '../../../../../Shared/domain/AggregateRoot'
import { MigrationRuleId } from '../valueObject/MigrationRuleId'
import { MigrationRuleIsActive } from '../valueObject/MigrationRuleIsActive'
import { MigrationRuleMinDiskGb } from '../valueObject/MigrationRuleMinDiskGb'
import { MigrationRuleMinRamGb } from '../valueObject/MigrationRuleMinRamGb'
import { MigrationRuleCreatedDomainEvent } from '../event/MigrationRuleCreatedDomainEvent'
import { MigrationRuleRemovedDomainEvent } from '../event/MigrationRuleRemovedDomainEvent'
import type {
	EvaluationResult,
	MigrationRuleDto,
	MigrationRuleParams,
	MigrationRulePrimitives
} from './MigrationRule.dto'
import { MigrationRuleUpdatedDomainEvent } from '../event/MigrationRuleUpdatedDomainEvent'
import { MigrationRuleProcessorAddedDomainEvent } from '../event/MigrationRuleProcessorAddedDomainEvent'
import { MigrationRuleProcessorRemovedDomainEvent } from '../event/MigrationRuleProcessorRemovedDomainEvent'
import type { DeviceComputerDto } from '../../../../Device/domain/dto/Computer.dto'

export class MigrationRule extends AggregateRoot {
	constructor(
		private readonly id: MigrationRuleId,
		private minRamGb: MigrationRuleMinRamGb,
		private minDiskGb: MigrationRuleMinDiskGb,
		private approvedProcessor = new Set<ProcessorId>(),
		private isActive: MigrationRuleIsActive
	) {
		super()
	}

	static create(params: MigrationRuleParams): MigrationRule {
		const id = MigrationRuleId.random()
		const minRamGb = new MigrationRuleMinRamGb(params.minRamGb)
		const minDiskGb = new MigrationRuleMinDiskGb(params.minDiskGb)
		const approvedProcessor = new Set(params.approvedProcessors.map(id => new ProcessorId(id)))
		// Por defecto, una nueva regla de migración se crea como activa
		const isActive = new MigrationRuleIsActive(true)

		const migrationRule = new MigrationRule(id, minRamGb, minDiskGb, approvedProcessor, isActive)

		migrationRule.record(
			new MigrationRuleCreatedDomainEvent({
				aggregateId: id.value,
				minRamGb: minRamGb.value,
				minDiskGb: minDiskGb.value,
				isActive: isActive.value,
				approvedProcessors: params.approvedProcessors
			})
		)

		return migrationRule
	}

	static fromPrimitives(primitives: MigrationRuleDto): MigrationRule {
		const uniqueProcessor = new Set(primitives.approvedProcessors.map(p => new ProcessorId(p.id)))
		return new MigrationRule(
			new MigrationRuleId(primitives.id),
			new MigrationRuleMinRamGb(primitives.minRamGb),
			new MigrationRuleMinDiskGb(primitives.minDiskGb),
			uniqueProcessor,
			new MigrationRuleIsActive(primitives.isActive)
		)
	}

	toPrimitives(): MigrationRulePrimitives {
		return {
			id: this.idValue,
			minRamGb: this.minRamGbValue,
			minDiskGb: this.minDiskGbValue,
			isActive: this.isActiveValue,
			approvedProcessors: this.approvedProcessorValue
		}
	}

	/**
	 *
	 */
	public evaluateDeviceCompatibility(deviceSpecs: DeviceComputerDto): EvaluationResult {
		const reasons: string[] = []
		const isRamOk = deviceSpecs.memoryRamCapacity >= this.minRamGbValue

		// Intentamos obtener el valor numérico del disco si el nombre viene como "120 GB"
		const diskNameValue = deviceSpecs.hardDriveCapacity?.name ? Number(deviceSpecs.hardDriveCapacity.name) : 0

		const isDiskOk = diskNameValue >= this.minDiskGbValue

		const isProcessorOk = deviceSpecs.processorId
			? this.approvedProcessorValue.includes(deviceSpecs.processorId)
			: false
		if (!isRamOk) {
			reasons.push(
				`RAM Insuficiente (${deviceSpecs?.memoryRamCapacity} GB de ${this.minRamGbValue} GB requeridos)`
			)
		}
		if (!isDiskOk) {
			reasons.push(`Espacio de disco insuficiente (${diskNameValue} GB de ${this.minDiskGbValue} GB requeridos)`)
		}
		if (!isProcessorOk) {
			reasons.push(`Procesador no homolgado para Windows 10 (${deviceSpecs?.processor?.name || 'desconocido'})`)
		}

		return {
			isApto: isRamOk && isDiskOk && isProcessorOk,
			isRamOk,
			isDiskOk,
			isProcessorOk,
			reasons
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new MigrationRuleUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	get idValue(): MigrationRuleId['value'] {
		return this.id.value
	}

	get minRamGbValue(): MigrationRuleMinRamGb['value'] {
		return this.minRamGb.value
	}

	get minDiskGbValue(): MigrationRuleMinDiskGb['value'] {
		return this.minDiskGb.value
	}

	get isActiveValue(): MigrationRuleIsActive['value'] {
		return this.isActive.value
	}

	get approvedProcessorValue(): ProcessorId['value'][] {
		return Array.from(this.approvedProcessor).map(id => id.value)
	}

	private hasProcessor(processorId: ProcessorId): boolean {
		return [...this.approvedProcessor].some(p => p.equals(processorId))
	}

	updateMinRamGb(newMinRamGb: MigrationRuleMinRamGb['value']): void {
		const newMinRamGbVO = new MigrationRuleMinRamGb(newMinRamGb)
		if (this.minRamGb.equals(newMinRamGbVO)) {
			return // No hay cambio, evita eventos innecesarios
		}
		this.minRamGb = newMinRamGbVO
	}

	updateMinDiskGb(newMinDiskGb: MigrationRuleMinDiskGb['value']): void {
		const newMinDiskGbVO = new MigrationRuleMinDiskGb(newMinDiskGb)
		if (this.minDiskGb.equals(newMinDiskGbVO)) {
			return // No hay cambio, evita eventos innecesarios
		}
		this.minDiskGb = newMinDiskGbVO
	}

	updateIsActive(newIsActive: MigrationRuleIsActive['value']): void {
		const newIsActiveVO = new MigrationRuleIsActive(newIsActive)
		if (this.isActive.equals(newIsActiveVO)) {
			return // No hay cambio, evita eventos innecesarios
		}
		this.isActive = newIsActiveVO
	}

	/**
	 * Regla de negocio: Desactivar explícitamente la regla
	 */
	public desactivate(): void {
		this.isActive = new MigrationRuleIsActive(false)
	}

	/**
	 * Regla de negocio: Activar explícitamente la regla
	 */
	public activate(): void {
		this.isActive = new MigrationRuleIsActive(true)
	}

	/**
	 * @description Marks the Unidad as deleted and records the domain event.
	 */
	delete(): void {
		this.record(
			new MigrationRuleRemovedDomainEvent({
				aggregateId: this.id.value,
				minRamGb: this.minRamGb.value,
				minDiskGb: this.minDiskGb.value,
				isActive: this.isActive.value,
				approvedProcessor: this.approvedProcessorValue
			})
		)
	}

	/**
	 * @description Associates a new processor with the MigrationRule.
	 * @param {ProcessorId} processorId The processor to add.
	 */
	addProcessor(processorId: ProcessorId): void {
		if (this.hasProcessor(processorId)) {
			return // Evita duplicados y eventos innecesarios
		}
		this.approvedProcessor.add(processorId)
		this.record(
			new MigrationRuleProcessorAddedDomainEvent({
				aggregateId: this.id.value,
				processorId: processorId.value
			})
		)
	}

	/**
	 * @description Removes a processor association from the MigrationRule.
	 * @param {ProcessorId} processorId The processor to remove.
	 */
	removeProcessor(processorId: ProcessorId): void {
		const processorToRemove = [...this.approvedProcessor].find(c => c.equals(processorId))
		if (processorToRemove) {
			this.approvedProcessor.delete(processorToRemove)
			this.record(
				new MigrationRuleProcessorRemovedDomainEvent({
					aggregateId: this.id.value,
					processorId: processorId.value
				})
			)
		}
	}
}
