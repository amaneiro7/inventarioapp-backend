import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MainCategoryId } from './MainCategoryId'
import { type MainCategoryName } from './MainCategoryName'

export interface MainCategory {
	id: Primitives<MainCategoryId>
	name: Primitives<MainCategoryName>
}

export type MainCategoryParams = Omit<MainCategory, 'id'>

export type MainCategoryPrimitives = MainCategory

export type MainCategoryDto = MainCategory
