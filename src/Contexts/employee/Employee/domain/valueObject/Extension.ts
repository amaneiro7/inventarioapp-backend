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
	private readonly numberLenght = 7
	private readonly extension = `^(${Object.values(AreaCode).join('|')})\\d{${this.numberLenght}}$`
	private readonly phoneRegex = new RegExp(this.extension)

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValid(value)
	}

	toPrimitives(): string {
		return this.value
	}

	private ensureIsValid(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid Extension Number`)
		}
	}

	private isValid(name: string): boolean {
		return this.phoneRegex.test(name)
	}
}
