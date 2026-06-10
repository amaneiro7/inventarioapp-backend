import type { ProcessorDto } from '../../../../../Features/Processor/domain/entity/Processor.dto'
import type { ProcessorId } from '../../../../../Features/Processor/domain/valueObject/ProcessorId'
import type { Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import type { MigrationRuleId } from '../valueObject/MigrationRuleId'
import type { MigrationRuleIsActive } from '../valueObject/MigrationRuleIsActive'
import type { MigrationRuleMinDiskGb } from '../valueObject/MigrationRuleMinDiskGb'
import type { MigrationRuleMinRamGb } from '../valueObject/MigrationRuleMinRamGb'

/**
 * @interface MigrationRule
 * @description Defines the core properties of a MigrationRule entity.
 */
export interface MigrationRule {
	id: Primitives<MigrationRuleId>
	minRamGb: Primitives<MigrationRuleMinRamGb>
	minDiskGb: Primitives<MigrationRuleMinDiskGb>
	isActive: Primitives<MigrationRuleIsActive>
}

export interface EvaluationResult {
	isApto: boolean
	reasons: string[]
}

/**
 * @type MigrationRulePrimitives
 * @description Represents the primitive, serializable state of a MigrationRule entity.
 */
export type MigrationRulePrimitives = MigrationRule & {
	approvedProcessor: Primitives<ProcessorId>[]
}

/**
 * @type MigrationRuleParams
 * @description Represents the parameters required to create a new MigrationRule.
 */
export type MigrationRuleParams = Omit<MigrationRule & { approvedProcessor: Primitives<ProcessorId>[] }, 'id'>

/**
 * @type MigrationRuleDto
 * @description Represents a Data Transfer Object (DTO) for the MigrationRule entity,
 * including associated Processor DTOs.
 */
export type MigrationRuleDto = MigrationRule & {
	approvedProcessor: Omit<ProcessorDto, 'MigrationRules'>[]
}
