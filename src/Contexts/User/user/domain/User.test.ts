import { User } from './User'
import { UserStatusEnum } from './valueObject/UserStatus'
import { type UserDto } from './User.dto'

describe('User Entity', () => {
	const baseUserPrimitives: UserDto = {
		id: '07b2914d-9a6c-4633-961a-26de38399b8f',
		employeeId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
		roleId: 1,
		password: 'hashedPassword',
		status: UserStatusEnum.ACTIVE,
		passwordChangeAt: new Date(),
		lastLoginAt: null,
		failedAttemps: 0,
		lockoutUntil: null
	}

	it('should create a User instance from primitives', () => {
		const user = User.fromPrimitives(baseUserPrimitives)
		expect(user).toBeInstanceOf(User)
		expect(user.id.value).toBe(baseUserPrimitives.id)
	})

	it('isLocked should return false for an ACTIVE user', () => {
		const user = User.fromPrimitives({
			...baseUserPrimitives,
			status: UserStatusEnum.ACTIVE
		})
		expect(user.isLocked()).toBe(false)
	})

	it('isLocked should return true for a LOCKED user', () => {
		const user = User.fromPrimitives({
			...baseUserPrimitives,
			status: UserStatusEnum.LOCKED
		})
		expect(user.isLocked()).toBe(true)
	})

	it('isLocked should return true for a SUSPENDED user', () => {
		const user = User.fromPrimitives({
			...baseUserPrimitives,
			status: UserStatusEnum.SUSPENDED
		})
		expect(user.isLocked()).toBe(true)
	})
})
