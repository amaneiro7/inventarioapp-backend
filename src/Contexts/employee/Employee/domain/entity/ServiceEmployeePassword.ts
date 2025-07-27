import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { EmployeeId } from '../valueObject/EmployeeId'
import { Password } from './Password'

/**
 * @description Service for managing an employee's password.
 */
export class ServiceEmployeePassword {
	constructor(
		private readonly empployeeId: EmployeeId,
		private password: Password
	) {}

	get employeePasswordValue(): Primitives<Password> {
		return this.password.value
	}

	get employeeEmployeeValue(): Primitives<EmployeeId> {
		return this.empployeeId.value
	}

	/**
	 * @description Updates the employee's password.
	 * @param {{ oldPassword: Primitives<Password>; newPassword: Primitives<Password>; reTypePassword: Primitives<Password> }} params The parameters for updating the password.
	 * @throws {InvalidArgumentError} If the new password is the same as the old one, or if new passwords do not match.
	 */
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
			throw new InvalidArgumentError('La nueva contraseña no puede ser igual a la anterior.')
		}
		if (newPassword !== reTypePassword) {
			throw new InvalidArgumentError('La nueva contraseña y la confirmación de la contraseña no coinciden.')
		}
		this.password = new Password(newPassword)
	}
}
