import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoName } from '../../../Cargo/domain/CargoName'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartamentoPrimitives } from '../../domain/Departamento'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { DepartamentoModel } from './DepartamentoSchema'



export class SequelizeDepartamentoRepository implements DepartmentRepository<DepartamentoPrimitives> {
    private readonly cacheKey: string = 'Departamento'
    constructor(private readonly cache: CacheService) { }
    async searchAll(): Promise<DepartamentoPrimitives[]> {
        return await this.cache.getCachedData(this.cacheKey, async () => {
            return await DepartamentoModel.findAll()
        })
    }

    async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DepartamentoPrimitives>> {
        return await DepartamentoModel.findByPk(id) ?? null
    }

    async searchByName(name: Primitives<CargoName>): Promise<Nullable<DepartamentoPrimitives>> {
        return await DepartamentoModel.findOne({ where: { name } }) ?? null
    }

    async save(payload: DepartamentoPrimitives): Promise<void> {
        const { id, cargos, ...restPayload } = payload
        const departamento = await DepartamentoModel.findByPk(id) ?? null
        if (departamento === null) {
            const newDepartmentso = await DepartamentoModel.create({
                ...restPayload,
                id
            })
            await newDepartmentso.setCargos(cargos)
        } else {
            departamento.set({ ...restPayload })
            await departamento.save()
            await departamento.setCargos(cargos)
        }
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }

    async remove(id: Primitives<DepartmentId>): Promise<void> {
        await DepartamentoModel.destroy({ where: { id } })
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }
}
