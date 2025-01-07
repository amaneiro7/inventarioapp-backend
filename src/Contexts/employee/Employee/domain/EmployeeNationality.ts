import { EnumValueObject } from "../../../Shared/domain/value-object/EnumValueObject";
import { InvalidArgumentError } from "../../../Shared/domain/value-object/InvalidArgumentError";

export enum Nationalities {
    V = 'V',
    E = 'E',
}
export class EmployeeNationality extends EnumValueObject<Nationalities> {
    constructor(public readonly value: Nationalities) {
        super(value, Object.values(Nationalities))
    }

    protected throwErrorForInvalidValue(value: Nationalities): void {
        throw new InvalidArgumentError(`Invalid nationality: ${value}`)
    }

}