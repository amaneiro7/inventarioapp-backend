'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await Promise.all([
			queryInterface.addColumn('operating_system_versions', 'build_number', {
				type: Sequelize.STRING,
				allowNull: true,
				unique: false
			}),
			queryInterface.addColumn('operating_system_versions', 'version', {
				type: Sequelize.STRING,
				allowNull: true,
				unique: false
			}),
			queryInterface.changeColumn('operating_system_versions', 'name', {
				type: Sequelize.STRING,
				allowNull: false,
				unique: false
			})
		])
	},

	async down(queryInterface, Sequelize) {
		await Promise.all([
			queryInterface.removeColumn('operating_system_versions', 'build_number'),
			queryInterface.removeColumn('operating_system_versions', 'version'),
			queryInterface.changeColumn('operating_system_versions', 'name', {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			})
		])
	}
}
