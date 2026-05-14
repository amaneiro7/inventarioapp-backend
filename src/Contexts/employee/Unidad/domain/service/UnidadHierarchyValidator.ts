import { UnidadDoesNotExistError } from '../errors/UnidadDoesNotExistError'
import { UnidadHierarchyViolationError } from '../errors/UnidadHierarchyViolationError'
import { type UnidadRepository } from '../repository/UnidadRepository'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type UnidadId } from '../valueObject/UnidadId'
import { type RangeLevel } from '../valueObject/RangeLevel'

/**
 * Domain service to validate hierarchical constraints for a Unidad.
 */
export class UnidadHierarchyValidator {
	constructor(private readonly repository: UnidadRepository) {}

	/**
	 * Validates that the parent exists and has a superior hierarchical level.
	 *
	 * @param {Primitives<RangeLevel>} childLevel - The level of the unit being created/updated.
	 * @param {Primitives<UnidadId> | null} parentId - The ID of the parent unit.
	 * @throws {UnidadDoesNotExistError} If the parent unit is not found.
	 * @throws {UnidadHierarchyViolationError} If the parent level is equal or inferior to the child level.
	 */
	async validate(childLevel: Primitives<RangeLevel>, parentId: Primitives<UnidadId> | null): Promise<void> {
		if (!parentId) {
			return
		}

		const parent = await this.repository.findById(parentId)

		if (!parent) {
			throw new UnidadDoesNotExistError(parentId)
		}

		// Regla: El nivel del padre debe ser numéricamente menor que el del hijo para ser "superior".
		// Si el padre es Nivel 3 y el hijo es Nivel 3 -> Error.
		// Si el padre es Nivel 4 y el hijo es Nivel 3 -> Error.
		// Si el padre es Nivel 2 y el hijo es Nivel 3 -> OK.
		if (parent.level >= childLevel) {
			throw new UnidadHierarchyViolationError()
		}
	}
}
