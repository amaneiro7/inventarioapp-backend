import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

enum AreaCode {
	CARACAS = '0212',
	VALENCIA = '0241',
	MARACAY = '0243',
	BARCELONA = '0281',
	CIUDADBOLIVAR = '0285',
	MARACAIBO = '0261',
	BARINAS = '0273',
	BARQUISIMETO = '0251',
	MERIDA = '0274',
	PUERTOLACRUZ = '0281',
	SANCRISTOBAL = '0273',
	CIUDADGUAYANA = '0285',
	GUARENAS = '0212',
	GUATIRE = '0212',
	LOSTEQUES = '0212',
	LAGUAIRA = '0212',
	NAGUANAGUA = '0241',
	TOCUYITO = '0241',
	GUACARA = '0242',
	GUANARE = '0272',
	CIUDADOJEDA = '0263',
	CORO = '0257',
	PUNTOFIJO = '0263',
	SANFELIPE = '0257',
	BARUTA = '0212',
	CHACAO = '0212',
	CATIALAMAR = '0212',
	LOSGUAYOS = '0241',
	COJEDES = '0249',
	TINAQUILLO = '0258',
	SANCARLOS = '0249',
	TUCUPITA = '0248'
}

export class Extension extends StringValueObject {
	private readonly areaCodes = Object.values(AreaCode)
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
}
