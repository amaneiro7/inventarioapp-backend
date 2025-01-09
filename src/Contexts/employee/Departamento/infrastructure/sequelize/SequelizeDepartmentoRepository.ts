import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoName } from '../../../Cargo/domain/CargoName'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentoPrimitives } from '../../domain/Departmento'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { DepartmentoModel } from './DepartmenoSchema'



export class SequelizeDepartmentoRepository implements DepartmentRepository<DepartmentoPrimitives> {
    private readonly cacheKey: string = 'departmento'
    constructor(private readonly cache: CacheService) { }
    async searchAll(): Promise<DepartmentoPrimitives[]> {
        return await this.cache.getCachedData(this.cacheKey, async () => {
            return await DepartmentoModel.findAll()
        })
    }

    async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DepartmentoPrimitives>> {
        return await DepartmentoModel.findByPk(id) ?? null
    }

    async searchByName(name: Primitives<CargoName>): Promise<Nullable<DepartmentoPrimitives>> {
        return await DepartmentoModel.findOne({ where: { name } }) ?? null
    }

    async save(payload: DepartmentoPrimitives): Promise<void> {
        const { id, cargos, ...restPayload } = payload
        const departmento = await DepartmentoModel.findByPk(id) ?? null
        if (departmento === null) {
            const newDepartmentso = await DepartmentoModel.create({
                ...restPayload,
                id
            })
            await newDepartmentso.setCargos(cargos)
        } else {
            departmento.set({ ...restPayload })
            await departmento.save()
            await departmento.setCargos(cargos)
        }
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }

    async remove(id: Primitives<DepartmentId>): Promise<void> {
        await DepartmentoModel.destroy({ where: { id } })
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }
}
