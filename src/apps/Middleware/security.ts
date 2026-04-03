import type { NextFunction, Request, Response } from 'express'
import { randomBytes } from 'node:crypto'
import helmet, { type HelmetOptions } from 'helmet'
import compression from 'compression'

const nonceMiddleware = (req: Request, res: Response, next: NextFunction) => {
	// Generar un nonce único para cada respuesta y almacenarlo en res.locals
	res.locals.cspNonce = randomBytes(16).toString('base64')
	next()
}

// Enhanced Helmet configuration with a strict Content Security Policy
const helmetOptions: HelmetOptions = {
	contentSecurityPolicy: {
		directives: {
			defaultSrc: ["'self'"], // Only allow resources from the same origin by default
			scriptSrc: ["'self'", (req, res) => `'nonce-${(res as Response).locals.cspNonce}'`], // Allow inline scripts (consider removing 'unsafe-inline' if possible)
			styleSrc: ["'self'", 'https://fonts.googleapis.com'], // Allow styles from self and Google Fonts
			fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Allow fonts from self and Google Fonts
			imgSrc: ["'self'", 'data:'], // Allow images from self and data URIs
			connectSrc: ["'self'", 'https://srvdocker.corp.bnc.com'], // Limit AJAX, WebSockets, etc. to the same origin
			objectSrc: ["'none'"], // Disallow plugins like Flash
			upgradeInsecureRequests: [], // Automatically upgrade HTTP requests to HTTPS
			// SOLUCIÓN A CLICKJACKING
			frameAncestors: ["'self'"],
			// SOLUCIÓN A TRUSTED TYPES
			requireTrustedTypesFor: ["'script'"]
		}
	},
	// SOLUCIÓN A HSTS (Empieza con un maxAge bajo como 1 mes si estás probando)
	strictTransportSecurity: {
		maxAge: 31536000, // 1 año en segundos
		includeSubDomains: true,
		preload: true
	},
	// SOLUCIÓN A COOP
	crossOriginOpenerPolicy: { policy: 'same-origin' },
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
export const security = [nonceMiddleware, helmet(helmetOptions), compression(compressionOptions)]
