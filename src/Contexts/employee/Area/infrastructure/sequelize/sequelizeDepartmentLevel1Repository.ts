import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoName } from '../../../Cargo/domain/CargoName'
import { type DepartmentPrimitives } from '../../domain/entity/IDeparment'
import { type DepartmentRepository } from '../../domain/repository/DepartmentRepository'
import { DepartmentLevel1Model } from './DepartmenLevel1Schema'
import { DepartmentId } from '../../domain/value-object/DepartmentId'


export class SequelizeDepartmentLevel1Repository implements DepartmentRepository<DepartmentPrimitives> {
    private readonly cacheKey: string = 'departmentLevel1'
    constructor(private readonly cache: CacheService) { }
    async searchAll(): Promise<DepartmentPrimitives[]> {
        return await this.cache.getCachedData(this.cacheKey, async () => {
            return await DepartmentLevel1Model.findAll()
        })
    }

    async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DepartmentPrimitives>> {
        return await DepartmentLevel1Model.findByPk(id) ?? null
    }

    async searchByName(name: Primitives<CargoName>): Promise<Nullable<DepartmentPrimitives>> {
        return await DepartmentLevel1Model.findOne({ where: { name } }) ?? null
    }

    async save(payload: DepartmentPrimitives): Promise<void> {
        const { id } = payload
        const departmentLevel1 = await DepartmentLevel1Model.findByPk(id) ?? null
        if (departmentLevel1 === null) {
            await DepartmentLevel1Model.create({ ...payload })
        } else {
            departmentLevel1.set({ ...payload })
            await departmentLevel1.save()
        }
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }

    async remove(id: Primitives<DepartmentId>): Promise<void> {
        await DepartmentLevel1Model.destroy({ where: { id } })
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }
}
