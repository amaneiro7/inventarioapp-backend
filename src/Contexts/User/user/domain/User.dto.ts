import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../Role/domain/RoleId'
import { type UserEmail } from './UserEmail'
import { type UserId } from './UserId'
import { type UserLastName } from './UserLastName'
import { type UserName } from './UserName'
import { type UserPassword } from './UserPassword'

export interface User {
	id: Primitives<UserId>
	email: Primitives<UserEmail>
	name: Primitives<UserName>
	roleId: Primitives<RoleId>
	lastName: Primitives<UserLastName>
	password: Primitives<UserPassword>
}

export type UserPrimitives = User

export type UserDto = User
