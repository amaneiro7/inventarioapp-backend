import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/CargoId'
import { type CargoRepository } from '../../domain/CargoRepository'
import { type CargoName } from '../../domain/CargoName'
import { type CargoDto, type CargoPrimitives } from '../../domain/Cargo.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { CargoModel } from './CargoSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { CargoAssociation } from './CargoAssociation'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class SequelizeCargoRepository extends CriteriaToSequelizeConverter implements CargoRepository {
	private readonly cacheKey: string = 'cargos'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<CargoDto>> {
		const options = this.convert(criteria)
		const opt = CargoAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			fetchFunction: async () => {
				const { count, rows } = await CargoModel.findAndCountAll(opt)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<CargoId>): Promise<Nullable<CargoDto>> {
		return (
			(await CargoModel.findByPk(id, {
				include: [
					{
						association: 'departamentos',
						attributes: ['id', 'name'],
						through: { attributes: [] }
					},
					'employee'
				]
			})) ?? null
		)
	}

	async searchByName(name: Primitives<CargoName>): Promise<Nullable<CargoDto>> {
		return (await CargoModel.findOne({ where: { name } })) ?? null
	}

	async save(payload: CargoPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { id, departamentos, directivas, vicepresidenciasEjecutivas, vicepresidencias, ...restPayload } =
				payload
			const cargo = (await CargoModel.findByPk(id)) ?? null
			if (cargo) {
				await cargo.update(restPayload, { transaction })
				await cargo.setDirectivas(directivas, { transaction })
				await cargo.setVicepresidenciaEjecutivas(vicepresidenciasEjecutivas, { transaction })
				await cargo.setVicepresidencias(vicepresidencias, { transaction })
				await cargo.setDepartamentos(directivas, { transaction })
			} else {
				const newCargo = await CargoModel.create({ ...restPayload, id }, { transaction })
				await newCargo.setDirectivas(directivas, { transaction })
				await newCargo.setVicepresidenciaEjecutivas(vicepresidenciasEjecutivas, { transaction })
				await newCargo.setVicepresidencias(vicepresidencias, { transaction })
				await newCargo.setDepartamentos(directivas, { transaction })
			}
			await transaction.commit()
			await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}
}
