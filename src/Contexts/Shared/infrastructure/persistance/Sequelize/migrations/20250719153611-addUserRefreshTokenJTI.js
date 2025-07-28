const crypto = require('node:crypto')
;('use strict')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('users', 'user_secret', {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: crypto.randomBytes(32).toString('hex'),
			onUpdate: 'cascade',
			onDelete: 'cascade'
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('users', 'user_secret')
	}
}
