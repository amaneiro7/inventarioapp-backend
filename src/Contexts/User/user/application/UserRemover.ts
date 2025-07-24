import { UserId } from '../domain/UserId'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserRepository } from '../domain/UserRepository'

export class UserRemover {
	private readonly userRepository: UserRepository
	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	async run({ user, id }: { user?: JwtPayloadUser; id: Primitives<UserId> }): Promise<void> {
		// Se valida que el usuario que realiza la accion esta autorizado
		isSuperAdmin({ user })

		// se valida que el id, sea un id valida
		const userId = new UserId(id).value

		// se busca el usuario a eliminar
		const userToDelete = await this.userRepository.searchById(userId)

		// se verifica que el usuario exista, si no existe arrojar un error
		if (userToDelete === null) {
			throw new UserDoesNotExistError(userId)
		}

		// eliminar el usuario de la base de datos
		await this.userRepository.delete(id)
	}
}
