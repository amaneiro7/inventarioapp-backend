import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserDto } from '../domain/entity/User.dto'
import { type UserRepository } from '../domain/Repository/UserRepository'
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
	 * Ahora modificado para encontrar a todos los usuarios.
	 * @param {{ user?: JwtPayloadUser; criteria: Criteria }} params The parameters for finding users.
	 * @returns {Promise<ResponseService<UserDto>>} A paginated response of users (excluding admin) with optional fields.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 */
	async run({ user, criteria }: { user?: JwtPayloadUser; criteria: Criteria }): Promise<ResponseService<UserDto>> {
		isSuperAdmin({ user })

		// Asumiendo que userRepository.searchAll devuelve ResponseDB<UserEntity> que incluye 'role', 'employee' y 'password'
		const { data, total } = await this.userRepository.searchAll(criteria)

		// Mapeamos cada entidad User a un UserDto omitiendo la propiedad 'password'
		const usersDto: UserDto[] = data.map(userEntity => {
			return {
				id: userEntity.id,
				employee: userEntity.employee,
				role: userEntity.role,
				employeeId: userEntity.employeeId,
				roleId: userEntity.roleId,
				status: userEntity.status,
				lastLoginAt: userEntity.lastLoginAt,
				passwordChangeAt: userEntity.passwordChangeAt
			}
		})

		return {
			data: usersDto,
			info: {
				total,
				page:
					criteria.pageNumber === undefined || criteria.pageNumber === null || criteria.pageNumber === 0
						? 1
						: criteria.pageNumber,
				totalPage: this.calcularPaginas(total, criteria.pageSize)
			}
		}
	}

	calcularPaginas(totalElementos: number, pageSize?: number | null): number {
		// si el pageSize es null o 0, devuelve 1 pagina ya que esta devolviendo todos los elementos de la lista
		if (!pageSize || pageSize === 0) return 1
		// Calcula el número de páginas redondeando hacia arriba
		return Math.ceil(totalElementos / pageSize)
	}
}
