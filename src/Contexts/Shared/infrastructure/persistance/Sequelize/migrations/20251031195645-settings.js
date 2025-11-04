'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('settings', {
			key: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false
			},
			value: {
				type: Sequelize.STRING,
				allowNull: false
			},
			type: {
				type: Sequelize.ENUM('string', 'number', 'boolean', 'json'),
				allowNull: false,
				defaultValue: 'string'
			},
			group: {
				type: Sequelize.STRING,
				allowNull: false
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false
			},
			is_editable: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			is_protected: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('settings')
	}
}
