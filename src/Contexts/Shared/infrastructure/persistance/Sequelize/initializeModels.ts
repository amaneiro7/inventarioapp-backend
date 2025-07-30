import { resolve } from 'node:path'
import { globSync } from 'glob'
import { type Sequelize } from 'sequelize'
import { config } from '../../config'

interface IModelinstance {
	initialize: (sequelize: Sequelize) => Promise<void>
	associate: (models: Sequelize['models']) => Promise<void>
}

export async function initializeModels(sequelize: Sequelize): Promise<void> {
	const isProduction = config.isProd
	const path = isProduction ? 'dist/src/**/*Schema.js' : 'src/**/*Schema.*'
	const routes = globSync(path)
	const modules: IModelinstance[] = []
	for (const route of routes) {
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		const routePath = require(resolve(process.cwd(), route))
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const [_, instance] = Object.entries(routePath)[0]
		modules.push(instance as IModelinstance)
	}

	// 1. Inicializar todos los modelos
	for (const module of modules) {
		if (typeof module.initialize === 'function') {
			await module.initialize(sequelize)
		}
	}

	// 2. Definir todas las asociaciones
	for (const module of modules) {
		if (typeof module.associate === 'function') {
			await module.associate(sequelize.models)
		}
	}
}
