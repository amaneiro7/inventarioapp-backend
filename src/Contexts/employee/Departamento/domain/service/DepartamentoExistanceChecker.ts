import { DepartamentoDoesNotExistError } from '../errors/DepartamentoDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartamentoRepository } from '../repository/DepartamentoRepository'
import { type DepartamentoId } from '../valueObject/DepartamentoId'

export class DepartamentoExistenceChecker {
	constructor(private readonly repository: DepartamentoRepository) {}

	/**
	 * Ensures that one or more Departamentos exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<DepartamentoId> | null | undefined |  (Primitives<DepartamentoId>| null | undefined )[]} departamentoIds - The Departamento ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all Departamentos exist.
	 * @throws {DepartamentoDoesNotExistError} If any of the Departamentos do not exist.
	 */
	async ensureExist(
		departamentoIds:
			| Primitives<DepartamentoId>
			| null
			| undefined
			| (Primitives<DepartamentoId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(departamentoIds) ? departamentoIds : [departamentoIds]
		const uniqueDepartamentoIds = [...new Set(ids.filter(id => id !== null && id !== undefined))]
		if (uniqueDepartamentoIds.length === 0) {
			return
		}

		const foundDepartamentos = await this.repository.findByIds(uniqueDepartamentoIds)
		if (foundDepartamentos.length !== uniqueDepartamentoIds.length) {
			const foundIds = new Set(foundDepartamentos.map(c => c.id))
			const missingIds = uniqueDepartamentoIds.filter(id => !foundIds.has(id))
			throw new DepartamentoDoesNotExistError(missingIds.join(', '))
		}
	}
}
