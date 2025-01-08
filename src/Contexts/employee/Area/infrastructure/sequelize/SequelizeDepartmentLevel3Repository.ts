import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentLevel3Primitives } from '../../domain/entity/DepartmentLevel3'
import { type CargoName } from '../../../Cargo/domain/CargoName'
import { type DepartmentRepository } from '../../domain/repository/DepartmentRepository'
import { DepartmentId } from '../../domain/value-object/DepartmentId'
import { DepartmentLevel3Model } from './DepartmenLevel3Schema'


export class SequelizeDepartmentLevel3Repository implements DepartmentRepository<DepartmentLevel3Primitives> {
    private readonly cacheKey: string = 'departmentLevel3'
    constructor(private readonly cache: CacheService) { }
    async searchAll(): Promise<DepartmentLevel3Primitives[]> {
        return await this.cache.getCachedData(this.cacheKey, async () => {
            return await DepartmentLevel3Model.findAll()
        })
    }

    async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DepartmentLevel3Primitives>> {
        return await DepartmentLevel3Model.findByPk(id) ?? null
    }

    async searchByName(name: Primitives<CargoName>): Promise<Nullable<DepartmentLevel3Primitives>> {
        return await DepartmentLevel3Model.findOne({ where: { name } }) ?? null
    }

    async save(payload: DepartmentLevel3Primitives): Promise<void> {
        const { id, cargos, ...restPayload } = payload
        const departmentLevel3 = await DepartmentLevel3Model.findByPk(id) ?? null
        if (departmentLevel3 === null) {
            const newDepartmentsLevel3 = await DepartmentLevel3Model.create({
                ...restPayload,
                id
            })
            await newDepartmentsLevel3.setCargos(cargos)
        } else {
            departmentLevel3.set({ ...restPayload })
            await departmentLevel3.save()
            await departmentLevel3.setCargos(cargos)
        }
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }

    async remove(id: Primitives<DepartmentId>): Promise<void> {
        await DepartmentLevel3Model.destroy({ where: { id } })
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }
}
