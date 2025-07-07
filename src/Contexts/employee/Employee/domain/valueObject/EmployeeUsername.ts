import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { Employee } from '../entity/Employee'

export class EmployeeUserName extends StringValueObject {
	private readonly NAME_MAX_LENGTH: number = 20
	private readonly NAME_MIN_LENGTH: number = 2
	private readonly VALID_REGEX = /^[a-zA-Z].*\d*/

	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidName(value)
	}

	toPrimitives(): string {
		return this.value
	}

	private ensureIsValidName(value: string): void {
		const errors: string[] = []
		if (!this.isValid(value, errors)) {
			throw new InvalidArgumentError(`<${value}> is not a valid userName ${errors.join(' ')}`)
		}
	}

	private isValid(name: string, errors: string[]): boolean {
		const isNotHasSpecialCharacters = this.VALID_REGEX.test(name)
		if (!isNotHasSpecialCharacters) {
			errors.push('Username should not contain special characters.')
		}
		const validNameLength = name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
		if (!validNameLength) {
			errors.push(
				`Username length should be between ${this.NAME_MIN_LENGTH} and ${this.NAME_MAX_LENGTH} characters.`
			)
		}
		return isNotHasSpecialCharacters && validNameLength
	}

	static async updateUserNameField({
		repository,
		userName,
		entity
	}: {
		repository: EmployeeRepository
		userName?: Primitives<EmployeeUserName>
		entity: Employee
	}): Promise<void> {
		if (userName === undefined || userName === entity.userNameValue) {
			return
		}
		await this.ensureIsStillWorkingUserNameDoesNotExist({ repository, userName })
		entity.updateUserName(userName)
	}

	static async ensureIsStillWorkingUserNameDoesNotExist({
		userName,
		repository
	}: {
		repository: EmployeeRepository
		userName: Primitives<EmployeeUserName>
	}): Promise<void> {
		const criteria = await CreateCriteria.execute({
			filters: [
				{ field: 'userName', operator: Operator.EQUAL, value: userName },
				{ field: 'isStillWorking', operator: Operator.EQUAL, value: true }
			]
		})
		const existingEmployee = await repository.searchByQuery(criteria)
		if (existingEmployee !== null) {
			// Consider throwing a specific error here if needed
			throw new InvalidArgumentError(`Username "${userName}" is already in use by a working employee.`)
		}
	}
}
