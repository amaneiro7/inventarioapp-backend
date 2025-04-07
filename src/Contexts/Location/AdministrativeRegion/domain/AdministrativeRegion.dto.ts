import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionId } from './AdministrativeRegionId'
import { type AdministrativeRegionName } from './AdministrativeRegionName'

export interface AdministrativeRegion {
	id: Primitives<AdministrativeRegionId>
	name: Primitives<AdministrativeRegionName>
}
export type AdministrativeRegionPrimitives = AdministrativeRegion

export type AdministrativeRegionDto = AdministrativeRegion
