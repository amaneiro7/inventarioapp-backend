import { UserLoginLocal } from './UserLoginLocal'
import { type UserRepository } from '../../User/user/domain/Repository/UserRepository'
import { type EmployeeRepository } from '../../employee/Employee/domain/Repository/EmployeeRepository'
import { type PasswordService } from '../../User/user/domain/domainService/PasswordService'
import { type EmployeePrimitives } from '../../employee/Employee/domain/entity/Employee.dto'
import { EmployeeTypesEnum } from '../../employee/Employee/domain/valueObject/EmployeeType'
import { type UserDto } from '../../User/user/domain/User.dto'
import { UserStatusEnum } from '../../User/user/domain/valueObject/UserStatus'
import { InvalidCredentialsError } from '../domain/InvalidCredentialsError'

describe('UserLoginLocal', () => {
	let userRepositoryMock: jest.Mocked<UserRepository>
	let employeeRepositoryMock: jest.Mocked<EmployeeRepository>
	let passwordServiceMock: jest.Mocked<PasswordService>
	let userLoginLocal: UserLoginLocal

	const employeePrimitives: EmployeePrimitives = {
		id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
		name: 'John',
		lastName: 'Doe',
		userName: 'johndoe',
		email: 'john.doe@example.com',
		type: EmployeeTypesEnum.SERVICE,
		isStillWorking: true,
		employeeCode: null,
		nationality: null,
		cedula: null,
		locationId: null,
		directivaId: null,
		vicepresidenciaEjecutivaId: null,
		vicepresidenciaId: null,
		departamentoId: null,
		cargoId: null,
		extension: [],
		phone: []
	}

	const userPrimitives: Omit<UserDto, 'role' | 'employee'> = {
		id: '07b2914d-9a6c-4633-961a-26de38399b8f',
		employeeId: employeePrimitives.id,
		roleId: '1',
		password: 'hashedPassword',
		status: UserStatusEnum.ACTIVE,
		passwordChangeAt: new Date(),
		lastLoginAt: null,
		failedAttemps: 0,
		lockoutUntil: null
	}

	beforeEach(() => {
		userRepositoryMock = {
			searchByEmployeeId: jest.fn()
		} as unknown as jest.Mocked<UserRepository>

		employeeRepositoryMock = {
			findByUserName: jest.fn(),
			findByEmail: jest.fn()
		} as unknown as jest.Mocked<EmployeeRepository>

		passwordServiceMock = {
			compare: jest.fn()
		} as unknown as jestMocked<PasswordService>

		userLoginLocal = new UserLoginLocal({
			userRepository: userRepositoryMock,
			employeeRepository: employeeRepositoryMock,
			passwordService: passwordServiceMock
		})
	})

	it('should login successfully with username', async () => {
		employeeRepositoryMock.findByUserName.mockResolvedValue(employeePrimitives)
		userRepositoryMock.searchByEmployeeId.mockResolvedValue(userPrimitives)
		passwordServiceMock.compare.mockResolvedValue(true)

		const result = await userLoginLocal.run({ userNameOrEmail: 'johndoe', password: 'password123' })

		expect(result).toEqual(userPrimitives)
		expect(employeeRepositoryMock.findByUserName).toHaveBeenCalledWith('johndoe')
		expect(userRepositoryMock.searchByEmployeeId).toHaveBeenCalledWith(employeePrimitives.id)
		expect(passwordServiceMock.compare).toHaveBeenCalledWith('password123', 'hashedPassword')
	})

	it('should login successfully with email', async () => {
		employeeRepositoryMock.findByEmail.mockResolvedValue(employeePrimitives)
		userRepositoryMock.searchByEmployeeId.mockResolvedValue(userPrimitives)
		passwordServiceMock.compare.mockResolvedValue(true)

		const result = await userLoginLocal.run({ userNameOrEmail: 'john.doe@example.com', password: 'password123' })

		expect(result).toEqual(userPrimitives)
		expect(employeeRepositoryMock.findByEmail).toHaveBeenCalledWith('john.doe@example.com')
	})

	it('should throw InvalidCredentialsError if employee does not exist', async () => {
		employeeRepositoryMock.findByUserName.mockResolvedValue(null)
		await expect(userLoginLocal.run({ userNameOrEmail: 'nonexistent', password: 'password123' })).rejects.toThrow(
			InvalidCredentialsError
		)
	})

	it('should throw InvalidCredentialsError if employee is not of type SERVICE', async () => {
		employeeRepositoryMock.findByUserName.mockResolvedValue({ ...employeePrimitives, type: 'ADMIN' as any })
		await expect(userLoginLocal.run({ userNameOrEmail: 'johndoe', password: 'password123' })).rejects.toThrow(
			InvalidCredentialsError
		)
	})

	it('should throw InvalidCredentialsError if employee is not still working', async () => {
		employeeRepositoryMock.findByUserName.mockResolvedValue({ ...employeePrimitives, isStillWorking: false })
		await expect(userLoginLocal.run({ userNameOrEmail: 'johndoe', password: 'password123' })).rejects.toThrow(
			InvalidCredentialsError
		)
	})

	it('should throw InvalidCredentialsError if user does not exist for employee', async () => {
		employeeRepositoryMock.findByUserName.mockResolvedValue(employeePrimitives)
		userRepositoryMock.searchByEmployeeId.mockResolvedValue(null)
		await expect(userLoginLocal.run({ userNameOrEmail: 'johndoe', password: 'password123' })).rejects.toThrow(
			InvalidCredentialsError
		)
	})

	it('should throw InvalidCredentialsError for a locked account', async () => {
		employeeRepositoryMock.findByUserName.mockResolvedValue(employeePrimitives)
		userRepositoryMock.searchByEmployeeId.mockResolvedValue({ ...userPrimitives, status: UserStatusEnum.LOCKED })

		await expect(userLoginLocal.run({ userNameOrEmail: 'johndoe', password: 'password123' })).rejects.toThrow(
			'Su cuenta está bloqueada. Por favor, contacte al administrador.'
		)
	})

	it('should throw InvalidCredentialsError for incorrect password', async () => {
		employeeRepositoryMock.findByUserName.mockResolvedValue(employeePrimitives)
		userRepositoryMock.searchByEmployeeId.mockResolvedValue(userPrimitives)
		passwordServiceMock.compare.mockResolvedValue(false)

		await expect(userLoginLocal.run({ userNameOrEmail: 'johndoe', password: 'wrongpassword' })).rejects.toThrow(
			InvalidCredentialsError
		)
	})
})
