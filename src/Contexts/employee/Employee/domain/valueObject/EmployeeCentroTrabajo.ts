import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { CentroTrabajoId } from '../../../CentroTrabajo/domain/CentroTrabajoId'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeType, EmployeeTypesEnum } from './EmployeeType'

interface EmployeCentroTrabajoProps {
	value: Primitives<CentroTrabajoId> | null
	type: Primitives<EmployeeType>
}

/**
 * @description Represents the CentroTrabajo (work center) of an employee.
 */
export class EmployeCentroTrabajo extends AcceptedNullValueObject<Primitives<CentroTrabajoId>> {
	constructor(
		value: Primitives<CentroTrabajoId> | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidCentroTrabajoId({ value, type: this.type })
	}

	private ensureIsValidCentroTrabajoId({ value, type }: EmployeCentroTrabajoProps): void {
		if (type !== EmployeeTypesEnum.GENERIC && value === null) {
			throw new InvalidArgumentError('El ID del centro de trabajo es requerido para este tipo de empleado.')
		}

		if (value !== null && !(new CentroTrabajoId(value) instanceof CentroTrabajoId)) {
			throw new InvalidArgumentError(`'${value}' no es un ID de centro de trabajo válido.`) // Improved error message
		}
	}
}
