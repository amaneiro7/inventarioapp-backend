import { type Sequelize } from 'sequelize'
import { resolve } from 'node:path'
import { globSync } from 'glob'

interface IModelinstance {
	initialize: (sequelize: Sequelize) => Promise<void>
	associate: (models: Sequelize['models']) => Promise<void>
}

const path = 'src/**/*Schema.*'
const routes = globSync(path)
export async function initilizarModels(sequelize: Sequelize): Promise<void> {
	// Primero se inicializan los modelos
	for (const route of routes) {
		await initModels(route, sequelize)
	}
	// Luego se definen sus relaciones
	for (const route of routes) {
		await defineAssociations(route, sequelize.models)
	}
}

async function initModels(path: string, sequelize: Sequelize): Promise<void> {
	const routePath: IModelinstance = require(resolve(path))
	const [_, instance] = Object.entries(routePath)[0]
	// Verifica si la instancia tiene el metodo initialize y si es una funcion
	if (typeof instance.initialize === 'function') {
		await instance.initialize(sequelize)
	}
}

// Define associations between different Sequelize models
export async function defineAssociations(path: string, models: Sequelize['models']): Promise<void> {
	const routePath: IModelinstance = require(resolve(path))
	const [_, instance] = Object.entries(routePath)[0]
	// Verifica si la instancia tiene el metodo initialize y si es una funcion
	if (typeof instance.associate === 'function') {
		await instance.associate(models)
	}
}
