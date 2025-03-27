import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { RoleId } from '../../Role/domain/RoleId'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserPrimitivesOptional } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'
import { type ResponseService } from '../../../Shared/domain/ResponseType'

export class UserFinderAll {
	constructor(private readonly userRepository: UserRepository) {}

	async run({
		user,
		criteria
	}: {
		user?: JwtPayloadUser
		criteria: Criteria
	}): Promise<ResponseService<UserPrimitivesOptional>> {
		isSuperAdmin({ user })

		const { data, total } = await this.userRepository.searchAll(criteria)
		// Se bloquea exponer los datos del usuario admin
		const users = data
			.filter(user => user.roleId !== RoleId.Options.ADMIN)
			// Se elimina la propiedad password, por alguna razon con sequelize
			.map(user => {
				const { password, ...rest } = user
				return rest
			})

		return {
			data: users,
			info: {
				total,
				page: criteria.pageNumber ?? 1,
				totalPage: this.calcularPaginas(total)
			}
		}
	}

	calcularPaginas(totalElementos: number, pageSize?: number | null): number {
		// si el pageSize es null solo devuelve una pagina ya que esta devolviendo todos los elementos de la lista
		if (!pageSize) return 1
		// Calcula el número de páginas redondeando hacia arriba
		return Math.ceil(totalElementos / pageSize)
	}
}
