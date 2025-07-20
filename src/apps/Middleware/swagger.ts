import swaggerJsdoc from 'swagger-jsdoc'
import swaggerAutogen from 'swagger-autogen'

/**
 * @description The main Swagger document configuration.
 * This object defines the basic information for the API, such as the title, description, and host.
 */
const doc = {
	info: {
		title: 'Inventario APP',
		description: 'Portal de soporte técnico para el manejo de inventarios de equipos de computación',
		host: 'localhost:5000/api/v1',
		basePath: '/',
		schemes: ['http', 'https'],
		consumes: ['application/json'],
		produces: ['application/json']
	}
}

const outputFile = './swagger-output.json'
const routes = ['./src/apps/routes/index.ts']

/**
 * @description Options for `swagger-jsdoc` to generate Swagger documentation from JSDoc comments.
 */
const options = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'Inventario App',
			version: '1.0.0',
			description: 'Aplicación para el manejo del inventarios de equipos y personal de la empresa'
		}
	},
	apis: ['src/**/*.route.*']
}

// Automatically generate the Swagger output file
swaggerAutogen()(outputFile, routes, doc)

/**
 * @description The generated Swagger documentation object.
 */
export const swaggerDocs = swaggerJsdoc(options)
