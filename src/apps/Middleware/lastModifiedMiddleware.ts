import { type Request, type Response, type NextFunction } from 'express'

/**
 * @description Sets the `Last-Modified` header to the current date and time.
 * This header helps clients determine if the content has changed since their last request,
 * enabling conditional requests with `If-Modified-Since`.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
	* @param {NextFunction} next - The next middleware function.
 */
export const lastModifiedMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const lastModified = new Date().toUTCString()
	res.set('Last-Modified', lastModified)
	next()
}
