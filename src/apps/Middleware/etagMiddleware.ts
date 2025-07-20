import { type NextFunction, type Request, type Response } from 'express'
import crypto from 'node:crypto'

/**
 * @description Generates an ETag for the response body to support conditional requests.
 * The ETag is an MD5 hash of the response body, which allows clients to cache the response
 * and make conditional GET requests using the `If-None-Match` header.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const etagMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const originalSend = res.send

	res.send = function (body) {
		// Only generate ETag for non-empty responses
		if (body) {
			const bodyString = typeof body === 'string' ? body : JSON.stringify(body)
			const eTag = generateETag(bodyString)
			res.set('ETag', eTag)
		}

		return originalSend.call(this, body)
	}

	next()
}

/**
 * @description Generates an MD5 hash for the given string to be used as an ETag.
 * @param {string} body - The response body to hash.
 * @returns {string} The generated ETag string.
 */
const generateETag = (body: string): string => {
	const hash = crypto.createHash('md5').update(body).digest('hex')
	return `"${hash}"`
}
