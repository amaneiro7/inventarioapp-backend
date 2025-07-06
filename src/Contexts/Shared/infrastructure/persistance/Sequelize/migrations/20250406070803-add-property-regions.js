'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('regions', 'administrative_region_id', {
			type: Sequelize.STRING,
			allowNull: false,
			references: {
				model: 'administrative_regions',
				key: 'id'
			},
			defaultValue: '1',
			onUpdate: 'cascade',
			onDelete: 'cascade'
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('regions', 'administrative_region_id')
	}
}
