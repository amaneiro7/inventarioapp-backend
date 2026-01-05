import { DepartamentoAlreadyExistError } from '../errors/DepartamentoAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartamentoRepository } from '../repository/DepartamentoRepository'
import { type DepartamentoId } from '../valueObject/DepartamentoId'

/**
 * Domain service responsible for verifying that a Departamento name is unique within the system.
 */
export class DepartamentoNameUniquenessChecker {
	/**
	 * Creates an instance of DepartamentoNameUniquenessChecker.
	 * @param {DepartamentoRepository} repository - The repository used to check for existing Departamentos.
	 */
	constructor(private readonly repository: DepartamentoRepository) {}

	/**
	 * Ensures that the provided Departamento name is unique.
	 * If an ID is provided in excludeId, it ignores that Departamento (useful for updates).
	 *
	 * @param {string} name - The Departamento name to check.
	 * @param {Primitives<DepartamentoId>} [excludeId] - The ID of the Departamento to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {DepartamentoAlreadyExistError} If a Departamento with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<DepartamentoId>): Promise<void> {
		const existingDepartamento = await this.repository.findByName(name)
		if (existingDepartamento && existingDepartamento.id !== excludeId) {
			throw new DepartamentoAlreadyExistError(name)
		}
	}
}
