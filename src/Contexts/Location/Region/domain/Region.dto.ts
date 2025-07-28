import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AdministrativeRegionDto } from '../../AdministrativeRegion/domain/AdministrativeRegion.dto'
import { type AdministrativeRegionId } from '../../AdministrativeRegion/domain/AdministrativeRegionId'
import { type RegionId } from './RegionId'
import { type RegionName } from './RegionName'

/**
 * Represents the core properties of a Region.
 */
export interface Region {
	id: Primitives<RegionId>
	name: Primitives<RegionName>
	administrativeRegionId: Primitives<AdministrativeRegionId>
}

/**
 * Represents the primitive type of a Region, suitable for data transfer.
 */
export type RegionPrimitives = Region

/**
 * Represents the parameters required to create a new Region, excluding ID and name.
 */
export type RegionParams = Omit<Region, 'id' | 'name'>

/**
 * Represents the Data Transfer Object (DTO) for a Region, including its associated AdministrativeRegion.
 */
export type RegionDto = Region & {
	administrativeRegion: AdministrativeRegionDto
}
