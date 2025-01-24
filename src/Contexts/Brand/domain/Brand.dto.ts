import { Primitives } from '../../Shared/domain/value-object/Primitives'
import { BrandId } from './BrandId'
import { BrandName } from './BrandName'

export interface Brand {
	id: Primitives<BrandId>
	name: Primitives<BrandName>
}

export type BrandParams = Omit<Brand, 'id'>

export type BrandPrimitives = Brand

export type BrandDto = Brand
