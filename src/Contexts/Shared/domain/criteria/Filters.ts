import { Filter, type FiltersPrimitives } from './Filter'

export class Filters {
	constructor(public readonly value: Filter[]) {}

	// Esto es simplemente otra forma de instanciar nuestra clase
	// La usamos cuando queremos hacer logica extra en nuestra instanciación
	static fromValues(filters: FiltersPrimitives[]): Filters {
		return new Filters(
			filters.map(filter =>
				Filter.fromValues(filter.field, filter.operator, filter.value)
			)
		)
	}

	toPrimitives(): FiltersPrimitives[] {
		return this.value.map(filter => filter.toPrimitives())
	}

	public static none(): Filters {
		return new Filters([])
	}

	isEmpty(): boolean {
		console.log('isEmpty', this.value)
		return this.value.length === 0
	}
}
