import { DepartamentoModel } from './DepartamentoSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DepartamentoAssociation } from './DepartamentoAssociation'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoName } from '../../../Cargo/domain/CargoName'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DepartamentoDto, type DepartamentoPrimitives } from '../../domain/Departamento.dto'

/**
 * @description Concrete implementation of the DepartamentoRepository using Sequelize.
 */
export class SequelizeDepartamentoRepository
	extends SequelizeCriteriaConverter
	implements DepartmentRepository<DepartamentoDto>
{
	private readonly cacheKeyPrefix = 'departamento'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DepartamentoDto>> {
		const options = this.convert(criteria)
		const opt = DepartamentoAssociation.convertFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:matching:`

		return this.cache.getCachedData<ResponseDB<DepartamentoDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await DepartamentoModel.findAndCountAll({ ...opt, distinct: true })
				return { data: rows.map(row => row.get({ plain: true })), total: count } as ResponseDB<DepartamentoDto>
			}
		})
	}

	async findById(id: Primitives<DepartmentId>): Promise<Nullable<DepartamentoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<DepartamentoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const departamento = await DepartamentoModel.findByPk(id, {
					include: [
						{
							association: 'vicepresidencia',
							attributes: ['id', 'name'],
							include: [
								{
									association: 'vicepresidenciaEjecutiva',
									attributes: ['id', 'name'],
									include: [
										{
											association: 'directiva',
											attributes: ['id', 'name']
										}
									]
								}
							]
						},
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
						// 'employee'
					]
				})
				return departamento ? (departamento.get({ plain: true }) as DepartamentoDto) : null
			}
		})
	}

	async findByName(name: Primitives<CargoName>): Promise<Nullable<DepartamentoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<DepartamentoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const departamento = await DepartamentoModel.findOne({ where: { name } })
				return departamento ? (departamento.get({ plain: true }) as DepartamentoDto) : null
			}
		})
	}

	async save(payload: DepartamentoPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			const [departamentoInstance] = await DepartamentoModel.upsert(restPayload, { transaction, returning: true })

			if (cargos && cargos.length > 0) {
				await departamentoInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				await departamentoInstance.setCargos([], { transaction })
			}

			await transaction.commit()
			await this.invalidateCache(restPayload)
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving Departamento: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		const departamentoToRemove = await DepartamentoModel.findByPk(id)

		await DepartamentoModel.destroy({ where: { id } })

		if (departamentoToRemove) {
			await this.invalidateCache(departamentoToRemove.get({ plain: true }))
		}
	}

	private async invalidateCache(departamentoData: Partial<DepartamentoPrimitives>): Promise<void> {
		const { id, name } = departamentoData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (name) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:name:${name}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}
