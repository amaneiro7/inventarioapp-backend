import { ValueObject } from '../../../../Shared/domain/value-object/ValueObject'
import { PasswordService } from '../domainService/PasswordService'

type PasswordHistoryPrimitives = string[]

export class PasswordHistory extends ValueObject<string[]> {
	public static readonly MAX_HISTORY_SIZE: number = 5
	constructor(value: PasswordHistoryPrimitives) {
		super(value ?? [])
	}

	/**
	 * @description Verifica si un hash de contraseña dado ya existe en el historial.
	 * @param plainPassword La nueva contraseña en texto plano.
	 * @returns True si el hash ya está en el historial, False si no.
	 */
	public async exists(plainPassword: string): Promise<boolean> {
		// No podemos comparar hashes directamente porque la "sal" los hace únicos.
		// Debemos usar el método de comparación (ej: bcrypt.compare) contra cada hash del historial.
		for (const historyHash of this.value) {
			const match = PasswordService.compare(plainPassword, historyHash)
			if (match) {
				return true // Si encontramos una coincidencia, detenemos la búsqueda.
			}
		}
		return false // Si recorremos todo el historial y no hay coincidencias.
	}

	/**
	 * @description Añade un nuevo hash al historial, manteniendo el límite de tamaño.
	 * Si se excede el límite (MAX_HISTORY_SIZE), se elimina el hash más antiguo (el primero).
	 * @param newHash El nuevo hash de contraseña a añadir.
	 * @returns Una nueva instancia de PasswordHistory con el hash añadido.
	 */
	public add(newHash: string): PasswordHistory {
		const history = [...this.value]

		// 1. Añadimos el nuevo hash al final
		history.push(newHash)

		// 2. Si el historial excede el tamaño máximo, eliminamos el más antiguo (el primero)
		if (history.length > PasswordHistory.MAX_HISTORY_SIZE) {
			history.shift()
		}

		return new PasswordHistory(history)
	}

	// Sobrescribimos el método toPrimitives para asegurar el formato de array
	public toPrimitives(): PasswordHistoryPrimitives {
		return this.value
	}
}
