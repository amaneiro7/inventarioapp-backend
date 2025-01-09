import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/domain/repository/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type DirectivaPrimitives } from '../../domain/Directiva'
import { DirectivaModel } from './DirectivaSchema'


export class SequelizeDirectivaRepository implements DepartmentRepository<DirectivaPrimitives> {
    private readonly cacheKey: string = 'directiva'
    constructor(private readonly cache: CacheService) { }
    async searchAll(): Promise<DirectivaPrimitives[]> {
        return await this.cache.getCachedData(this.cacheKey, async () => {
            return await DirectivaModel.findAll()
        })
    }

    async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DirectivaPrimitives>> {
        return await DirectivaModel.findByPk(id) ?? null
    }

    async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<DirectivaPrimitives>> {
        return await DirectivaModel.findOne({ where: { name } }) ?? null
    }

    async save(payload: DirectivaPrimitives): Promise<void> {
        const { id } = payload
        const Directiva = await DirectivaModel.findByPk(id) ?? null
        if (Directiva === null) {
            await DirectivaModel.create({ ...payload })
        } else {
            Directiva.set({ ...payload })
            await Directiva.save()
        }
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }

    async remove(id: Primitives<DepartmentId>): Promise<void> {
        await DirectivaModel.destroy({ where: { id } })
        await this.cache.removeCachedData(this.cacheKey)
        await this.searchAll()
    }
}
