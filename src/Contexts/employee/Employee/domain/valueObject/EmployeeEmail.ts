import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type Employee } from '../entity/Employee'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { EmployeeAlreadyExistError } from '../Errors/EmployeeAlreadyExistError'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'

export class EmployeeEmail extends AcceptedNullValueObject<string> {
	// Expresión regular base para un correo electrónico válido.
	private static readonly BASE_EMAIL_REGEX =
		/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/

	constructor(value: string | null, allowedDomains?: string[]) {
		super(value)

		this.normalizeValue()
		this.ensureIsValidEmailFormat(value)
		this.ensureIsValidDomain(value, allowedDomains)
	}

	private normalizeValue(): void {
		if (this.value !== null) {
			this.value = this.value.toLowerCase().trim()
		}
	}

	toPrimitives(): string | null {
		return this.value
	}

	private ensureIsValidEmailFormat(email: string | null): void {
		if (email !== null && !EmployeeEmail.BASE_EMAIL_REGEX.test(email)) {
			throw new InvalidArgumentError(`<${email}> no es un correo electrónico válido`)
		}
	}

	private ensureIsValidDomain(email: string | null, allowedDomains?: string[]): void {
		// Si no se proporcionan dominios permitidos o el email es nulo, no se realiza la validación.
		if (!allowedDomains || allowedDomains.length === 0 || email === null) {
			return
		}

		const domain = email.split('@')[1]
		if (!domain || !allowedDomains.includes(domain)) {
			throw new InvalidArgumentError(
				`El dominio del correo '<${domain}>' no es válido. Dominios permitidos: ${allowedDomains.join(', ')}`
			)
		}
	}

	// --- Mover la lógica de estos métodos a los Casos de Uso (Application Layer) ---

	static async updateEmailField({
		repository,
		email,
		entity,
		allowedDomains
	}: {
		repository: EmployeeRepository
		email?: Primitives<EmployeeEmail>
		entity: Employee
		allowedDomains?: string[]
	}): Promise<void> {
		if (email === undefined || email === entity.emailValue) {
			return
		}
		if (email !== null) {
			await EmployeeEmail.ensureEmailDoesNotExist({ repository, email })
			entity.updateEmail(email, allowedDomains)
		} else if (entity.emailValue !== null) {
			entity.updateEmail(null)
		}
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
		const criteria = await CreateCriteria.execute({
			filters: [
				{ field: 'email', operator: Operator.EQUAL, value: email },
				{ field: 'isStillWorking', operator: Operator.EQUAL, value: true }
			]
		})
		const existingEmployee = await repository.searchByQuery(criteria)
		if (existingEmployee !== null) {
			throw new EmployeeAlreadyExistError(email)
		}
	}
}
