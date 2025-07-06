import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
// import { type Employee } from '../entity/Employee'
import { type EmployeeType, EmployeeTypes } from './EmployeeType'

export enum Nationalities {
	V = 'V',
	E = 'E'
}

interface EmployeeNationalityProps {
	value: Nationalities | null
	type: Primitives<EmployeeType>
}
export class EmployeeNationality extends AcceptedNullValueObject<Nationalities> {
	constructor(
		value: Nationalities | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidNationality({ value, type: this.type })
	}

	private ensureIsValidNationality({ value, type }: EmployeeNationalityProps): void {
		if (type !== EmployeeTypes.GENERIC && value === null) {
			throw new InvalidArgumentError('La nacionalidad del empleado es requerida para este tipo de empleado.')
		}

		if (value !== null && !Object.values(Nationalities).includes(value)) {
			throw new InvalidArgumentError(
				`Nacionalidad inválida: ${value}. Las opciones válidas son: ${Object.values(Nationalities).join(', ')}`
			)
		}
	}

	protected throwErrorForInvalidValue(value: Nationalities): void {
		throw new InvalidArgumentError(`Nacionalidad inválida (uso interno): ${value}`)
	}

	// se creo el método pero de momento se deja inhabilitado ya que en principio no se va a poder actualizar la cédula
	// static async updateNationalityField({
	// 	nationality,
	// 	entity
	// }: {
	// 	nationality?: Primitives<EmployeeNationality>
	// 	entity: Employee
	// }): Promise<void> {
	// 	if (nationality !== undefined && nationality !== entity.nationalityValue) {
	// 		entity.updateNationality(nationality)
	// 	}
	// }
}
