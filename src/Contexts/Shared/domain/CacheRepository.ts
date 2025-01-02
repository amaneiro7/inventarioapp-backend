export abstract class CacheRepository {
    abstract get(key: string): Promise<string | null>

    abstract set(key: string, value: string): Promise<void>

    abstract del(key: string): Promise<void>

    abstract close(): Promise<void>

    abstract connect(): Promise<void>
}
