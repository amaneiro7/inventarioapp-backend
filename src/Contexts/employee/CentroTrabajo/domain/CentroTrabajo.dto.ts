import { type CentroCostoDto } from '../../CentroCosto/domain/CentroCosto.dto'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type CentroTrabajoId } from './CentroTrabajoId'
import { type CentroTrabajoName } from './CentroTrabajoName'

export interface CentroTrabajo {
	id: CentroTrabajoId['value']
	name: CentroTrabajoName['value']
	centroCostoId: CodCentroCosto['value']
}

export type CentroTrabajoPrimitives = CentroTrabajo

export type CentroTrabajoParams = CentroTrabajo

export type CentroTrabajoDto = CentroTrabajo & {
	centroCosto: CentroCostoDto
}
