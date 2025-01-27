import { type Criteria } from '../domain/criteria/Criteria'
import { type ResponseService } from '../domain/ResponseType'

export abstract class GetAllBaseService<DTO> {
	abstract run(criteria: Criteria): Promise<ResponseService<DTO>>

	response<T>({
		data,
		total,
		pageNumber,
		pageSize
	}: {
		data: T
		total: number
		pageNumber?: number | null
		pageSize?: number | null
	}) {
		return {
			data,
			info: {
				total,
				page: pageNumber ?? 1,
				totalPage: this.calcularPaginas(total, pageSize)
			}
		}
	}

	calcularPaginas(totalElementos: number, pageSize?: number | null): number {
		// si el pageSize es null solo devuelve una pagina ya que esta devolviendo todos los elementos de la lista
		if (!pageSize) return 1
		// Calcula el número de páginas redondeando hacia arriba
		return Math.ceil(totalElementos / pageSize)
	}
}
