import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Employee } from '../entity/Employee'
import { codigosAreaVenezuela } from './codigosAreaVenezuela'

export class Extension extends StringValueObject {
	private readonly areaCodes = codigosAreaVenezuela.map(areaCode => areaCode.codigo)
	private readonly numberLength = 7
	private readonly totalLength = 11 // 4 dígitos de área + 7 dígitos del número
	private readonly phoneRegex = new RegExp(`^(${this.areaCodes.join('|')})\\d{${this.numberLength}}$`)
	private errorMessage = ''

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValid(value)
	}

	toPrimitives(): string {
		return this.value
	}

	private ensureIsValid(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(this.errorMessage)
		}
	}

	private isValid(name: string): boolean {
		if (name.length !== this.totalLength) {
			this.errorMessage = `La extensión ${name} no tiene la longitud correcta. Debe tener ${this.totalLength} dígitos.`
			return false
		}
		if (!this.phoneRegex.test(name)) {
			this.errorMessage = `${name} no es un número de extensión válido. Debe comenzar con ${this.areaCodes.join(
				', '
			)} y tener ${this.numberLength} dígitos adicionales.`
			return false
		}
		return true
	}

	static async updateExtension({
		extension,
		entity
	}: {
		extension?: Primitives<Extension>[]
		entity: Employee
	}): Promise<void> {
		if (extension !== undefined) {
			entity.updateExtension(extension)
		}
	}
}
