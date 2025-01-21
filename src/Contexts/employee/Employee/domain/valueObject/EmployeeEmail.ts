import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { EmployeePrimitives } from '../entity/Employee'
import { RegularEmployee } from '../entity/RegularEmployee'

export class EmployeeEmail extends StringValueObject {
	private readonly validEmailRegExp =
		/^(?=.*[@](?:bnc\.com\.ve)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/

	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidEmail(value)
	}

	toPrimitives(): string {
		return this.value
	}

	private ensureIsValidEmail(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid email`)
		}
	}

	private isValid(name: string): boolean {
		return this.validEmailRegExp.test(name)
	}

	static async updateEmailField({
		repository,
		email,
		entity
	}: {
		repository: EmployeeRepository
		email?: Primitives<EmployeeEmail>
		entity: RegularEmployee
	}): Promise<void> {
		// Si se ha pasado un nuevo correo y es diferente al actual se actualiza
		if (!!email && entity.emailValue !== email) {
			// Verifica que el Email no exista en la base de datos, si existe lanza un error {@link DeviceAlreadyExistError} con el Email pasado
			await EmployeeEmail.ensureEmailDoesNotExit({ repository, email })
			// Actualiza el campo Email de la entidad {@link Device} con el nuevo Email
			entity.updateEmail(email)
		}
	}

	static async ensureEmailDoesNotExit({
		repository,
		email
	}: {
		repository: EmployeeRepository
		email: Primitives<EmployeeEmail>
	}): Promise<void> {
		// Searches for a device with the given Email in the database
		const userWithEmail: Nullable<EmployeePrimitives> =
			await repository.searchByEmail(new EmployeeEmail(email).value)
		// If a device with the given Email exists, it means that it already exists in the database,
		// so we need to throw a {@link DeviceAlreadyExistError} with the given Email
		if (userWithEmail !== null) {
			throw new EmployeeAlreadyExistError(email)
		}
	}
}
