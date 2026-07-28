import type { Request, Response, NextFunction } from 'express'
import { config } from '../../Contexts/Shared/infrastructure/config'
import { ForbiddenError } from '../../Contexts/Shared/domain/errors/ForbiddenError'

export const internalAuthMiddleware = (req: Request, res: Response, next: NextFunction): void => {
	const internalKey = req.header('X-Internal-Key')
	const expectedKey = config?.internalSharedSecret

	if (!expectedKey) {
		console.error('Internal Auth Middleware: INTERNAL_SHARED_SECRET is not set in the environment variables.')
		return next(new ForbiddenError('Internal server configuration error.'))
	}

	if (!internalKey || internalKey !== expectedKey) {
		const message = !internalKey ? 'Missing internal key' : 'Invalid internal key'
		return next(new ForbiddenError(message))
	}
	next()
}
