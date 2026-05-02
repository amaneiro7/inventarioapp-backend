import type { Request, Response, NextFunction } from 'express'
import type { Controller } from '../controller'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { type CacheClearer } from '../../../Contexts/Shared/application/CacheClearer'

export class CacheClearController implements Controller {
	private readonly cacheClearer: CacheClearer

	constructor({ cacheClearer }: { cacheClearer: CacheClearer }) {
		this.cacheClearer = cacheClearer
	}

	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		const { pattern } = req.body // Opcional: para borrar solo ciertas llaves ej: "devices:*"

		try {
			await this.cacheClearer.run(pattern)
			res.status(httpStatus[200].statusCode).send({ message: 'Caché eliminado correctamente' })
		} catch (error) {
			next(error)
		}
	}
}
