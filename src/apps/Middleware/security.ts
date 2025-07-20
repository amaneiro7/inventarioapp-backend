import { type Request, type Response } from 'express'
import helmet, { type HelmetOptions } from 'helmet'
import compression from 'compression'

// Enhanced Helmet configuration with a strict Content Security Policy
const helmetOptions: HelmetOptions = {
	contentSecurityPolicy: {
		directives: {
			defaultSrc: ["'self'"], // Only allow resources from the same origin by default
			scriptSrc: ["'self'", "'unsafe-inline'"], // Allow inline scripts (consider removing 'unsafe-inline' if possible)
			styleSrc: ["'self'", 'https://fonts.googleapis.com'], // Allow styles from self and Google Fonts
			fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Allow fonts from self and Google Fonts
			imgSrc: ["'self'", 'data:'], // Allow images from self and data URIs
			connectSrc: ["'self'"], // Limit AJAX, WebSockets, etc. to the same origin
			objectSrc: ["'none'"], // Disallow plugins like Flash
			upgradeInsecureRequests: [] // Automatically upgrade HTTP requests to HTTPS
		}
	},
	referrerPolicy: { policy: 'strict-origin-when-cross-origin' } // A modern, secure referrer policy
}

// Fine-tuned Compression configuration
const compressionOptions = {
	level: 6, // A good balance between compression and CPU usage
	threshold: 1024, // Don't compress responses smaller than 1kb
	filter: (req: Request, res: Response) => {
		// Don't compress if the request has a 'x-no-compression' header
		if (req.headers['x-no-compression']) {
			return false
		}
		// Fallback to the default filter
		return compression.filter(req, res)
	}
}

/**
 * @description A centralized middleware with enhanced security and performance configurations.
 */
export const security = [helmet(helmetOptions), compression(compressionOptions)]
