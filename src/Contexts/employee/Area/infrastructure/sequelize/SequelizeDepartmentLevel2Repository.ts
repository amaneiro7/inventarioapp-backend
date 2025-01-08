import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentLevel2Primitives } from '../../domain/entity/DepartmentLevel2'
import { type CargoName } from '../../../Cargo/domain/CargoName'
import { type DepartmentRepository } from '../../domain/repository/DepartmentRepository'
import { DepartmentId } from '../../domain/value-object/DepartmentId'
import { DepartmentLevel2Model } from './DepartmenLevel2Schema'


export class SequelizeDepartmentLevel2Repository implements DepartmentRepository<DepartmentLevel2Primitives> {
    private readonly cacheKey: string = 'departmentLevel2'
    constructor(private readonly cache: CacheService) { }
    async searchAll(): Promise<DepartmentLevel2Primitives[]> {
        return await this.cache.getCachedData(this.cacheKey, async () => {
            return await DepartmentLevel2Model.findAll()
        })
    }

    async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DepartmentLevel2Primitives>> {
        return await DepartmentLevel2Model.findByPk(id) ?? null
    }

    async searchByName(name: Primitives<CargoName>): Promise<Nullable<DepartmentLevel2Primitives>> {
        return await DepartmentLevel2Model.findOne({ where: { name } }) ?? null
    }

    async save(payload: DepartmentLevel2Primitives): Promise<void> {
        const { id } = payload
        const departmentLevel2 = await DepartmentLevel2Model.findByPk(id) ?? null
        if (departmentLevel2 === null) {
            await DepartmentLevel2Model.create({ ...payload })
        } else {
            departmentLevel2.set({ ...payload })
            await departmentLevel2.save()
        }
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }

    async remove(id: Primitives<DepartmentId>): Promise<void> {
        await DepartmentLevel2Model.destroy({ where: { id } })
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }
}
