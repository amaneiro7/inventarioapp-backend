import { BooleanValueObject } from '../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Employee } from '../entity/Employee'

export class EmployeeIsStillWorking extends BooleanValueObject {
	static async updateIsStillWorkingFieldField({
		isStillWorking,
		entity
	}: {
		isStillWorking?: Primitives<EmployeeIsStillWorking>
		entity: Employee
	}): Promise<void> {
		// Solo si se ha pasado un nuevo nombre y es diferente al actual se actualiza
		if (isStillWorking !== undefined && entity.isStillWorkingValue !== isStillWorking) {
			entity.updateIsStillWorking(isStillWorking)
		}
	}
}
