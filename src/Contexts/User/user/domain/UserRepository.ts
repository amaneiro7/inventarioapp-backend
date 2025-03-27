import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserId } from './UserId'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type UserPrimitivesOptional, type UserPrimitives } from './User'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

export abstract class UserRepository {
	abstract save(user: UserPrimitives): Promise<void>

	abstract searchAll(criteria: Criteria): Promise<ResponseDB<UserPrimitivesOptional>>

	abstract searchById(id: Primitives<UserId>): Promise<UserPrimitives | null>

	abstract searchByEmail(userEmail: string): Promise<UserPrimitives | null>

	abstract delete(id: Primitives<UserId>): Promise<void>
}
