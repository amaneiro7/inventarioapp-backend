export enum TimeTolive {
	TOO_SHORT = 60, // 60 segundos
	SHORT = 10 * 60, // 10 minutos
	MEDIUM = 24 * 10 * 60, // 1 dia
	LONG = 15 * 24 * 60 * 60, // 15 dias
	TOO_LONG = 30 * 24 * 60 * 60 // 1 mes
}

export abstract class CacheRepository {
	abstract get(key: string): Promise<string | null>

	abstract set(key: string, value: string, ex?: TimeTolive): Promise<void>

	abstract del(key: string): Promise<void>

	abstract close(): Promise<void>

	abstract connect(): Promise<void>
}
