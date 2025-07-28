import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionId } from './AdministrativeRegionId'
import { type AdministrativeRegionName } from './AdministrativeRegionName'

/**
 * Represents the core properties of an Administrative Region.
 */
export interface AdministrativeRegion {
	id: Primitives<AdministrativeRegionId>
	name: Primitives<AdministrativeRegionName>
}

/**
 * Represents the primitive type of an Administrative Region, suitable for data transfer.
 */
export type AdministrativeRegionPrimitives = AdministrativeRegion

/**
 * Represents the Data Transfer Object (DTO) for an Administrative Region.
 * Currently, it's the same as AdministrativeRegionPrimitives.
 */
export type AdministrativeRegionDto = AdministrativeRegion
