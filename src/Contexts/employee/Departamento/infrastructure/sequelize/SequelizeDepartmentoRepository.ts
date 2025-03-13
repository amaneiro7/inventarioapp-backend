import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoName } from '../../../Cargo/domain/CargoName'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { DepartamentoModel } from './DepartamentoSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DepartamentoDto, type DepartamentoPrimitives } from '../../domain/Departamento.dto'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DepartamentoAssociation } from './DepartamentoAssociation'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class SequelizeDepartamentoRepository
	extends CriteriaToSequelizeConverter
	implements DepartmentRepository<DepartamentoDto>
{
	private readonly cacheKey: string = 'departamento'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<DepartamentoDto>> {
		const options = this.convert(criteria)
		const opt = DepartamentoAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await DepartamentoModel.findAndCountAll(opt)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DepartamentoDto>> {
		return (
			(await DepartamentoModel.findByPk(id, {
				attributes: ['id', 'name', 'createdAt', 'updatedAt'],
				include: [
					{
						association: 'vicepresidenciaEjecutiva',
						attributes: ['name'],
						include: [
							{
								association: 'directiva',
								attributes: ['id', 'name']
							}
						]
					},
					{
						association: 'centroCosto',
						attributes: ['id', 'name']
					},
					{
						association: 'cargos',
						attributes: ['id', 'name'],
						through: { attributes: [] }
					},
					'employee'
				]
			})) ?? null
		)
	}

	async searchByName(name: Primitives<CargoName>): Promise<Nullable<DepartamentoDto>> {
		return (await DepartamentoModel.findOne({ where: { name } })) ?? null
	}

	async save(payload: DepartamentoPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { id, cargos, ...restPayload } = payload
			const departamento = (await DepartamentoModel.findByPk(id)) ?? null
			if (departamento === null) {
				const newDepartmentso = await DepartamentoModel.create(
					{
						...restPayload,
						id
					},
					{ transaction }
				)
				console.log(newDepartmentso)
				await newDepartmentso.addCargo(cargos, { transaction })
			} else {
				departamento.set({ ...restPayload })
				await departamento.save({ transaction })
				await departamento.addCargo(cargos, { transaction })
			}
			await transaction.commit()
			await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		await DepartamentoModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
