import { type CentroCostoName } from './CentroCostoName'
import { type CodCentroCosto } from './CodCentroCosto'

export interface CentroCosto {
	id: CodCentroCosto['value']
	name: CentroCostoName['value']
}

export type CentroCostoPrimitives = CentroCosto

export type CentroCostoParams = CentroCosto

export type CentroCostoDto = CentroCosto
