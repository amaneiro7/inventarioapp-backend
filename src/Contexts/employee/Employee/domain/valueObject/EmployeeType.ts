import { EnumValueObject } from "../../../../Shared/domain/value-object/EnumValueObject";
import { InvalidArgumentError } from "../../../../Shared/domain/value-object/InvalidArgumentError";

export enum EmployeeTypes {
    GENERIC = 'generic',
    REGULAR = 'regular',
    SERVICE = 'service'
}

export class EmployeeType extends EnumValueObject<EmployeeTypes> {

    constructor(public readonly value: EmployeeTypes) {
        super(value, Object.values(EmployeeTypes))
    }

    protected throwErrorForInvalidValue(value: EmployeeTypes): void {
        throw new InvalidArgumentError(`Invalid employee type: ${value}`)
    }
}