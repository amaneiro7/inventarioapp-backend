import { type RolePrimitives } from '../../User/Role/domain/Role.dto'
import { type EmployeePrimitives } from '../../employee/Employee/domain/entity/Employee.dto' // Import EmployeePrimitives
import { type UserStatusEnum } from '../../User/user/domain/valueObject/UserStatus' // Import UserStatusEnum

/**
 * @interface AuthResponseDto
 * @description Defines the data transfer object for authentication responses.
 * This structure is used to send back user information and tokens upon successful authentication.
 */
export interface AuthResponseDto {
	user: {
		id: string
		employeeId: string // Added employeeId
		roleId: string
		status: UserStatusEnum // Added status
		role: RolePrimitives
		employee?: Omit<EmployeePrimitives, 'password'> // Optionally include employee details
	}
	accessToken: string
	refreshToken?: string
}
