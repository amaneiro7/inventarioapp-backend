import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { VicepresidenciaModel } from './VicepresidenciaSchema'
import { VicepresidenciaAssociation } from './VicepresidenciaAssociation'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type VicepresidenciaDto, type VicepresidenciaPrimitives } from '../../domain/Vicepresidencia.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'

/**
 * @description Concrete implementation of the VicepresidenciaRepository using Sequelize.
 */
export class SequelizeVicepresidenciaRepository
	extends SequelizeCriteriaConverter
	implements DepartmentRepository<VicepresidenciaDto>
{
	private readonly cacheKeyPrefix = 'vicepresidencia'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<VicepresidenciaDto>> {
		const options = this.convert(criteria)
		const opt = VicepresidenciaAssociation.convertFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<VicepresidenciaDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { rows, count } = await VicepresidenciaModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<VicepresidenciaDto>
			}
		})
	}

	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<VicepresidenciaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<VicepresidenciaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidencia = await VicepresidenciaModel.findByPk(id, {
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
						},
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return vicepresidencia ? (vicepresidencia.get({ plain: true }) as VicepresidenciaDto) : null
			}
		})
	}

	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<VicepresidenciaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<VicepresidenciaDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const vicepresidencia = await VicepresidenciaModel.findOne({ where: { name } })
				return vicepresidencia ? (vicepresidencia.get({ plain: true }) as VicepresidenciaDto) : null
			}
		})
	}

	async save(payload: VicepresidenciaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			const [vicepresidenciaInstance] = await VicepresidenciaModel.upsert(restPayload, {
				transaction,
				returning: true
			})

			if (cargos && cargos.length > 0) {
				await vicepresidenciaInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				await vicepresidenciaInstance.setCargos([], { transaction })
			}

			await transaction.commit()
			await this.invalidateCache(restPayload)
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving Vicepresidencia: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		const vicepresidenciaToRemove = await VicepresidenciaModel.findByPk(id)

		await VicepresidenciaModel.destroy({ where: { id } })

		if (vicepresidenciaToRemove) {
			await this.invalidateCache(vicepresidenciaToRemove.get({ plain: true }))
		}
	}

	private async invalidateCache(vicepresidenciaData: Partial<VicepresidenciaPrimitives>): Promise<void> {
		const { id, name } = vicepresidenciaData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (name) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:name:${name}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}
