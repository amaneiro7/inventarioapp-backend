import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DirectivaModel } from './DirectivaSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DirectivaDto, type DirectivaPrimitives } from '../../domain/Directiva.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @description Concrete implementation of the DirectivaRepository using Sequelize.
 */
export class SequelizeDirectivaRepository
	extends SequelizeCriteriaConverter
	implements DepartmentRepository<DirectivaDto>
{
	private readonly cacheKeyPrefix = 'directiva'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DirectivaDto>> {
		const options = this.convert(criteria)

		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<DirectivaDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { rows, count } = await DirectivaModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count } as ResponseDB<DirectivaDto>
			}
		})
	}

	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DirectivaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<DirectivaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const directiva = await DirectivaModel.findByPk(id, {
					include: [
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return directiva ? (directiva.get({ plain: true }) as DirectivaDto) : null
			}
		})
	}

	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<DirectivaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<DirectivaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const directiva = await DirectivaModel.findOne({ where: { name } })
				return directiva ? (directiva.get({ plain: true }) as DirectivaDto) : null
			}
		})
	}

	async save(payload: DirectivaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			const [directivaInstance] = await DirectivaModel.upsert(restPayload, { transaction, returning: true })

			if (cargos && cargos.length > 0) {
				await directivaInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				await directivaInstance.setCargos([], { transaction })
			}

			await transaction.commit()
			await this.invalidateCache(restPayload)
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving Directiva: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		const directivaToRemove = await DirectivaModel.findByPk(id)

		await DirectivaModel.destroy({ where: { id } })

		if (directivaToRemove) {
			await this.invalidateCache(directivaToRemove.get({ plain: true }))
		}
	}

	private async invalidateCache(directivaData: Partial<DirectivaPrimitives>): Promise<void> {
		const { id, name } = directivaData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (name) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:name:${name}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}
