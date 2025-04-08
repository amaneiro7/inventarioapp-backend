import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type Employee } from '../entity/Employee'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'

export class EmployeeEmail extends AcceptedNullValueObject<string> {
	private static readonly VALID_EMAIL_REGEX =
		/^(?=.*[@](?:bnc\.com\.ve)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/

	constructor(value: string | null) {
		super(value)

		this.normalizeValue()
		this.ensureIsValidEmail(value)
	}

	private normalizeValue(): void {
		if (this.value !== null) {
			this.value = this.value.toLowerCase().trim()
		}
	}

	toPrimitives(): string | null {
		return this.value
	}

	private ensureIsValidEmail(email: string | null): void {
		if (email !== null && !EmployeeEmail.VALID_EMAIL_REGEX.test(email)) {
			throw new InvalidArgumentError(`<${email}> no es un correo electrónico válido`)
		}
	}

	static async updateEmailField({
		repository,
		email,
		entity
	}: {
		repository: EmployeeRepository
		email?: Primitives<EmployeeEmail>
		entity: Employee
	}): Promise<void> {
		if (email === undefined || email === entity.emailValue) {
			return
		}
		await EmployeeEmail.ensureEmailDoesNotExist({ repository, email })
		entity.updateEmail(email)
	}

	static async ensureEmailDoesNotExist({
		repository,
		email
	}: {
		repository: EmployeeRepository
		email: Primitives<EmployeeEmail>
	}): Promise<void> {
		if (email === null) {
			return
		}
		const existingEmployee = await repository.searchByEmail(new EmployeeEmail(email).value)
		if (existingEmployee !== null) {
			throw new EmployeeAlreadyExistError(email)
		}
	}
}
