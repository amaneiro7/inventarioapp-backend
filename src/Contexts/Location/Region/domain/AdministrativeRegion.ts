import { Region } from './Region'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { AdministrativeRegionId } from '../../AdministrativeRegion/domain/AdministrativeRegionId'
import { type AdministrativeRegionRepository } from '../../AdministrativeRegion/domain/AdministrativeRegionRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

export class AdmRegionRegion extends AdministrativeRegionId {
	static async updateAdmRegionField(params: {
		repository: AdministrativeRegionRepository
		administrativeRegionId?: Primitives<AdministrativeRegionId>
		entity: Region
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor de estado no realiza ninguna acción
		if (params.administrativeRegionId === undefined) {
			return
		}
		// Verifica que si la estado actual y el nuevo valor de estado son iguales no realice una busqueda en el repositorio
		if (params.entity.administrativeRegionValue === params.administrativeRegionId) {
			return
		}
		// Verifica que la región administrative no exista en la base de datos, si existe lanza un error {@link CategoryAlreadyExistError} con el valor de estado
		await AdmRegionRegion.ensureAdministrativeRegionExist({
			repository: params.repository,
			administrativeRegionId: params.administrativeRegionId
		})
		// Actualiza el campo administrativeRegion de la entidad {@link Region} con el nuevo valor de estado
		params.entity.updateAdmRegion(params.administrativeRegionId)
	}
	static async ensureAdministrativeRegionExist(params: {
		repository: AdministrativeRegionRepository
		administrativeRegionId: Primitives<AdministrativeRegionId>
	}): Promise<void> {
		const isAdministrativeRegionExist = await params.repository.searchById(params.administrativeRegionId)
		if (!isAdministrativeRegionExist) {
			throw new InvalidArgumentError('La región administrativa no existe')
		}
	}
}
