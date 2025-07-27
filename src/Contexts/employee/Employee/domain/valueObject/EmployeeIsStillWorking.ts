import { BooleanValueObject } from '../../../../Shared/domain/value-object/BooleanValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Employee } from '../entity/Employee'

/**
 * @description Represents whether an employee is still working.
 */
export class EmployeeIsStillWorking extends BooleanValueObject {
	/**
	 * @description Handles the logic for updating the 'isStillWorking' field of an employee.
	 * @param {{ isStillWorking?: Primitives<EmployeeIsStillWorking>; entity: Employee }} params The parameters for updating.
	 */
	static updateIsStillWorkingFieldField({
		isStillWorking,
		entity
	}: {
		isStillWorking?: Primitives<EmployeeIsStillWorking>
		entity: Employee
	}): void {
		if (isStillWorking !== undefined && entity.isStillWorkingValue !== isStillWorking) {
			entity.updateIsStillWorking(isStillWorking)
		}
	}
}
