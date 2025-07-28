import swaggerJsdoc from 'swagger-jsdoc'
import { config } from '../../Contexts/Shared/infrastructure/config'

/**
 * @description Options for `swagger-jsdoc` to generate Swagger documentation from JSDoc comments.
 */
const options = {
	openapi: '3.0.0',
	definition: {
		info: {
			title: 'Inventario App API',
			version: '1.0.0',
			description: 'API para la gestión de inventarios de equipos y personal de la empresa.'
		},
		servers: [
			{
				url: `http://localhost:${config.port}/api/v1`,
				description: 'Servidor de desarrollo (HTTP)'
			},
			{
				url: `https://localhost:${config.port}/api/v1`,
				description: 'Servidor de desarrollo (HTTPS)'
			}
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
					description: 'Autenticación JWT con token Bearer'
				}
			}
		},
		security: [
			{
				bearerAuth: []
			}
		]
	},
	apis: ['./src/apps/routes/**/*.ts', './src/apps/controllers/**/*.ts'] // Rutas a los archivos con comentarios JSDoc
}

/**
 * @description The generated Swagger documentation object.
 */
export const swaggerSpec = swaggerJsdoc(options)
