import type { Request, Response, NextFunction } from 'express'
import { ForbiddenError } from '../../Contexts/Shared/domain/errors/ForbiddenError'

const ALLOWED_CLIENT_ID = 'corporate-signature-widget'

export const publicClientMiddleware = (req: Request, res: Response, next: NextFunction): void => {
	const clientId = req.header('x-client-id')

	if (!clientId || clientId !== ALLOWED_CLIENT_ID) {
		return next(new ForbiddenError('Acceso denegado: Identificador de cliente inválido o ausente.'))
	}

	next()
}
