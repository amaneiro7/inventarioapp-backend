import { type RolePrimitives } from '../../User/Role/domain/Role.dto'
import { type UserPrimitives } from '../../User/user/domain/User'

type UserProps = UserPrimitives & {
	role: {
		id: string
		name: string
	}
}

export function SendUserWithoutPassowrd(
	user: UserPrimitives & {
		role: RolePrimitives
	},
	token: string
): {
	user: Omit<UserProps, 'password'>
	accessToken: string
} {
	const { id, lastName, name, email, roleId, role } = user
	return {
		user: {
			id,
			name,
			lastName,
			email,
			roleId,
			role
		},

		accessToken: token
	}
}
