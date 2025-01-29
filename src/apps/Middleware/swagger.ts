import swaggerJsdoc from 'swagger-jsdoc'
import swaggerAutogen from 'swagger-autogen'

const doc = {
	info: {
		title: 'Inventario APP',
		description:
			'Portal de soporte técnico para el manejo de inventarios de equipos de computación',
		host: 'localhost:5000/api/v1',
		basePath: '/',
		schemes: ['http', 'https'],
		consumes: ['application/json'],
		produces: ['application/json']
	}
}

const outputFile = './swagger-output.json'
const routes = ['./src/apps/routes/index.ts']

const options = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'Inventario App',
			version: '1.0.0',
			description:
				'Aplicación para el manejo del inventarios de equipos y personal de la empresa'
		}
	},
	apis: ['src/**/*.route.*']
}

swaggerAutogen()(outputFile, routes)
export const swaggerDocs = swaggerJsdoc(options)
