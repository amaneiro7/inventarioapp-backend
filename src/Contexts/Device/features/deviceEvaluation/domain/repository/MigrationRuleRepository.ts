import { GenericRepository } from '../../../../../Shared/domain/GenericRepository'
import type { Nullable } from '../../../../../Shared/domain/Nullable'
import type { MigrationRuleDto } from '../entity/MigrationRule.dto'
import type { MigrationRuleId } from '../valueObject/MigrationRuleId'

export abstract class MigrationRuleRepository extends GenericRepository<MigrationRuleDto> {
	/**
	 * Finds multiple migration rules by their specific IDs.
	 *
	 * @param ids - The array of primitive migration rule IDs to search for.
	 * @returns A promise that resolves to an array of matching MigrationRule DTOs.
	 */
	abstract findByIds: (ids: Array<MigrationRuleId['value']>) => Promise<MigrationRuleDto[]>
	abstract findActiveRule(): Promise<Nullable<MigrationRuleDto>>
}
