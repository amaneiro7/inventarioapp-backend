import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'

export class LastLoginIp extends AcceptedNullValueObject<string> {
	private readonly IP_ADDRESS_REGEX =
		/^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3}$/

	constructor(value: string | null) {
		// Primero llama al constructor padre, que asignará el valor temporalmente.
		super(value)
		// Luego, valida y/o transforma el valor.
		this.ensureValidIp(value)
	}

	private ensureValidIp(value: string | null | undefined): void {
		// Si el valor es null o undefined, es válido para este ValueObject, así que no hacemos nada.
		if (value === null || value === undefined) {
			return
		}

		const normalizedValue = this.normalizeIp(value)

		// Si el valor limpio no es una IP v4 válida, lanzamos un error.
		if (!this.IP_ADDRESS_REGEX.test(normalizedValue)) {
			throw new InvalidArgumentError(`<${value}> no es una dirección IP válida.`)
		}
		// Si la validación pasa, asignamos el valor limpio a la propiedad de la clase.
		this.value = normalizedValue
	}

	/**
	 * Normaliza diferentes formatos de IP a un string de IPv4 estándar.
	 * - Convierte '::1' (loopback IPv6) a '127.0.0.1'.
	 * - Elimina el prefijo '::ffff:' de las direcciones IPv4 mapeadas en IPv6.
	 * @param value La dirección IP de entrada.
	 * @returns La dirección IP normalizada como un string.
	 */
	private normalizeIp(value: string): string {
		if (value === '::1') {
			return '127.0.0.1'
		}
		if (value.startsWith('::ffff:')) {
			return value.substring(7)
		}
		return value
	}
}
