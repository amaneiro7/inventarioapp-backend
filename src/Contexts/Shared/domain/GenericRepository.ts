import { type Nullable } from "./Nullable";

export abstract class GenericRepository<T> {
  abstract save(payload: T): void

  abstract searchAll(): Promise<T[]>

  abstract searchById(id: string): Promise<Nullable<T>>

  abstract remove(id: string): Promise<void>
}
