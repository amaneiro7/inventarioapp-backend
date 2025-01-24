import { CategoryId } from './CategoryId'
import { CategoryName } from './CategoryName'
import { MainCategoryId } from '../../MainCategory/domain/MainCategoryId'
import { CategoryPrimitives } from './Category.dto'

export const CategoryValues = {
	COMPUTADORAS: '1',
	SERVIDORES: '2',
	LAPTOPS: '3',
	ALLINONE: '4',
	MONITORES: '5',
	FINANCIERASPRINTER: '6',
	LASERPRINTER: '7',
	INKPRINTER: '8',
	HARDDRIVE: '9',
	KEYBOARD: '10',
	MOUSE: '11',
	BAM: '12',
	MFP: '13',
	PHONES: '14',
	SCANNER: '15',
	ANTENAS: '16',
	CABLEUSB: '17',
	CAMARAS: '18',
	IPAD: '19',
	WEBCAM: '20',
	CORNETAS: '21',
	DOCKING: '22',
	LAPIZOPTICO: '23',
	CONVERTIDORVGAHDMI: '24',
	MIC: '25'
} as const

export class Category {
	constructor(
		private readonly id: CategoryId,
		private readonly name: CategoryName,
		private readonly mainCategoryId: MainCategoryId
	) {}

	static fromPrimitives(primitives: CategoryPrimitives): Category {
		return new Category(
			new CategoryId(primitives.id),
			new CategoryName(primitives.name),
			new CategoryId(primitives.mainCategoryId)
		)
	}

	toPrimitive(): CategoryPrimitives {
		return {
			id: this.id.value,
			name: this.name.value,
			mainCategoryId: this.mainCategoryId.value
		}
	}

	get idValue(): CategoryId['value'] {
		return this.id.value
	}

	get nameValue(): CategoryName['value'] {
		return this.name.value
	}

	get mainCategoryIdValue(): MainCategoryId['value'] {
		return this.mainCategoryId.value
	}
}
