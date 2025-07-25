import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { CentroTrabajoId } from '../../../CentroTrabajo/domain/CentroTrabajoId'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
// import { CentroCostoDoesNotExistError } from '../../../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeType, EmployeeTypes } from './EmployeeType'
// import { type CentroCostoRepository } from '../../../CentroCosto/domain/CentroCostoRepository'
// import { type CentroTrabajoRepository } from '../../../CentroTrabajo/domain/CentroTrabajoRepository'
// import { type Employee } from '../entity/Employee'

interface EmployeCentroTrabajoProps {
	value: Primitives<CentroTrabajoId> | null
	type: Primitives<EmployeeType>
}

export class EmployeCentroTrabajo extends AcceptedNullValueObject<Primitives<CentroTrabajoId>> {
	constructor(
		value: Primitives<CentroTrabajoId> | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidCentroTrabajoId({ value, type: this.type })
	}

	private ensureIsValidCentroTrabajoId({ value, type }: EmployeCentroTrabajoProps): void {
		if (type !== EmployeeTypes.GENERIC && value === null) {
			throw new InvalidArgumentError('El ID del centro de trabajo es requerido para este tipo de empleado.')
		}

		if (value !== null && !(new CentroTrabajoId(value) instanceof CentroTrabajoId)) {
			throw new InvalidArgumentError(`<${value}> no es un ID de centro de trabajo válido.`)
		}
	}

	// static async updateCentroTrabajoIdField({
	// 	repository,
	// 	centroTrabajoId,
	// 	entity
	// }: {
	// 	repository: CentroTrabajoRepository
	// 	centroTrabajoId?: Primitives<EmployeCentroTrabajo>
	// 	entity: Employee
	// }): Promise<void> {
	// 	if (centroTrabajoId === undefined || centroTrabajoId === entity.centroTrabajoValue) {
	// 		return
	// 	}
	// 	await this.ensureCentroCostoExist({ centroCosto: centroTrabajoId, repository })
	// 	entity.updateCentroTrabajo(centroTrabajoId, entity.typeValue)
	// }

	// static async ensureCentroCostoExist({
	// 	centroCosto,
	// 	repository
	// }: {
	// 	centroCosto?: Primitives<EmployeCentroTrabajo>
	// 	repository: CentroCostoRepository
	// }): Promise<void> {
	// 	if (centroCosto && (await repository.searchById(centroCosto)) === null) {
	// 		throw new CentroCostoDoesNotExistError()
	// 	}
	// }
}
