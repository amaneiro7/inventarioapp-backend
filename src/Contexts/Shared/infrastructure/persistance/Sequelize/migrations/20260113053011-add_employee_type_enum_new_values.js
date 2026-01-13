'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// 1. PostgreSQL identifica los ENUMs como tipos personalizados.
		// Por defecto Sequelize los nombra: "enum_NombreTabla_NombreColumna"
		const enumName = 'enum_employees_type'

		try {
			// 2. Añadimos los nuevos valores.
			// IMPORTANTE: 'IF NOT EXISTS' evita errores si la migración se corre dos veces.
			await queryInterface.sequelize.query(`ALTER TYPE "${enumName}" ADD VALUE IF NOT EXISTS 'contractor'`)
			await queryInterface.sequelize.query(`ALTER TYPE "${enumName}" ADD VALUE IF NOT EXISTS 'apprentice'`)
		} catch (error) {
			// Si por alguna razón el nombre del enum es distinto en tu DB,
			// esto capturará el error.
			console.error('Error al actualizar el ENUM:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		/**
		 * NOTA SOBRE POSTGRESQL:
		 * No existe una sentencia "REMOVE VALUE" para ENUMs en Postgres.
		 * Para revertir esto, habría que borrar la columna, borrar el tipo y recrearlo,
		 * lo cual borraría los datos actuales de la columna 'type'.
		 * * En la práctica, añadir valores a un ENUM se considera una operación "no reversible"
		 * de forma automática si ya hay datos usándolos.
		 */
		console.log('El rollback de valores ENUM no es soportado nativamente por PostgreSQL sin pérdida de datos.')
	}
}
