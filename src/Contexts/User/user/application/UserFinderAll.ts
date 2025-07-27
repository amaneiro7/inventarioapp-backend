import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { RoleId } from '../../Role/domain/RoleId'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserPrimitivesOptional } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'
import { type ResponseService } from '../../../Shared/domain/ResponseType'

/**
 * @description Use case for retrieving all User entities, excluding the 'Admin' user.
 */
export class UserFinderAll {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @description Executes the process of finding all users, filtering out the 'Admin' user.
	 * @param {{ user?: JwtPayloadUser; criteria: Criteria }} params The parameters for finding users.
	 * @returns {Promise<ResponseService<UserPrimitivesOptional>>} A paginated response of users (excluding admin) with optional fields.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 */
	async run({
		user,
		criteria
	}: {
		user?: JwtPayloadUser
		criteria: Criteria
	}): Promise<ResponseService<UserPrimitivesOptional>> {
		isSuperAdmin({ user })

		const { data, total } = await this.userRepository.searchAll(criteria)

		const filteredUsers = data
			.filter(user => user.roleId !== RoleId.Options.ADMIN)
			.map(user => ({
				id: user.id,
				email: user.email,
				lastName: user.lastName,
				name: user.name,
				roleId: `${user.roleId}`
			}))

		return {
			data: filteredUsers,
			info: {
				total,
				page: criteria.pageNumber ?? 1,
				totalPage: this.calculateTotalPages(total, criteria.pageSize)
			}
		}
	}

	private calculateTotalPages(totalElements: number, pageSize?: number | null): number {
		if (!pageSize) return 1
		return Math.ceil(totalElements / pageSize)
	}
}
