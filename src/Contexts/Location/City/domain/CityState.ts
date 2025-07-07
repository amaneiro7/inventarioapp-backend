import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StateId } from '../../State/domain/StateId'
import { type City } from './City'
import { type StateRepository } from '../../State/domain/StateRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

export class CityState extends StateId {
	static async updateStateField(params: {
		repository: StateRepository
		stateId?: Primitives<StateId>
		entity: City
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor de estado no realiza ninguna acción
		if (params.stateId === undefined) {
			return
		}
		// Verifica que si la estado actual y el nuevo valor de estado son iguales no realice una busqueda en el repositorio
		if (params.entity.stateValue === params.stateId) {
			return
		}
		// Verifica que la estado no exista en la base de datos, si existe lanza un error {@link CategoryAlreadyExistError} con el valor de estado
		await CityState.ensureStateExist({
			repository: params.repository,
			stateId: params.stateId
		})
		// Actualiza el campo category de la entidad {@link ModelSeries} con el nuevo valor de estado
		params.entity.updateState(params.stateId)
	}
	static async ensureStateExist(params: {
		repository: StateRepository
		stateId: Primitives<StateId>
	}): Promise<void> {
		const isStateExist = await params.repository.searchById(params.stateId)
		if (!isStateExist) {
			throw new InvalidArgumentError('State does not exist')
		}
	}
}
