import { NumberValueObject } from '../../../../../Shared/domain/value-object/NumberValueObject'

export class MigrationRuleMinDiskGb extends NumberValueObject {
	constructor(value: number) {
		super(value)
		this.ensureIsPositive(value)
		this.ensureIsInteger(value)
	}
}
