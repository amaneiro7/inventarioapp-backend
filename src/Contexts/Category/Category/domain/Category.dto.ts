import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MainCategoryId } from '../../MainCategory/domain/MainCategoryId'
import { type MainCategoryDto } from '../../MainCategory/domain/MainCategory.dto'
import { type CategoryId } from './CategoryId'
import { type CategoryName } from './CategoryName'

export interface Category {
	id: Primitives<CategoryId>
	name: Primitives<CategoryName>
	mainCategoryId: Primitives<MainCategoryId>
}

export type CategoryParams = Omit<Category, 'id'>

export type CategoryPrimitives = Category

export type CategoryDto = Category & {
	mainCategory: MainCategoryDto
}
