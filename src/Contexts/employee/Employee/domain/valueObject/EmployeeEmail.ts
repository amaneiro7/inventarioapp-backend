import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

export class EmployeeEmail extends AcceptedNullStringValueObject {
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
}
