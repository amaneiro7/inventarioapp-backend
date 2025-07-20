import { type CorsOptions } from 'cors'
import { whitelist } from './whitelist'

/**
 * @description CORS (Cross-Origin Resource Sharing) configuration options.
 * This configuration defines how the server responds to cross-origin requests.
 * It uses a whitelist to allow requests from specific domains, enhancing security.
 * It also allows requests from `devtunnels` for development purposes.
 */
export const options: CorsOptions = {
	/**
	 * @description Determines if a request's origin is allowed.
	 * @param {string | undefined} origin - The origin of the incoming request.
	 * @param {(err: Error | null, allow?: boolean) => void} callback - The callback to resolve the origin check.
	 */
	origin: (origin, callback) => {
		// Check if the origin is in the whitelist or is a devtunnels URL
		const isValidOrigin = whitelist.some(domain => origin?.includes(domain))

		if (!origin || isValidOrigin || origin?.includes('devtunnels')) {
			// Allow the request if it has no origin (e.g., same-origin) or is in the whitelist
			callback(null, true)
		} else {
			// Block the request if the origin is not allowed
			callback(new Error('Not allowed by CORS'))
		}
	},
	// Allow credentials (e.g., cookies, authorization headers) to be sent
	credentials: true,
	// Define the headers that are allowed in requests
	allowedHeaders: [
		'Content-Type',
		'Authorization',
		'Access-Control-Allow-Credentials',
		'Access-Control-Allow-Origin'
	],
	// Define the headers that are exposed to the client-side script
	exposedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Credentials', 'Access-Control-Allow-Origin']
}
