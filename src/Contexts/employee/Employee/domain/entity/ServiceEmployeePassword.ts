import { InvalidArgumentError } from "../../../../Shared/domain/value-object/InvalidArgumentError";
import { Primitives } from "../../../../Shared/domain/value-object/Primitives";
import { EmployeeId } from "../valueObject/EmployeeId";
import { Password } from "./Password";

export class ServiceEmployeePassword {
    constructor(
        private readonly empployeeId: EmployeeId,
        private password: Password,
    ) { }

    get employeePasswordValue(): Primitives<Password> {
        return this.password.value
    }
    get employeeEmployeeValue(): Primitives<EmployeeId> {
        return this.empployeeId.value
    }

    updatePassword({
        oldPassword,
        newPassword,
        reTypePassword
    }: {
        oldPassword: Primitives<Password>
        newPassword: Primitives<Password>
        reTypePassword: Primitives<Password>
    }): void {
        if (oldPassword === newPassword) {
            throw new InvalidArgumentError("La contraseña es igual a la anterior")
        }
        if (newPassword === reTypePassword) {
            throw new InvalidArgumentError('La nueva contraseña y la contraseña de confirmación no coinciden')
        }
        if (oldPassword !== newPassword) {
            this.password = new Password(newPassword)
        }
    }
}