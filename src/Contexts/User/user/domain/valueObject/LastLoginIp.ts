import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'

export class LastLoginIp extends AcceptedNullValueObject<string> {
	private readonly IP_ADDRESS_REGEX =
		/^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3}$/

	constructor(value: string | null) {
		super(value)
		this.value = this.cleanIpIfMappped(value)
		this.ensureValidIp(value)
	}

	private ensureValidIp(value: string | null | undefined): void {
		if (value !== null && value !== undefined) {
			// Si el valor ya estaba limpio y no pasa la validación IPv4
			if (!this.IP_ADDRESS_REGEX.test(value)) {
				// throw new InvalidArgumentError(`<${value}> no es una dirección IP válida.`)

				// Si prefieres usar la excepción:
				// throw new InvalidArgumentError(`<${value}> no es una dirección IP válida.`);

				// Si prefieres el valor por defecto:
				this.value = '127.0.0.1' // Default a localhost si es inválido/sucio
			}
		}
	}

	private cleanIpIfMappped(value: string | null): string | null {
		if (value && value.startsWith('::ffff:')) {
			// Utilizamos .substring(7) para eliminar el '::ffff:' (7 caracteres)
			return value.substring(7)
		}
		return value
	}
}
