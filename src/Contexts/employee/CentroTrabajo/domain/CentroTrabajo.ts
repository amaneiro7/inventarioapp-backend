import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { CentroTrabajoName } from './CentroTrabajoName'
import { CentroTrabajoId } from './CentroTrabajoId'
import { type CentroTrabajoDto, type CentroTrabajoParams, type CentroTrabajoPrimitives } from './CentroTrabajo.dto'

/**
 * @description Represents the CentroTrabajo domain entity.
 */
export class CentroTrabajo {
	constructor(
		private readonly id: CentroTrabajoId,
		private name: CentroTrabajoName,
		private centroCostoId: CodCentroCosto
	) {}

	static create({ name, id, centroCostoId }: CentroTrabajoParams): CentroTrabajo {
		return new CentroTrabajo(
			new CentroTrabajoId(id),
			new CentroTrabajoName(name),
			new CodCentroCosto(centroCostoId)
		)
	}

	static fromPrimitives(primitives: CentroTrabajoDto): CentroTrabajo {
		return new CentroTrabajo(
			new CentroTrabajoId(primitives.id),
			new CentroTrabajoName(primitives.name),
			new CodCentroCosto(primitives.centroCostoId)
		)
	}

	toPrimitive(): CentroTrabajoPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			centroCostoId: this.centroCostoValue
		}
	}

	updateName(newName: Primitives<CentroTrabajoName>): void {
		this.name = new CentroTrabajoName(newName)
	}

	updateCentroCosto(newCentroCosto: Primitives<CodCentroCosto>): void {
		this.centroCostoId = new CodCentroCosto(newCentroCosto)
	}

	get idValue(): Primitives<CentroTrabajoId> {
		return this.id.value
	}

	get nameValue(): Primitives<CentroTrabajoName> {
		return this.name.value
	}

	get centroCostoValue(): Primitives<CodCentroCosto> {
		return this.centroCostoId.value
	}
}
