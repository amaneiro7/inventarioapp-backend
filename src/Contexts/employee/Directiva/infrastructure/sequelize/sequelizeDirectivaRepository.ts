import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DirectivaModel } from './DirectivaSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DirectivaDto, type DirectivaPrimitives } from '../../domain/Directiva.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class SequelizeDirectivaRepository
	extends CriteriaToSequelizeConverter
	implements DepartmentRepository<DirectivaDto>
{
	private readonly cacheKey: string = 'directiva'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<DirectivaDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } = await DirectivaModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DirectivaDto>> {
		return (
			(await DirectivaModel.findByPk(id, {
				include: [
					{
						association: 'cargos',
						attributes: ['id', 'name'],
						through: { attributes: [] }
					}
					// 'employee'
				]
			})) ?? null
		)
	}

	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<DirectivaDto>> {
		return (await DirectivaModel.findOne({ where: { name } })) ?? null
	}

	async save(payload: DirectivaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { id, cargos, ...restPayload } = payload
			const directiva = (await DirectivaModel.findByPk(id, { transaction })) ?? null
			if (directiva) {
				await directiva.update(restPayload, { transaction })
				await directiva.setCargos(cargos, { transaction })
			} else {
				const newDirectiva = await DirectivaModel.create({ ...restPayload, id }, { transaction })
				await newDirectiva.setCargos(cargos, { transaction })
			}
			await transaction.commit()
			await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		await DirectivaModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
