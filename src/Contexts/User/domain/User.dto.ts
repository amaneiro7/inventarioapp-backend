import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeId } from '../../../employee/Employee/domain/valueObject/EmployeeId'

import { type UserEmail } from './UserEmail'
import { type UserId } from './UserId'
import { type UserLastName } from './UserLastName'
import { type UserName } from './UserName'
import { type UserPassword } from './UserPassword'

/**
 * @interface User
 * @description Defines the core properties of a User entity.
 */
export interface User {
	id: Primitives<UserId>
	email: Primitives<UserEmail>
	name: Primitives<UserName>
	roleId: Primitives<RoleId>
	lastName: Primitives<UserLastName>
	password: Primitives<UserPassword>
	employeeId?: Primitives<EmployeeId>
}

/**
 * @type UserPrimitives
 * @description Represents the primitive, serializable state of a User entity.
 */
export type UserPrimitives = User

/**
 * @type UserDto
 * @description Represents a Data Transfer Object (DTO) for the User entity.
 */
export type UserDto = User

export type UserDto = User
