'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('access_policies', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			role_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'role',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			cargo_id: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'cargos',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			departamento_id: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'departamentos',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			vicepresidencia_id: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'vicepresidencias',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			vicepresidencia_ejecutiva_id: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'vicepresidencia_ejecutivas',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			directiva_id: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'directivas',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			priority: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 1
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('access_policies')
	}
}
